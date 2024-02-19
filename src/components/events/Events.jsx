import SectionHeader from '../SectionHeader';
import EventBox from './EventBox';

const getEvents = async () => {
  const headers = { cookie: '<incoming request header cookies>' };
  const res = await fetch('<incoming request origin>/api/events', { headers });

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
