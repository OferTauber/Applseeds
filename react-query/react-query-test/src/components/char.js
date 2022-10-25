const Card = ({ char }) => {
  return (
    <div>
      <img src={char.image} />
      <div>
        <h3>{char.name}</h3>
        <p>{char.status}</p>
      </div>
    </div>
  );
};

export default Card;
