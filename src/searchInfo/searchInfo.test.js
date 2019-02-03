import React from 'react';
import ReactDOM from 'react-dom';
import SearchInfo from './searchInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});