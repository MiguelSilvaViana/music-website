import Hero from '@/components/Hero';
import Player from '@/components/Player';
import Albums from '@/components/albums/Albums';
import Events from '@/components/events/Events';
import Image from 'next/image';

/* json-server --watch --port 4000 ./_data/db.json */

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <div className='h-[4000px]'></div>
    </main>
  );
}
