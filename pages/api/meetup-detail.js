import { MongoClient, ObjectId } from "mongodb";

const DATABASE_URI = "mongodb://mongodb:27017/";
const client = new MongoClient(DATABASE_URI + "meetups");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const id = req.body;
      await client.connect();
      const meetupsCollection = client.db().collection("meetups");

      const result = await meetupsCollection.findOne(ObjectId(id));

      res.status(200).json({
        body: result,
        message: "success",
      });
    } catch (error) {
      console.dir;
    } finally {
      await client.close();
    }
  }
}
