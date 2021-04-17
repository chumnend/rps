import { render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { FirebaseProvider } from '../store/firebase';
import App from './App';

const renderWithContext = (component) => {
  const history = createMemoryHistory();

  return render(
    <FirebaseProvider>
      <Router history={history}>{component}</Router>
    </FirebaseProvider>,
  );
};

describe('<App />', () => {
  it('expects to render correctly', async () => {
    renderWithContext(<App />);

    expect(screen.queryByText(/Loading.../)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/How To Play/)).toBeInTheDocument();

      expect(screen.queryAllByRole('header')).toHaveLength(1);
      expect(screen.queryAllByRole('navigation')).toHaveLength(1);
      expect(screen.queryAllByRole('button')).toHaveLength(3);
    });
  });
});
