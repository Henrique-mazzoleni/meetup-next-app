import MeetupItem from "./MeetupItem";

import classes from './MeetupList.module.css';

export default function MeetupList(props) {
  return (
    <ul className={classes.meetups}>
      {props.meetups.map((item) => (
        <MeetupItem
          id={item.id}
          key={item.id}
          image={item.image}
          title={item.title}
          address={item.address}
        />
      ))}
    </ul>
  );
}
