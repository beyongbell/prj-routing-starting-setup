import EvemtItem from "./event-item";
import classes from './event-list.module.css';

function EventList(props) {
    const { item } = props;
    return <ul className={classes.list}>
        {item.map((event) => (
        <EvemtItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
        />
        ))}
    </ul>
}

export default EventList;