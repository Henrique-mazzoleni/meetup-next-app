import MeetupItem from "./MeetupItem";

import classes from '../../styles/components/Meetups/MeetupList.module.css';

export default function MeetupList(props) {
  if (!props.meetups) return <p>No Meetups yet!</p>

  return (
    <ul className={classes.meetups}>
      {props.meetups.map((item) => (
        <MeetupItem
          id={item._id}
          key={item._id}
          image={item.image}
          title={item.title}
          address={item.address}
        />
      ))}
    </ul>
  );
}
