import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import classes from "../../styles/MeetupDetail.module.css";

export default function MeetupDetail() {
  const router = useRouter();
  const id = router.query.meetupId;

  const [meetup, setMeetup] = useState();

  useEffect(() => {
    const fetchMeetup = async () => {
      const res = await fetch("/api/meetup-detail", {
        method: "POST",
        body: JSON.stringify({
          id,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      setMeetup(data.body);
    };
    fetchMeetup();
  }, [id]);

  if (!meetup) return <h1>Meetup not found!</h1>;

  return (
    <div className={classes.item}>
      <img src={meetup.image} />
      <span>{meetup.title}</span>
      <p className="description">{meetup.description}</p>
      <p>{meetup.address}</p>
    </div>
  );
}
