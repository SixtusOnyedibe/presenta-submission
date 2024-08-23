'use client';

import Nav from '../../components/layout/nav';
import MobileNav from '../../components/layout/nav-mobile';
import { useRouter } from 'next/navigation';
import hasTimestampElapsed from '../../lib/timestampExpired';
import { useEffect, useState } from 'react';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isUserAvailable, setIsUserAvailable] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const horizonUser = localStorage.getItem('horizon_user');
    const horizonUserSession = sessionStorage.getItem('horizon_user');
    if (!horizonUser && !horizonUserSession) {
      router.push('/login');
    }
    if (horizonUser) {
      //checks if user session is expired
      const userData = JSON.parse(horizonUser);
      const timeExpired = hasTimestampElapsed(userData.expiresIn);
      if (timeExpired) {
        localStorage.removeItem('horizon_user');
        router.push('/login');
      }
    }
    setIsUserAvailable(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section>
      {isUserAvailable ? (
        <div className='bg-[#F1F1F1] min-h-[100vh] w-full md:grid md:grid-cols-5 '>
          <section className='hidden md:block col-span-1 pt-8'>
            <Nav />
          </section>
          <MobileNav />
          <section className='md:col-span-4 bg-white w-full h-full rounded-tl-3xl p-5 pt-[11vh] md:p-8'>
            {children}
          </section>
        </div>
      ) : (
        <div className='w-full h-[100vh] flex justify-center items-center bg-white'>
          <div className='flex justify-center items-center'>
            <div className='w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin'></div>
          </div>
        </div>
      )}
    </section>
  );
}
