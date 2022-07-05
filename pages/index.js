import MeetupList from "../components/Meetups/MeetupList";

export const DUMMY_LIST = [
  {
    id: "m1",
    title: "Berlin Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg",
    address: "Pariser Platz, 10117 Berlin",
    description: "This is our first meetup in Berlin.",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_LIST} />;
}
