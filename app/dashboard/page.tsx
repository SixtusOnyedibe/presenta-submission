import addIcon from '../../public/dashboard/plus-icon.svg';
import importIcon from '../../public/dashboard/import-icon.svg';
import Image from 'next/image';

export default function page() {
  return (
    <div className='w-full'>
      {/* Welcome olivia */}
      <div className='flex w-full justify-between items-start'>
        <div>
          <h1 className='text-3xl font-semibold text-[#101828]'>
            Welcome back, Olivia
          </h1>
          <p className='text-[#475467]'>
            Track, manage and forcast your customers and orders.
          </p>
        </div>
        <div className='flex items-center'>
          <button className='mr-3 bg-white text-sm text-[#344054] border border-[#D0D5DD] px-4 h-[40px] rounded-lg font-semibold flex items-center'>
            <Image src={importIcon} alt='import icon' className='mr-3' />
            <p>Import</p>
          </button>
          <button className='bg-black text-white px-4 h-[40px] rounded-lg text-sm font-semibold flex items-center'>
            <Image src={addIcon} alt='plus icon' className='mr-3' />
            <p>Add</p>
          </button>
        </div>
      </div>
      {/* Metric */}
    </div>
  );
}
