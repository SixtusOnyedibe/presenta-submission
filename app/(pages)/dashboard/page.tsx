'use client';

import Image from 'next/image';
import addIcon from '../../../public/dashboard/plus-icon.svg';
import importIcon from '../../../public/dashboard/import-icon.svg';
import burgerMenu from '../../../public/dashboard/burgermenu-icon.svg';
import greenUpChart from '../../../public/dashboard/up-chart-mini.svg';
import greenArrowUp from '../../../public/dashboard/arrow-up-icon.svg';
import redDownChart from '../../../public/dashboard/down-chart-icon.svg';
import redArrowUp from '../../../public/dashboard/red-arrow-up-icon.svg';
import searchIcon from '../../../public/nav/search-lg.svg';
import filterIcon from '../../../public/dashboard/filter-icon.svg';
import purpleXicon from '../../../public/dashboard/purple-x-close-icon.svg';
import checkboxMinus from '../../../public/dashboard/checkbox-base.svg';
import companiesList from './companiesList';
import SelectedCompanies from '../../../components/dashboard/selected-companies';
import AdminApproval from '../../../components/dashboard/admin-approval';
import CompanyRowEntry from '../../../components/dashboard/company-row-entry';
import DashboardStore from '../../../store/dashboard-store';

export default function page() {
  const { isCompaniesSelected, approveCompanies } = DashboardStore(
    (state) => state
  );

  return (
    <div className='w-full relative'>
      {/* Welcome olivia */}
      <div className='flex w-full justify-between items-start mb-5'>
        <div>
          <h1 className='text-3xl font-semibold text-[#101828]'>
            Welcome back, Olivia
          </h1>
          <p className='text-[#475467]'>
            Track, manage and forcast your customers and orders.
          </p>
        </div>
        <div className='hidden md:flex items-center'>
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
      <div className='hidden md:grid grid-cols-3 gap-6 w-full '>
        {/* 1st */}
        <div className='border border-[#EAECF0] p-2 md:p-3 lg:p-5 w-full col-span-1 rounded-xl'>
          <div className='hidden md:flex justify-between items-center mb-6'>
            <p className='lg:mb-6 font-semibold text-sm lg:text-base'>
              Total customers
            </p>
            <Image
              src={burgerMenu}
              alt='plus icon'
              className='cursor-pointer'
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-13 lg:gap-2'>
            <div className='col-span-7'>
              <p className='font-semibold text-2xl lg:text-4xl mb-4 text-[#101828]'>
                2,420
              </p>
              <div className='xl:flex'>
                <div className='flex'>
                  <Image src={greenArrowUp} alt='plus icon' className='' />
                  <p className='mr-1 text-[#067647] text-sm'>40%</p>
                </div>
                <div className='block text-sm'>
                  <p className='md:block'>vs last month</p>
                </div>
              </div>
            </div>
            <div className='col-span-6 w-full h-full flex items-center justify-center'>
              <Image
                src={greenUpChart}
                alt='plus icon'
                className='w-full h-full'
              />
            </div>
          </div>
        </div>
        <div className='border border-[#EAECF0] p-2 md:p-3 lg:p-5 w-full col-span-1 rounded-xl'>
          <div className='hidden md:flex justify-between items-center mb-6'>
            <p className='lg:mb-6 font-semibold text-sm lg:text-base'>
              Members
            </p>
            <Image
              src={burgerMenu}
              alt='plus icon'
              className='cursor-pointer'
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-13 lg:gap-2'>
            <div className='col-span-7'>
              <p className='font-semibold text-2xl lg:text-4xl mb-4 text-[#101828]'>
                1,210
              </p>
              <div className='xl:flex'>
                <div className='flex'>
                  <Image src={redArrowUp} alt='plus icon' className='' />
                  <p className='mr-1 text-[#B42318] text-sm'>10%</p>
                </div>
                <div className='block text-sm'>
                  <p className='md:block'>vs last month</p>
                </div>
              </div>
            </div>
            <div className='col-span-6 w-full h-full flex items-center justify-center'>
              <Image
                src={redDownChart}
                alt='plus icon'
                className='w-full h-full'
              />
            </div>
          </div>
        </div>
        <div className='border border-[#EAECF0] p-2 md:p-3 lg:p-5 w-full col-span-1 rounded-xl'>
          <div className='hidden md:flex justify-between items-center mb-6'>
            <p className='lg:mb-6 font-semibold text-sm lg:text-base'>
              Active now
            </p>
            <Image
              src={burgerMenu}
              alt='plus icon'
              className='cursor-pointer'
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-13 lg:gap-2'>
            <div className='col-span-7'>
              <p className='font-semibold text-2xl lg:text-4xl mb-4 text-[#101828]'>
                316
              </p>
              <div className='xl:flex'>
                <div className='flex'>
                  <Image src={greenArrowUp} alt='plus icon' className='' />
                  <p className='mr-1 text-[#067647] text-sm'>20%</p>
                </div>
                <div className='block text-sm'>
                  <p className='md:block'>vs last month</p>
                </div>
              </div>
            </div>
            <div className='col-span-6 w-full h-full flex items-center justify-center'>
              <Image
                src={greenUpChart}
                alt='plus icon'
                className='w-full h-full'
              />
            </div>
          </div>
        </div>
      </div>
      {/* Filter */}
      <div className='mt-8 mb-6 md:flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='h-[40px] border border-[#D0D5DD] px-4 flex items-center mr-3 rounded-lg'>
            <p className='text-sm text-[#344054] mr-3'>All time</p>
            <Image src={purpleXicon} alt='logo' className='' />
          </div>
          <div className='h-[40px] border border-[#D0D5DD] px-4 hidden lg:flex items-center mr-3 rounded-lg'>
            <p className='text-sm text-[#344054] mr-3'>US, AU, +4</p>
            <Image src={purpleXicon} alt='logo' className='' />
          </div>
          <div className='h-[40px] border border-[#D0D5DD] px-4 flex items-center mr-3 rounded-lg'>
            <Image src={filterIcon} alt='logo' className='mr-3' />
            <p className='text-sm text-[#344054]'>More filter</p>
          </div>
        </div>
        <div className='bg-[#F9F9F9] w-full md:max-w-[320px] h-[40px] rounded-lg flex items-center overflow-hidden pl-3 mt-3 md:mt-0'>
          <Image src={searchIcon} alt='logo' className='mr-3' />
          <input
            type='text'
            className='w-full h-full bg-inherit border-none outline-none text-[#1E1E1E]'
            placeholder='Search'
          />
        </div>
      </div>

      {/* Table */}
      <div className='grid grid-cols-13 text-xs border-b'>
        <div className='col-span-5 lg:col-span-3 px-6 flex items-center justify-start'>
          <Image src={checkboxMinus} alt='checkbox icon' className='mr-2' />
          <p>Company</p>
        </div>
        <div className='hidden lg:col-span-2 px-6 py-3 lg:flex justify-start items-center'>
          <p>License use</p>
        </div>
        <div className='col-span-4 lg:col-span-2 xl:col-span-1 px-6 py-3 flex justify-center xl:justify-start items-center rounded-md'>
          <p>Status</p>
        </div>
        <div className='col-span-2 px-6 py-3 hidden xl:flex items-center justify-start'>
          <p>Users</p>
        </div>
        <div className='col-span-4 px-6 py-3 text-sm hidden lg:flex items-center justify-start'>
          <p>About</p>
        </div>
        <div className='col-span-4 lg:col-span-2 xl:col-span-1 px-6 py-3 flex items-center justify-start'>
          <p></p>
        </div>
      </div>

      {/* Table list */}
      {companiesList.map((company) => (
        <CompanyRowEntry key={company.name} company={company} />
      ))}

      {/*  */}
      <div className='w-full flex items-center justify-between mt-6'>
        <div className='text-sm text-[#344054] flex items-center font-semibold '>
          <div className='border border-[#D0D5DD] h-[36px] px-[14px] mr-3 rounded-lg flex items-center justify-center'>
            Previous
          </div>
          <div className='border border-[#D0D5DD] h-[36px] px-[14px] rounded-lg flex items-center justify-center'>
            Next
          </div>
        </div>
        <div>
          <p className='text-sm font-medium'>Page 1 of 10</p>
        </div>
      </div>

      {/* selected components */}
      {isCompaniesSelected && <SelectedCompanies />}
      {/* Admin approval */}
      {approveCompanies && <AdminApproval />}
    </div>
  );
}
