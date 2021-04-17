import { render, screen, waitFor } from '@testing-library/react';
import { FirebaseProvider } from '../store/firebase';
import Home from './Home';

const renderWithContext = (component) => {
  return render(<FirebaseProvider>{component}</FirebaseProvider>);
};

describe('<Home />', () => {
  it('expects to render correctly', async () => {
    renderWithContext(<Home />);
    screen.debug();
  });
});
