import { useInfiniteQuery } from 'react-query';
import Card from '../components/char';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Infi = () => {
  const fetchChars = async ({
    pageParam = 'https://rickandmortyapi.com/api/character?page=1',
  }) => {
    const res = await fetch(pageParam);
    return await res.json();
  };

  const { ref, inView } = useInView();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(['RickAndMorty'], fetchChars, {
    getNextPageParam: (lastPage, pages) => {
      void pages;
      return lastPage.info.next;
    },
  });

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === 'loading') return <div>Loading...</div>;

  if (status === 'error') return <div>Error!</div>;

  const mapCards = () => {
    return data.pages.reduce((acc, cur) => {
      const cards = acc.concat(
        cur.results.map((char) => <Card key={char.id} char={char} />)
      );
      const refDiv = <div ref={ref}></div>;
      cards.splice(cards.length - 2, 0, refDiv);
      return cards;
    }, []);
  };

  return <>{mapCards()}</>;
};
export default Infi;
