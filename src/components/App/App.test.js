import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../store/auth';
import { FirebaseProvider } from '../../store/firebase';
import App from './App';

describe('<App>', () => {
  it('renders without crashing', () => {
    render(
      <FirebaseProvider>
        <AuthProvider>
          <Router>
            <App />
          </Router>
        </AuthProvider>
      </FirebaseProvider>,
    );
  });
});
