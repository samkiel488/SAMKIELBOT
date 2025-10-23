import { useRouter } from 'next/router';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
