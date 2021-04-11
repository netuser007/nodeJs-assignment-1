/*

//static repo for reference!!
const products = [
        {
            "_id": 1,
            "name": "Apple iPhone - 12",
            "category": "Premier"
        },
        {
            "_id": 2,
            "name": "Redmi Note 10i",
            "category": "Favorites"
        },
        {
            "_id": 3,
            "name": "Realme X",
            "category": "Premier"
        },
        {
            "_id": 4,
            "name": "Micromax 1b",
            "category": "Favorites"
        },
        {
            "_id": 5,
            "name": "Samsung Galaxy S20",
            "category": "Premier"
        },
        {
            "_id": 6,
            "name": "Moto G10",
            "category": "Favorites"
        },
        {
            "_id": 7,
            "name": "Nokia 3310",
            "category": "MostPopular"
        },
        {
            "_id": 8,
            "name": "One Plus 9",
            "category": "newproducts"
        },
        {
            "_id": 9,
            "name": "Redmi Note 9",
            "category": "MostPopular"
        },
        {
            "_id": 10,
            "name": "Samsung F62",
            "category": "newproducts"
        }
    ]

    module.exports = products;

*/


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'catalogdb';

const getProducts=(callback)=> {
    MongoClient.connect(url, (err, client) => {
        client.db(dbName).collection('products').find().toArray((err,result)=>{
                callback(err,result);
            });
        client.close();
    })
}


const getProductsById=(_id,callback)=> {
    MongoClient.connect(url, (err, client) => {
        client.db(dbName).collection('products')
                .find({_id: _id}).toArray((err,result)=>{
                callback(err,result);
            });
        client.close();
    })
}

module.exports = {
    getProducts,
    getProductsById
}