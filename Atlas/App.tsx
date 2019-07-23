import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// connecting to database using MongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://majesty_uwagerikpe:atlasadmin2019@cluster-atlas-2jaxm.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// database requirements
var User = require('./models/User.tsx');
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
