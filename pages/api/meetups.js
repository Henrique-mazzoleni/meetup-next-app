import { MongoClient } from "mongodb";

const DATABASE_URI = "mongodb://mongodb:27017/";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await MongoClient.connect(DATABASE_URI + "meetups");
      const meetupsCollection = client.db().collection("meetups");
      const result = await meetupsCollection.find({});
      const data = await result.toArray();

      res.status(200).json({
        body: data,
        message: "success!",
      });
    } catch (error) {
      console.dir;
    } finally {
      await client.close();
    }
  }
}
