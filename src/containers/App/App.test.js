import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { FirebaseProvider } from '../../store/firebase';
import App from './App';

const renderWithContext = (component) => {
  const history = createMemoryHistory();
  return render(
    <FirebaseProvider>
      <Router history={history}>{component}</Router>
    </FirebaseProvider>,
  );
};

describe("<App />", () => {
  it('expects to render correctly', async () => {
    renderWithContext(<App />);
  
    expect(screen.queryByText(/Loading.../)).toBeInTheDocument();

    expect(await screen.findByText(/How To Play/)).toBeInTheDocument();
  });
});