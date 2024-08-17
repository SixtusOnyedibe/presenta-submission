import Image from 'next/image';
import logoMark from '../../public/nav/Logomark.svg';
import searchIcon from '../../public/nav/search-lg.svg';
import homeIcon from '../../public/nav/home-barchart-icon.svg';
import dashboardIcon from '../../public/nav/dashboard-icon.svg';
import projectIcon from '../../public/nav/project-icon.svg';
import tasksIcon from '../../public/nav/tasks-icon.svg';
import reportingIcon from '../../public/nav/reporting-icon.svg';
import usersIcon from '../../public/nav/users-icon.svg';
import progressCircle from '../../public/nav/progress-circle.svg';
import closeIcon from '../../public/nav/x-close-icon.svg';

export default function Nav() {
  return (
    <div className='w-full px-3 lg:px-6 relative h-full'>
      <div className='mb-3'>
        <Image src={logoMark} alt='logo' className='' />
      </div>
      <div className='bg-[#F9F9F9] w-full h-[44px] rounded-lg flex items-center overflow-hidden pl-3 mb-8'>
        <Image src={searchIcon} alt='logo' className='mr-3' />
        <input
          type='text'
          className='w-full h-full bg-inherit border-none outline-none text-[#1E1E1E]'
          placeholder='Search'
        />
      </div>
      <ul>
        <li className='flex items-center w-full mb-5'>
          <Image src={homeIcon} alt='logo' className='mr-3 ' />
          <p>Home</p>
        </li>
        <li className='flex items-center w-full mb-5'>
          <Image src={dashboardIcon} alt='logo' className='mr-3' />
          <p className='font-semibold text-[#0A29CF]'>Dashboard</p>
        </li>
        <li className='flex items-center w-full mb-5'>
          <Image src={projectIcon} alt='logo' className='mr-3' />
          <p>Projects</p>
        </li>
        <li className='flex items-center w-full mb-5'>
          <Image src={tasksIcon} alt='logo' className='mr-3' />
          <p>Tasks</p>
        </li>
        <li className='flex items-center w-full mb-5'>
          <Image src={reportingIcon} alt='logo' className='mr-3' />
          <p>Reporting</p>
        </li>
        <li className='flex items-center w-full mb-5'>
          <Image src={usersIcon} alt='logo' className='mr-3' />
          <p>Users</p>
        </li>
      </ul>

      {/*  */}
      <div className='lg:px-5 absolute bottom-10 left-0'>
        <div className='w-full bg-[#151416] px-2 py-4 lg:p-4 rounded-lg '>
          <div className='w-full flex justify-between mb-4 items-start'>
            <Image src={progressCircle} alt='logo' className='mr-3' />
            <Image src={closeIcon} alt='logo' className='' />
          </div>
          <div className='text-xs lg:text-sm'>
            <h3 className='text-white font-semibold'>Used space</h3>
            <p className='text-[#BEBEBE] mb-4'>
              Your team has used 80% of your available space. Need more?
            </p>
            <div className='flex items-center'>
              <p className='font-semibold text-[#D0D5DD] mr-3'>Dismiss</p>
              <p className='font-semibold text-[#4318FF]'>Upgrade plan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
