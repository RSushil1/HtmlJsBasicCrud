
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sushilsinghrathore1998:fOSwsapvNNzatAE1@cluster0.eabfobo.mongodb.net/?retryWrites=true&w=majority";
const students = require('./students');
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
    // Send a ping to confirm a successful connection
    //await client.db("Test").command({ ping: 1 });
     //await client.db("School").createCollection("Students");
     var dbcoll= await client.db("School").collection("Students");
    //await dbcoll.insertMany(students)
    var std = await dbcoll.findOne({id:{$eq:1}},{sort:{id:1},projection:{_id:0,id:1,first_name:1}})
    console.log(std);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
