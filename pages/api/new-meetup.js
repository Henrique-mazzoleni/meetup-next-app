import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URI);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await client.connect();
      const db = client.db("meetups");
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
