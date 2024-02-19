'use client';

import SectionHeader from '../SectionHeader';
import EventBox from './EventBox';

const getEvents = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/events`);
  return res.json();
};

const Events = async () => {
  const events = await getEvents();

  return (
    <section
      className='section'
      id='tours'
    >
      <div className='container mx-auto'>
        <SectionHeader
          pretitle={'World Tour'}
          title={'Upcoming Events'}
        />
        {/* Event box */}
        <EventBox events={events} />
      </div>
    </section>
  );
};

export default Events;
