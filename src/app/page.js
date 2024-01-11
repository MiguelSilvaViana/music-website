import Hero from '@/components/Hero';
import Player from '@/components/Player';
import Albums from '@/components/albums/Albums';
import Blog from '@/components/blog/Blog';
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
      <Blog />
      <div className='h-[4000px]'></div>
    </main>
  );
}
