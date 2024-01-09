import Hero from '@/components/Hero';
import Player from '@/components/Player';
import Events from '@/components/events/Events';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <div className='h-[4000px]'></div>
    </main>
  );
}
