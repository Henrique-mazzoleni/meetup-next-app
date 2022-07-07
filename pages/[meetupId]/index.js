import { MongoClient, ObjectId } from "mongodb";

import classes from "../../styles/MeetupDetail.module.css";

export default function MeetupDetail(props) {
  if (!props.meetup) return <h1>Meetup not found!</h1>;

  return (
    <div className={classes.item}>
      <img src={props.meetup.image} />
      <span>{props.meetup.title}</span>
      <p className="description">{props.meetup.description}</p>
      <p>{props.meetup.address}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const DATABASE_URI = "mongodb://mongodb:27017/";
  const client = new MongoClient(DATABASE_URI + "meetups");

  try {
    await client.connect();
    const meetupsCollection = client.db().collection("meetups");
    const ids = await meetupsCollection.find({}, { _id: 1 }).toArray();

    return {
      fallback: false,
      paths: ids.map((meetup) => ({
        params: {
          meetupId: meetup._id.toString()
        }
      })),
    };
  } catch (error) {
    console.dir;
  } finally {
    await client.close();
  }
}

export async function getStaticProps(context) {
  const DATABASE_URI = "mongodb://mongodb:27017/";
  const client = new MongoClient(DATABASE_URI + "meetups");

  try {
    const id = context.params.meetupId;

    await client.connect();
    const meetupsCollection = client.db().collection("meetups");
    const meetup = await meetupsCollection.findOne(ObjectId(id));

    return {
      props: {
        meetup: { ...meetup, _id: meetup._id.toString() },
      },
      revalidate: 5,
    };
  } catch (error) {
    console.dir;
  } finally {
    await client.close();
  }
}
