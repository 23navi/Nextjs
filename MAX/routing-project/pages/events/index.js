import ListEvents from "../../components/Events/ListEventsComponent";
import { getAllEvents } from "../../dummy-data";
function EventsHome({ Component, pageProps }) {
  return <ListEvents eventLists={getAllEvents()} />;
}

export default EventsHome;
