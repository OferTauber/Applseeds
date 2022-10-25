import { useInfiniteQuery } from 'react-query';
import Card from '../components/char';

const Infi = () => {
  const fetchChars = async ({
    pageParam = 'https://rickandmortyapi.com/api/character?page=1',
  }) => {
    const res = await fetch(pageParam);
    return await res.json();
  };

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

  if (status === 'loading') return <div>Loading...</div>;

  if (status === 'error') return <div>Error!</div>;

  const mapCards = () => {
    return data.pages.reduce((acc, cur) => {
      return acc.concat(
        cur.results.map((char) => <Card key={char.id} char={char} />)
      );
    }, []);
  };

  return (
    <>
      {mapCards()}
      <div>
        <button onClick={() => fetchNextPage()}>Load more</button>
      </div>
    </>
  );
};
export default Infi;
