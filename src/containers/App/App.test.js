import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { FirebaseProvider } from '../../store/firebase';
import App from './App';

const renderWithWrappers = (component) => {
  const history = createMemoryHistory();
  return render(
    <FirebaseProvider>
      <Router history={history}>{component}</Router>
    </FirebaseProvider>,
  );
};

it('should render <App /> correctly', async() => {
  renderWithWrappers(<App />);
});
