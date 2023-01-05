import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList item={featuredEvents}></EventList>
    </div>
  );
}

export default HomePage;