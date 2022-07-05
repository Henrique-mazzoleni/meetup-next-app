import { useRouter } from "next/router";

import classes from '../../styles/MeetupDetail.module.css';

import { DUMMY_LIST } from "..";

export default function MeetupDetail() {
  const router = useRouter();
  const id = router.query.meetupId;
  const meetup = DUMMY_LIST.find((item) => item.id === id);

  if (!meetup) return <h1>Meetup not found!</h1>

  return (
    <div className={classes.item}>
      <img src={meetup.image} />
      <span>{meetup.title}</span>
      <p className="description">{meetup.description}</p>
      <p>{meetup.address}</p>
    </div>
  );
}
