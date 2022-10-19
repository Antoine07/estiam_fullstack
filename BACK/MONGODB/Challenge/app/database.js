// Connexion persistente à la base MongoDB
import { MongoClient } from "mongodb";

const DB_NAME = 'ny';

// Déclaration de la connectionString
const CONNECTION_STRING = "mongodb://root:example@mongo:27017"; // Avec Docker
// const CONNECTION_STRING = 'mongodb://localhost:27017'; // Installation locale de MongoDB

// Initialise une connexion à la base MongoDB
const client = new MongoClient(CONNECTION_STRING);

export function openDatabase() {
    return client.connect().then(() => {
      let db = client.db(DB_NAME);

      return db;
    });
  };

 