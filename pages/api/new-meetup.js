import { MongoClient } from "mongodb";

const DATABASE_URI = "mongodb://mongodb:27017/";
const client = new MongoClient(DATABASE_URI + "meetups")

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await client.connect();
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      await meetupsCollection.insertOne(data);
    } catch (error) {
      console.dir;
    } finally {
      await client.close();
    }

    res.status(201).json({ message: "Success!" });
  }
}
