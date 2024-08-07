import 'dotenv/config';
import { MongoClient } from 'mongodb';

class MongoDBClient {
  constructor() {
    this.uri = process.env.MONGO_URI;
    this.dbName = process.env.MONGO_DB_NAME;
    this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  async connect() {
    try {
      await this.client.connect();
      this.database = this.client.db(this.dbName);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  async close() {
    try {
      await this.client.close();
      console.log('Disconnected from MongoDB');
    } catch (error) {
      console.error('Error disconnecting from MongoDB:', error);
      throw error;
    }
  }

  async insertOne(collectionName, document) {
    const collection = this.database.collection(collectionName);
    const result = await collection.insertOne(document);
    return result;
  }

  async find(collectionName, query) {
    const collection = this.database.collection(collectionName);
    const documents = await collection.find(query).toArray();
    return documents;
  }

  async updateOne(collectionName, filter, update) {
    const collection = this.database.collection(collectionName);
    const result = await collection.updateOne(filter, update);
    return result;
  }

  async deleteOne(collectionName, filter) {
    const collection = this.database.collection(collectionName);
    const result = await collection.deleteOne(filter);
    return result;
  }

  async getAll(collectionName) {
    const collection = this.database.collection(collectionName);
    const documents = await collection.find().toArray();
    return documents;
  }
}

export default MongoDBClient;
