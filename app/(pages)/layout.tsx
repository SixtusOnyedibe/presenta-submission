import type { Metadata } from 'next';
import Nav from '../../components/layout/nav';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className='bg-[#F1F1F1] min-h-[100vh] w-full grid grid-cols-5 '>
        <section className='col-span-1 pt-8'>
          <Nav />
        </section>
        <section className='col-span-4 bg-white w-full h-full rounded-tl-3xl p-8'>
          {children}
        </section>
      </div>
    </section>
  );
}
