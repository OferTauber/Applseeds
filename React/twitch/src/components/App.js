// import React, { Component } from 'react';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import StreamCreate from './streams/stream_create';
import StreamDelete from './streams/stream_deleat';
import StreamEdit from './streams/stream_edis';
import StreamList from './streams/stream_list';
import StreamShow from './streams/stream_show';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" exact component={StreamCreate} />
          <Route path="/stream/edit" exact component={StreamEdit} />
          <Route path="/stream/delet" exact component={StreamDelete} />
          <Route path="/stream/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
