const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

/*
  Recipe.create ({title: 'Rührei', level: 'UltraPro Chef', cuisine: 'German', duration: 30, creator: 'Ultra Heiko und ProChef Grulke'})
  .then(recipe => { console.log('Das Gericht wurde angelegt: ', recipe) })
  .catch(err => { console.log('An error happened:', err) });
*/
/*
Recipe.insertMany(data)
  .then(data => data.map(recipe => console.log(recipe.title)))
  .catch(err => { console.log('An error happened:', err) });
*/
/*
Recipe.find({},{title:1, _id:0}).then(
    (recipe) => {
      recipe.forEach(
        (title) => console.log( "Rezeptname: " + title)
      )
    }
  ).catch(
    (err) => console.log("Couldn't find recipe because of this error:" + err)
  )
*/

 let successCallback = (value) => console.log("\nSuccess return value:"+JSON.stringify(value));
 let errorCallback = (err) => console.log("Database returned this error:"+err);
/*
 Recipe.updateMany({title:"Rigatoni alla Genovese"},{duration: 100})
 .then(successCallback)
 .catch(errorCallback);
*/
/*
Recipe.deleteOne({title:"Carrot Cake"})
.then(data => console.log(data, "success"))
.catch(errorCallback);
*/

Recipe.deleteOne({title:"Carrot Cake"})
.then(data => {
  console.log(data, "success");
  mongoose.connection.close();
    })
.catch(errorCallback);


