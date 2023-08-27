import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import App from '../App';
import store from '../redux/store';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Clean up on exiting
  unmountComponentAtNode(container);
  container.remove();
});

it('renders without crashing', () => {
  createRoot(container).render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
});
