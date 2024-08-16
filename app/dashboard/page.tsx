import LeftNav from '../../components/dashboard/left-nav';

export default function page() {
  return (
    <div className='bg-[#F1F1F1] min-h-[100vh] w-full grid grid-cols-5 '>
      <section className='col-span-1 pt-8'>
        <LeftNav />
      </section>
      <section className='col-span-4 bg-white w-full h-full rounded-tl-3xl pt-8'>
        <h1>Dashboard</h1>
      </section>
    </div>
  );
}
