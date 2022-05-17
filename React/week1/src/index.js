import React from 'react';
import ReactDOM from 'react-dom';
// import CommentDetail from './CommentsDetails';
// import ApprovalCard from './ApprovalCard';
// import ex4_1 from './4 Props/4.1/ex4_1';
// import ex4_2 from './4 Props/4.2/ex4_2';
// import Ex6_1 from './6 Class Based Components/6.1/ex6_1';
import Ex7_1 from './7 State/7.1/ex7_1';

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div>
      {/* {ex4_1()} */}
      {/* {ex4_2()} */}
      {/* <Ex6_1 /> */}
      <Ex7_1 />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
