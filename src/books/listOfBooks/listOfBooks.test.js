import React from 'react';
import ReactDOM from 'react-dom';
import ListOfBooks from './listofBooks';
import testData from '../../testData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListOfBooks currentBooks={testData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});