import Link from 'next/link';
import classes from '../../styles/components/Meetups/MeetupItem.module.css';

export default function MeetupItem(props) {
    return <li className={classes.item}>
        <img src={props.image} />
        <span>{props.title}</span>
        <p>{props.address}</p>
        <Link href={props.id}>Show Details</Link>
    </li>
}