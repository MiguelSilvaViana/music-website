import Hero from '@/components/Hero';
import Events from '@/components/events/Events';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />
      <Events />
      <div className='h-[4000px]'></div>
    </main>
  );
}
