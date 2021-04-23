import { screen, waitFor } from '@testing-library/react';
import { customRender } from '../test-utils';
import Home from '../../components/Home';

describe('<Home />', () => {
  it('expects to render correctly', async () => {
    customRender(<Home />);

    await waitFor(() => {
      // sanity check
      expect(screen.queryByTestId('home')).toBeInTheDocument();

      // check for two buttons
      expect(screen.queryAllByRole('button')).toHaveLength(2);
    });
  });
});
