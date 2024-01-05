const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const dbName = 'mydatabase'; // Replace with your database name

MongoClient.connect(url, function(err, client) {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB successfully');

    const db = client.db(dbName);

    // Perform database operations here

    client.close();
});
