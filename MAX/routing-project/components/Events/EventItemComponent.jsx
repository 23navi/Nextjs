export default function EventItem(props) {
  const { title, image, date, location, id } = props;
  return (
    <li key={id}>
      <div>
        <img src={`/${image}`} alt={title} />
        <h2>{title}</h2>
      </div>
    </li>
  );
}
