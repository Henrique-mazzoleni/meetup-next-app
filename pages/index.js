import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/Meetups/MeetupList";

export default function HomePage(props) {
  return <Fragment>
    <Head>
      <title>Meetups</title>
      <meta name="description" content="A site to organize and find meetups near you!" />
    </Head>
    <MeetupList meetups={props.meetups} />;
  </Fragment>
}

export async function getStaticProps() {
  const client = new MongoClient(process.env.DATABASE_URI);

  try {
    await client.connect();
    const meetupsCollection = client.db('meetups').collection("meetups");
    const meetups = await meetupsCollection.find().toArray();

    return {
      props: {
        meetups: meetups.map((meetup) => {
          return { ...meetup, _id: meetup._id.toString() };
        }),
      },
      revalidate: 5,
    };
  } catch (error) {
    console.dir;
  } finally {
    await client.close();
  }
}
