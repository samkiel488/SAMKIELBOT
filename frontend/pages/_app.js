import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';

const AuthProvider = dynamic(() => import('../lib/auth').then(mod => mod.AuthProvider), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
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
