import { useState, useEffect } from 'react';
import { getEvents } from './service';

const PAGE_SIZE = 2;

export default function Home() {
  const [page, setPage] = useState({
    offset: 0,
    limit: PAGE_SIZE + 1,
  });
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isFetchMore, setIsFetchMore] = useState(true);

  const getEventPage = async () => {
    setLoading(true);
    const eventPage = await getEvents(page);
    if (eventPage.length < PAGE_SIZE + 1) {
      setIsFetchMore(false);
    }
    const newEvents = events.concat(eventPage.slice(0, PAGE_SIZE));
    setEvents(newEvents);
    setPage({
      ...page,
      offset: newEvents.length,
    });
    setLoading(false);
  };

  useEffect(() => {
    getEventPage();
  }, []);

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>{`${event.id} ${event.name}`}</div>
      ))}
      {isFetchMore ? (
        <input
          type="button"
          value="Fetch More"
          onClick={getEventPage}
          disabled={isLoading}
        />
      ) : (
        <div>Nothing to fetch</div>
      )}
    </div>
  );
}
