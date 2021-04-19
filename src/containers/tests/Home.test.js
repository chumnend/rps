import { screen, waitFor } from '@testing-library/react';
import { customRender } from '../../utils/test-utils';
import Home from '../Home';

describe('<Home />', () => {
  it('expects to render correctly', async () => {
    customRender(<Home />);

    await waitFor(() => {
      // sanity check
      expect(screen.queryByTestId('home')).toBeInTheDocument();
    });
  });
});
