'use client';

import Image from 'next/image';
import approveIconWhite from '../../public/dashboard/approve-icon-white.svg';
import redCloseIcon from '../../public/dashboard/close-icon-red.svg';
import useDashboardStore from '../../store/dashboard-store';

export default function SelectedCompanies() {
  const { listOfCompanies, setApproveCompanies, removeAllCompanies } =
    useDashboardStore((state) => state);

  return (
    <div className=' w-full grid grid-cols-5 fixed bottom-0 left-0'>
      <div className='col-span-1'></div>
      <div className='bg-white pl-1 w-full col-span-4 h-[68px]'>
        <div className='w-full p-[10px] h-full bg-[#F1F1F1] rounded-lg'>
          <div className='bg-white w-full h-full rounded-lg flex justify-between items-center px-5'>
            <div className='flex items-center'>
              <div className='w-[24px] h-[24px] flex items-center justify-center bg-[#F6F6F6] border border-[#DFDFDF] rounded-full mr-3'>
                <p>{listOfCompanies.length}</p>
              </div>
              <p className='text-[#333333] font-medium'> Companies selected</p>
            </div>
            <div className='flex items-center'>
              <button className='px-4 h-[40px] bg-[#F6F6F6] border border-[#CBCBCB] rounded-lg text-[#AE372A] flex items-center'>
                <Image
                  src={redCloseIcon}
                  alt='red close icon'
                  className='mr-2'
                  // onClick={() => removeAllCompanies()}
                />
                <p>Decline all</p>
              </button>
              <button
                className='ml-3 px-4 h-[40px] bg-[#0A29CF] rounded-lg text-white flex items-center'
                onClick={() => setApproveCompanies(true)}
              >
                <Image
                  src={approveIconWhite}
                  alt='approve icon'
                  className='mr-2'
                />
                <p>Approve all</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
