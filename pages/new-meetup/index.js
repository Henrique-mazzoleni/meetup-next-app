import { Fragment } from "react";
import Head from "next/head";
import NewMeetupForm from "../../components/Meetups/NewMeetupForm";

export default function NewMeetup() {
  return (
    <Fragment>
      <Head>
        <title>Make a new Meetup!</title>
        <meta
          name="description"
          content="Set up a new Meetup for you and your friends."
        />
      </Head>
      <NewMeetupForm />;
    </Fragment>
  );
}
