import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { FirebaseProvider } from '../services/firebase';

/**
 * Custom render function to setup components with providers.
 */
export const customRender = (component) => {
  const history = createMemoryHistory();

  render(
    <FirebaseProvider>
      <Router history={history}>{component}</Router>
    </FirebaseProvider>,
  );

  return { history };
};
