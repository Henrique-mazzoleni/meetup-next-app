import { useEffect, useState } from "react";
import MeetupList from "../components/Meetups/MeetupList";

export default function HomePage() {
  const [meetupList, setMeetupList] = useState(null)

  useEffect(() => {
    const fetchMeetups = async () => {
      const response =  await fetch('/api/meetups')
      const data = await response.json()
      setMeetupList(data.body)
    }
    fetchMeetups()
  },[])

  return <MeetupList meetups={meetupList} />;
}
