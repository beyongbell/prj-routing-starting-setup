import Link from 'next/link';
import classes from  './event-item.module.css'
import Button from '../ui/button'
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

function EventItem(props) {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const fotmatAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
    <li className={classes.item}>
        <img src={'/' + image} alt={title}></img>
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon></DateIcon>
                    <time>{humanReadableDate}</time>    
                </div>
                <div className={classes.address}>
                    <AddressIcon></AddressIcon>
                    <address>{fotmatAddress}</address>
                </div>
            </div>
        </div>
        <div className={classes.actions}>
            <Button link={exploreLink}>
                <span>Explore Event</span>
                <span className={classes.icon}>
                    <ArrowRightIcon></ArrowRightIcon>
                </span>
            </Button>
        </div>
    </li>)
}

export default EventItem;