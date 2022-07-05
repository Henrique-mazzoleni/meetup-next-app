import { useRouter } from "next/router";

import { DUMMY_LIST } from "..";

export default function MeetupDetail() {
  const router = useRouter();
  const id = router.query.meetupId;
  console.log(id);
  const meetup = DUMMY_LIST.find((item) => item.id === id);

  if (!meetup) return <h1>Meetup not found!</h1>

  return (
    <div className="item">
      <img src={meetup.image} />
      <span>{meetup.title}</span>
      <p className="description">{meetup.description}</p>
      <p>{meetup.address}</p>
    </div>
  );
}
