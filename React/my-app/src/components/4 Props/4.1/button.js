// const btn = ({ innerText }) => {
const btn = (innerTeext, fontWiget) => {
  // console.log(innerTeext);
  return <button style={{ fontWeight: fontWiget }}>{innerTeext}</button>;
};

export default btn;
