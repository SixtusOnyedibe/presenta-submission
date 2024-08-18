import type { Metadata } from 'next';
import Nav from '../../components/layout/nav';
import MobileNav from '../../components/layout/nav-mobile';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className='bg-[#F1F1F1] min-h-[100vh] w-full md:grid md:grid-cols-5 '>
        <section className='hidden md:block col-span-1 pt-8'>
          <Nav />
        </section>
        <MobileNav />
        <section className='md:col-span-4 bg-white w-full h-full rounded-tl-3xl p-5 pt-[11vh] md:p-8'>
          {children}
        </section>
      </div>
    </section>
  );
}
