'use client';

import Image from 'next/image';
import logoMark from '../../public/nav/Logomark.svg';
import homeIcon from '../../public/nav/home-barchart-icon.svg';
import dashboardIcon from '../../public/nav/dashboard-icon.svg';
import projectIcon from '../../public/nav/project-icon.svg';
import tasksIcon from '../../public/nav/tasks-icon.svg';
import reportingIcon from '../../public/nav/reporting-icon.svg';
import usersIcon from '../../public/nav/users-icon.svg';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { useState } from 'react';

export default function MobileNav() {
  const [opened, { toggle }] = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen ? (
        <section className='fixed top-0 left-0 z-50 md:hidden bg-[#F1F1F1] w-full h-[100vh] px-5'>
          <nav className='flex md:hidden bg-[#F1F1F1] h-[10vh] w-full items-center justify-between'>
            <div>
              <div className='mb-3 flex items-center'>
                <Image
                  src={logoMark}
                  alt='logo'
                  className='mr-3 cursor-pointer'
                />
                <p className='text-[#6941C6] font-semibold'>Horizon</p>
              </div>
            </div>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Burger
                opened={opened}
                onClick={toggle}
                aria-label='Toggle navigation'
              />
            </div>
          </nav>
          <ul className='text-[#414141] mt-5'>
            <li className='flex items-center w-full mb-5 cursor-pointer'>
              <Image src={homeIcon} alt='logo' className='mr-3 ' />
              <p>Home</p>
            </li>
            <li className='flex items-center w-full mb-5 cursor-pointer'>
              <Image src={dashboardIcon} alt='logo' className='mr-3' />
              <p className='font-semibold text-[#0A29CF]'>Dashboard</p>
            </li>
            <li className='flex items-center w-full mb-5 cursor-pointer'>
              <Image src={projectIcon} alt='logo' className='mr-3' />
              <p>Projects</p>
            </li>
            <li className='flex items-center w-full mb-5 cursor-pointer'>
              <Image src={tasksIcon} alt='logo' className='mr-3' />
              <p>Tasks</p>
            </li>
            <li className='flex items-center w-full mb-5 cursor-pointer'>
              <Image src={reportingIcon} alt='logo' className='mr-3' />
              <p>Reporting</p>
            </li>
            <li className='flex items-center w-full mb-5 cursor-pointer'>
              <Image src={usersIcon} alt='logo' className='mr-3' />
              <p>Users</p>
            </li>
          </ul>
        </section>
      ) : (
        <nav className='flex md:hidden bg-[#F1F1F1] h-[10vh] w-full px-5 items-center justify-between fixed top-0 left-0 z-50'>
          <div>
            <div className='mb-3 flex items-center'>
              <Image src={logoMark} alt='logo' className='mr-3' />
              <p className='text-[#6941C6] font-semibold'>Horizon</p>
            </div>
          </div>
          <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label='Toggle navigation'
            />
          </div>
        </nav>
      )}
    </>
  );
}
