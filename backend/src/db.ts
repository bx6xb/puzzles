import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb'

dotenv.config()

const uri = process.env.MONGO_URI || ''

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

async function run() {
  try {
    // Make a connection
    await client.connect()
    console.log('Successfully connected')
  } catch (error) {
    console.log('Error while connecting', error)
    throw error
  }
}

run().catch(console.dir)

export { client }
