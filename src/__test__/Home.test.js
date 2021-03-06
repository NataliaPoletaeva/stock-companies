import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/Home';

describe('App component should render as expected', () => {
  test('render App', () => {
    const app = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });
});
