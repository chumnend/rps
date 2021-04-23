import { screen, waitFor } from '@testing-library/react';
import { customRender } from '../test-utils';
import App from '../../components/App';

describe('<App />', () => {
  it('expects to render correctly', async () => {
    customRender(<App />);

    // check for loading indicator
    expect(screen.queryByText(/Loading.../)).toBeInTheDocument();

    await waitFor(() => {
      // check for header
      expect(screen.queryAllByRole('header')).toHaveLength(1);
      expect(screen.queryAllByRole('navigation')).toHaveLength(1);
      expect(screen.queryAllByRole('button')).toHaveLength(3);

      // check for landing page
      expect(screen.queryByTestId('landing')).toBeInTheDocument();
    });
  });

  it('expects to render notfound page', async () => {
    const { history } = customRender(<App />);
    history.push('/not-a-page');

    // check for loading indicator
    expect(screen.queryByText(/Loading.../)).toBeInTheDocument();

    await waitFor(() => {
      // check for header
      expect(screen.queryAllByRole('header')).toHaveLength(1);
      expect(screen.queryAllByRole('navigation')).toHaveLength(1);
      expect(screen.queryAllByRole('button')).toHaveLength(3);

      // check for notfound page
      expect(screen.queryByTestId('notfound')).toBeInTheDocument();
    });
  });
});
