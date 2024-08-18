'use client';

import lockIcon from '../../public/dashboard/lock-icon.svg';
import blackCloseIcon from '../../public/dashboard/close-icon-black.svg';
import Image from 'next/image';
import DashboardStore from '../../store/dashboard-store';

export default function AdminApproval() {
  const { setApproveCompanies } = DashboardStore((state) => state);
  return (
    <div>
      <div
        className='w-[100vw] h-[100vh] fixed top-0 left-0 bg-black opacity-10'
        onClick={() => setApproveCompanies(false)}
      ></div>
      <div className='w-full sm:w-[400px] h-[311px] fixed bottom-0 sm:bottom-[78px] right-0 bg-white px-5 md:px-[17px] pt-[20px] rounded-2xl'>
        <div className='flex items-center justify-between h-[56px] border-b border-b-[#DFDFDF]'>
          <div className='flex items-center'>
            <Image src={lockIcon} alt='lock icon' className='mr-3' />
            <p className='font-medium text-[#1D1E1F] text-[20px]'>Password</p>
          </div>
          <Image
            src={blackCloseIcon}
            alt='close icon'
            className='cursor-pointer'
            onClick={() => setApproveCompanies(false)}
          />
        </div>
        <p className='py-4 text-xs'>
          Please enter your password to approve the companies
        </p>
        <form>
          <label htmlFor='password'>
            <p className='text-sm font-medium mb-2'>Password</p>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full h-[44px] border border-gray-[#E0E5F2] px-5 font-medium text-gray-400 rounded-2xl mb-5 text-sm'
              placeholder='Enter password'
            />
          </label>
          <button className='w-full h-[44px] bg-black text-white text-xs rounded-lg'>
            Confirm approval
          </button>
        </form>
      </div>
    </div>
  );
}
