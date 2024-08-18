'use client';

import Image from 'next/image';
import { useState } from 'react';
import unchecked from '../../public/dashboard/checkbox-unchecked.svg';
import checked from '../../public/dashboard/checkbox-checked.svg';
import greenDot from '../../public/dashboard/green-dot.svg';
import grayDot from '../../public/dashboard/gray-dot.svg';
import groupImg from '../../public/dashboard/customers-group-image.svg';
import deleteIcon from '../../public/dashboard/delete-icon.svg';
import editIcon from '../../public/dashboard/edit-icon.svg';
import useDashboardStore from '../../store/dashboard-store';
import { Progress } from '@mantine/core';

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
      {/* name */}
      <div className='col-span-5 lg:col-span-3 px-6 h-[72px] flex items-center'>
        {isCheck ? (
          <Image src={checked} alt='checkbox icon' className='mr-2' />
        ) : (
          <Image src={unchecked} alt='checkbox icon' className='mr-2' />
        )}

        <Image src={company.logo} alt='checkbox icon' className='mr-2' />
        <div className='text-sm hidden md:block'>
          <p className='font-medium text-[#101828]'>{company.name}</p>
          <p className='text-[#475467]'>{company.link}</p>
        </div>
      </div>
      {/* progress bar */}

      <div className='hidden lg:col-span-2 px-6 py-3 lg:flex justify-center items-center'>
        <Progress value={company.progress} color='#7F56D9' w={100} />
      </div>
      {/* customer */}

      <div className='col-span-4 lg:col-span-2 xl:col-span-1 px-6 py-3 flex justify-center items-center rounded-md'>
        <div className='w-[81px] h-[22px] flex justify-center items-center border border-[#D0D5DD] rounded-md px-[6px]'>
          {}
          <Image
            src={company.customer ? greenDot : grayDot}
            alt='checkbox icon'
            className='mr-1'
          />
          <p className='font-medium text-[#344054]'>
            {company.customer ? 'Customer' : 'Churned'}
          </p>
        </div>
      </div>
      {/* group pic */}
      <div className='col-span-2 px-6 py-3 hidden xl:flex items-center justify-center'>
        <Image src={groupImg} alt='customer group image' className='' />
      </div>
      {/* about & info */}

      <div className='col-span-4 px-6 py-3 text-sm hidden lg:block'>
        <p className='text-[#101828]'>{company.about}</p>
        <p className='text-[#475467]'>{company.info}</p>
      </div>
      {/* delete icon */}
      <div className='col-span-4 lg:col-span-2 xl:col-span-1 px-6 py-3 flex items-center justify-center'>
        <Image
          src={deleteIcon}
          alt='customer group image'
          className='mr-3 w-[20px]'
        />
        <Image src={editIcon} alt='customer group image' className='' />
      </div>
    </div>
  );
}

// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import unchecked from '../../public/dashboard/checkbox-unchecked.svg';
// import checked from '../../public/dashboard/checkbox-checked.svg';
// import progressBar from '../../public/dashboard/progress-bar.svg';
// import greenDot from '../../public/dashboard/green-dot.svg';
// import groupImg from '../../public/dashboard/customers-group-image.svg';
// import deleteIcon from '../../public/dashboard/delete-icon.svg';
// import editIcon from '../../public/dashboard/edit-icon.svg';
// import useDashboardStore from '../../store/dashboard-store';

// interface Company {
//   id: number;
//   logo: string;
//   name: string;
//   link: string;
//   customer: boolean;
//   progress: number;
//   about: string;
//   info: string;
// }

// export default function CompanyRowEntry({ company }: { company: Company }) {
//   const [isCheck, setIsChecked] = useState(false);
//   const { toogleAddCompanies, listOfCompanies, setIsCompaniesSelected } =
//     useDashboardStore((state) => state);
//   return (
//     <div
//       className='grid grid-cols-13 text-xs border-b cursor-pointer'
//       key={company.name}
//       onClick={() => {
//         isCheck
//           ? listOfCompanies.length === 1 && setIsCompaniesSelected(false)
//           : setIsCompaniesSelected(true);
//         setIsChecked(!isCheck);
//         toogleAddCompanies(company);
//       }}
//     >
//       {/* name */}
//       <div className='col-span-5 lg:col-span-3 px-6 h-[72px] flex items-center'>
//         {isCheck ? (
//           <Image src={checked} alt='checkbox icon' className='mr-2' />
//         ) : (
//           <Image src={unchecked} alt='checkbox icon' className='mr-2' />
//         )}

//         <Image src={company.logo} alt='checkbox icon' className='mr-2' />
//         <div className='text-sm hidden md:block'>
//           <p className='font-medium text-[#101828]'>{company.name}</p>
//           <p className='text-[#475467]'>{company.link}</p>
//         </div>
//       </div>
//       {/* progress bar */}

//       <div className='hidden lg:col-span-2 px-6 py-3 lg:flex justify-center items-center'>
//         <Image src={progressBar} alt='checkbox icon' className='' />
//       </div>
//       {/* customer */}

//       <div className='col-span-4 lg:col-span-1 px-6 py-3 flex justify-center items-center rounded-md'>
//         <div className='w-[81px] h-[22px] flex justify-center items-center '>
//           <Image src={greenDot} alt='checkbox icon' className='mr-1' />
//           <p className='font-medium'>Customer</p>
//         </div>
//       </div>
//       {/* group pic */}
//       <div className='col-span-2 px-6 py-3 hidden xl:flex items-center justify-center'>
//         <Image src={groupImg} alt='customer group image' className='' />
//       </div>
//       {/* about & info */}

//       <div className='col-span-4 px-6 py-3 text-sm hidden lg:block'>
//         <p className='text-[#101828]'>{company.about}</p>
//         <p className='text-[#475467]'>{company.info}</p>
//       </div>
//       {/* delete icon */}
//       {/* <div className='col-span-4 lg:col-span-2 px-6 py-3 flex items-center justify-center'>
//         <Image
//           src={deleteIcon}
//           alt='customer group image'
//           className='mr-3 w-[20px]'
//         />
//         <Image src={editIcon} alt='customer group image' className='' />
//       </div> */}
//     </div>
//   );
// }
