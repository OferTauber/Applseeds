// import Accordion from './components/accordion';
import Serach from './components/serch';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React super popular',
  },
  {
    title: 'Lorem ipsum dolor sit.',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, qui?',
  },
];

function App() {
  return (
    <div className="App">
      <br />
      {/* <Accordion items={items} /> */}
      <Serach />
    </div>
  );
}

export default App;
