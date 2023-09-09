import EventItem from "./EventItemComponent";
export default function ListEvents(props) {
  const renderEventLists = props.eventLists.map((event) => {
    return (
      <EventItem
        key={event.id}
        id={event.id}
        title={event.title}
        image={event.image}
        date={event.date}
        location={event.location}
      />
    );
  });
  return <ul>{...renderEventLists}</ul>;
}
