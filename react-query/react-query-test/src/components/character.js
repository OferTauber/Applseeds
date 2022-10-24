import { useQuery } from 'react-query';

export default function Character() {
  const fetchChars = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    return await res.json();
  };

  const { data, status } = useQuery('characters', fetchChars);

  if (status === 'loading') return <div>Loading...</div>;

  if (status === 'error') return <div>Error!</div>;

  return (
    <div>
      {data.results?.map((char) => (
        <div key={char.id}>{char.name}</div>
      ))}
    </div>
  );
}
