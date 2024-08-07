import MongoDBClient from "../db/MongoDbClient.js";

class Collection {
  static async getAllCollectionData(collectionName) {
    const client = new MongoDBClient(process.env.MONGO_URI, process.env.MONGO_DB_NAME);

    try {
      await client.connect();
      const documents = await client.getAll(collectionName);
      return documents;
    } finally {
      await client.close();
    }
  }
}

export default Collection;
