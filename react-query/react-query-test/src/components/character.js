import { useState } from 'react';
import Card from './char';
import { useQuery } from 'react-query';

export default function Character() {
  const [page, setPage] = useState(40);

  const fetchChars = async ({ queryKey }) => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return await res.json();
  };

  const { data, status } = useQuery(['characters', page], fetchChars);

  if (status === 'loading') return <div>Loading...</div>;

  if (status === 'error') return <div>Error!</div>;

  return (
    <div>
      <div>
        <button
          disabled={page === 1}
          onClick={() => {
            setPage((old) => old - 1);
          }}
        >
          Prev
        </button>
        <button
          disabled={!data.info.next}
          onClick={() => {
            setPage((old) => old + 1);
          }}
        >
          Next
        </button>
      </div>
      <br></br>
      {data.results?.map((char) => (
        <Card key={char.id} char={char} />
      ))}
    </div>
  );
}
