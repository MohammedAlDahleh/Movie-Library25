'use strict'

const express = require('express');
const movieData = require('./Movie-data/data.json');
const axios = require('axios').default;
const app = express()
const cors = require('cors')
require('dotenv').config()

const port = 3000

app.use(cors());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


/////////////////////////////////////////////////

app.get('/recipes', handelRecipes);
// app.get('/searcheRecipe', handelSearcheRecipe);
function handelRecipes(req, res) {
    const url = "";
    axios.get(url)
        .then(result => {
            console.log(result.data);
            res.send("inside then")
        })
        .catch((error) => {
            console.log(error);
            res.send("inside catch");
        });
}

/////////////////////////////////////////////////

//Routes:
app.get('/favorite', handelFavorite);
app.get('/', handelData)
app.get('*', handelNotFound)

//Functions:
function handelFavorite(req, res) {
    res.send('Welcome to Favorite page');
}

function handelData(req, res) {
    let result = [];
    let newMovie = new Moive(movieData.title, movieData.poster_path, movieData.overview);
    result.push(newMovie);
    res.json(result);
}

function handelNotFound(req, res) {
    res.status(404).send("Not Found")
}
function Moive(tittle, poster_path, overview) {
    this.tittle = tittle;
    this.poster_path = poster_path;
    this.overview = overview;
}
