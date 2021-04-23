import { screen, waitFor } from '@testing-library/react';
import { customRender } from '../test-utils';
import Landing from '../../components/Landing';

describe('<Home />', () => {
  it('expects to render correctly', async () => {
    customRender(<Landing />);

    await waitFor(() => {
      // sanity check
      expect(screen.queryByTestId('landing')).toBeInTheDocument();
    });
  });
});
