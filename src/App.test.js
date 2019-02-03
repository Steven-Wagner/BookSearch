import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import testData from './testData';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App booksData={testData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<App booksData={testData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });