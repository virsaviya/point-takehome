import { Inter } from 'next/font/google';
import ReviewApp from '@/components/ReviewApp';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-2 m-auto max-w-[600px] ${inter.className}`}
    >
      <h1 className="mb-2">Leave us a review</h1>
      <ReviewApp />
    </main>
  );
}
