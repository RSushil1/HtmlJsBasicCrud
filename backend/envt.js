const { MongoClient, ServerApiVersion } = require('mongodb');
const dbUri ="mongodb+srv://sushilsinghrathore1998:fOSwsapvNNzatAE1@cluster0.eabfobo.mongodb.net/School?retryWrites=true&w=majority"
const dbOptions =  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }};
const dbName = "School";
const studentCol = "Students";
module.exports = {dbUri,dbOptions,MongoClient, ServerApiVersion,dbName,studentCol}
// Mongo db use in place of array, learn queries
// Log file in express node api
// UI correction
// cookies in UI
// detail page ui from query string
//https://cloud.mongodb.com/ using google acc
