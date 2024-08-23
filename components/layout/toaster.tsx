'use client';

import Image from 'next/image';
import cls from '../../public/dashboard/close-icon-black.svg';
import { useEffect } from 'react';

interface Errormessage {
  errorMessage: boolean;
  setErrorMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TToaster = ({ errorMessage, setErrorMessage }: Errormessage) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {errorMessage && (
        <div className='fixed top-10 right-[50%] translate-x-[50%] md:translate-x-0 md:right-10 h-[56px] w-[343px] rounded-xl bg-[#FFEFED] z-50 flex items-center px-4 text-sm'>
          <p className='mx-auto text-black'>
            Login failed please check your credentials
          </p>
          <div
            className='cursor-pointer'
            onClick={() => setErrorMessage(false)}
          >
            <Image src={cls} alt='close icon' />
          </div>
        </div>
      )}
    </>
  );
};
