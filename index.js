const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://laithdada12345:nkw8STIpHOXl4vc8@cluster1.fkkgfti.mongodb.net/myDatabase?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Connected to MongoDB Atlas!");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("MongoDB Atlas connection closed.");
  }
}

run().catch(console.dir);
