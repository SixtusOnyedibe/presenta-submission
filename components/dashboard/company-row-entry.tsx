'use client';

import Image from 'next/image';
import { useState } from 'react';
import unchecked from '../../public/dashboard/checkbox-unchecked.svg';
import checked from '../../public/dashboard/checkbox-checked.svg';
import progressBar from '../../public/dashboard/progress-bar.svg';
import greenDot from '../../public/dashboard/green-dot.svg';
import groupImg from '../../public/dashboard/customers-group-image.svg';
import deleteIcon from '../../public/dashboard/delete-icon.svg';
import editIcon from '../../public/dashboard/edit-icon.svg';
import useDashboardStore from '../../store/dashboard-store';

interface Company {
  id: number;
  logo: string;
  name: string;
  link: string;
  customer: boolean;
  progress: number;
  about: string;
  info: string;
}

export default function CompanyRowEntry({ company }: { company: Company }) {
  const [isCheck, setIsChecked] = useState(false);
  const { toogleAddCompanies, listOfCompanies, setIsCompaniesSelected } =
    useDashboardStore((state) => state);
  return (
    <div
      className='grid grid-cols-13 text-xs border-b cursor-pointer'
      key={company.name}
      onClick={() => {
        isCheck
          ? listOfCompanies.length === 1 && setIsCompaniesSelected(false)
          : setIsCompaniesSelected(true);
        setIsChecked(!isCheck);
        toogleAddCompanies(company);
      }}
    >
      <div className='col-span-3 px-6 h-[72px] flex items-center'>
        {isCheck ? (
          <Image src={checked} alt='checkbox icon' className='mr-2' />
        ) : (
          <Image src={unchecked} alt='checkbox icon' className='mr-2' />
        )}

        <Image src={company.logo} alt='checkbox icon' className='mr-2' />
        <div className='text-sm'>
          <p className='font-medium text-[#101828]'>{company.name}</p>
          <p className='text-[#475467]'>{company.link}</p>
        </div>
      </div>
      <div className='col-span-2 px-6 py-3 flex justify-center items-center'>
        <Image src={progressBar} alt='checkbox icon' className='' />
      </div>
      <div className='col-span-1 px-6 py-3 flex justify-center items-center rounded-md'>
        <div className='w-[81px] h-[22px] flex justify-center items-center '>
          <Image src={greenDot} alt='checkbox icon' className='mr-1' />
          <p className='font-medium'>Customer</p>
        </div>
      </div>
      <div className='col-span-2 px-6 py-3 hidden lg:flex items-center justify-center'>
        <Image src={groupImg} alt='customer group image' className='' />
      </div>
      <div className='col-span-4 px-6 py-3 text-sm'>
        <p className='text-[#101828]'>{company.about}</p>
        <p className='text-[#475467]'>{company.info}</p>
      </div>
      <div className='col-span-1 px-6 py-3 flex items-center justify-center'>
        <Image src={deleteIcon} alt='customer group image' className='mr-3' />
        <Image src={editIcon} alt='customer group image' className='' />
      </div>
    </div>
  );
}
