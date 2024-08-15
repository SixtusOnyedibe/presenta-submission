import Image from 'next/image';
import googleImg from '../../../public/Google__G__Logo 1.svg';
import backgroundImage from '../../../public/homepage-background-image.png';
import horizontLogo from '../../../public/horizon-logo.png';
import themeChange from '../../../public/theme-image.svg';

export default function page() {
  return (
    <div className='bg-white flex flex-col-reverse lg:grid md:grid-cols-5 max-h-[1024px]'>
      <section className=' col-span-2 mt-5 lg:mt-20 relative pb-20'>
        <div className='p-5 max-w-[410px] mx-auto '>
          <div>
            <div className='mb-5'>
              <h1 className='text-4xl font-bold'>Sign In</h1>
              <p className='text-[#A3AED0] text-base'>
                Enter your email and password to sign in
              </p>
            </div>
            <button className='w-full h-[50px] bg-[#F4F7FE] rounded-2xl mb-5 text-sm font-medium flex items-center justify-center'>
              <Image
                src={googleImg}
                alt='google logo'
                height={20}
                width={20}
                className='mr-3'
                priority
              />
              <p>Sign in with Google</p>
            </button>
            <div className='flex items-center mb-5'>
              <hr className='border-[#E0E5F2] basis-5/12' />
              <p className='text-sm basis-2/12 flex justify-center text-[#A3AED0]'>
                or
              </p>
              <hr className='border-[#E0E5F2] basis-5/12' />
            </div>
            <form>
              <label htmlFor='email'>
                <p className='text-sm font-medium mb-2'>Email*</p>
                <input
                  type='text'
                  id='email'
                  name='email'
                  className='w-full h-[50px] border border-gray-[#E0E5F2] px-5 font-medium text-gray-400 rounded-2xl mb-5 text-sm'
                  placeholder='mail@simmple.com'
                />
              </label>
              <label htmlFor='password'>
                <p className='text-sm font-medium mb-2'>Password*</p>
                <input
                  type='text'
                  id='password'
                  name='password'
                  className='w-full h-[50px] border border-gray-[#E0E5F2] px-5 font-medium text-gray-400 rounded-2xl text-sm'
                  placeholder='Min 8 characters'
                />
              </label>
              <div className='my-5 flex justify-between items-center'>
                <div className='flex items-center'>
                  <input type='checkbox' className='accent-[#4318FF] mr-2' />
                  <p className='text-[#2B3674] text-sm'>Keep me logged in</p>
                </div>
                <p className='text-sm text-[#4318FF] font-medium'>
                  Forgot password?
                </p>
              </div>
              <button className='w-full h-[50px] bg-black rounded-2xl text-white text-sm font-bold'>
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className='absolute pb-[40px] bottom-0 left-0 px-5'>
          <p className='text-sm '>
            © 2022 Horizon. All Rights Reserved. Made with love by Simmmple!
          </p>
        </div>
      </section>
      <section className='col-span-3 rounded-b-[50px] lg:rounded-bl-[100px] overflow-hidden relative h-[500px] lg:h-full'>
        <Image
          src={backgroundImage}
          alt='google logo'
          className='mr-3 w-full h-full object-right'
          priority
        />
        <Image
          src={horizontLogo}
          alt='google logo'
          className='absolute top-0 right-[50%] w-[100px] lg:w-[270px] translate-x-[50%] pt-[100px] pointer-events-none'
          priority
        />
        <div className='hidden lg:flex justify-between items-end text-white font-medium absolute bottom-0 pb-[40px] left-0 w-full text-sm pl-[100px] pr-[50px]'>
          <ul className='flex'>
            <li className='mr-3'>
              <p>Marketplace</p>
            </li>
            <li className='mr-3'>
              <p>License</p>
            </li>
            <li className='mr-3'>
              <p>Terms of Use</p>
            </li>
            <li className='mr-3'>
              <p>Blog</p>
            </li>
          </ul>
          <Image src={themeChange} alt='google logo' className='' priority />
        </div>
      </section>
    </div>
  );
}
