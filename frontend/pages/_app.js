import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../lib/auth';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </AuthProvider>
  );
}
