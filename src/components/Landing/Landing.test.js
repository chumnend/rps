import { screen, waitFor } from '@testing-library/react';
import { customRender } from '../../common/utils/test-utils';
import Landing from '../Landing';

describe('<Home />', () => {
  it('expects to render correctly', async () => {
    customRender(<Landing />);

    await waitFor(() => {
      // sanity check
      expect(screen.queryByTestId('landing')).toBeInTheDocument();
    });
  });
});
