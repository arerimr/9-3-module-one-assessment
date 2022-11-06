/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
let newArr = []
for (let x of movies){
  newArr.push(x.title)
} return newArr
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
let highest;
let newArr = [];
let score;
if (movies.length === 0){
  highest = 0
}
for (let x of movies){
  score = x.metascore
newArr.push(Number(score))
newArr.sort()
//console.log(newArr)
highest = newArr[newArr.length - 1]
} return highest
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
let average;
let newArr = [];
let rating;
let sum;
function addingRatings(total, value){
  return total + value
}

if (movies.length === 0){
  average = 0
}
for (let x of movies){
  rating = x.imdbRating
  newArr.push(Number(rating))
  sum = newArr.reduce(addingRatings)
  average = (sum / (newArr.length)).toFixed(2)
  //console.log(average)
} return Number(average)
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let obj = {}
  let numG = 0;
  let numPG = 0;
  let other = 0;
  if (movies.length === 0){
    return obj
  }
  for (let x of movies){
    if (x.rated === "G"){
      numG += 1
      obj.G = numG
      //console.log(obj)
    } else if (x.rated === "PG"){
      numPG += 1
      obj.PG = numPG
    } else {
      other += 1
      obj[x.rated] = other
    }
  } return obj
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, ID) {
  //let finalArr = []
  let ide;
  let y;
  let z;
if (movies.length === 0){
  return null
}
for (let x of movies){
  ide = x.imdbID
  if (ide === ID){
    y = x
  }
   //console.log(y)
} if (y){
  z = y
} else if (!y){
  z = null
}

return z

}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genero) {
  let gen2 = genero.toLowerCase()
  let genreArr = []
  let finalArr = []
if (movies.length === 0)
  return movies
  for (let x of movies){
  genreArr = (x.genre.split(", "))
    for (let y of genreArr){
      let z = y.toLowerCase()
      if (z == gen2){
        finalArr.push(x)
        //console.log(gen2)
      }
    }
  } return finalArr
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
let newArr = []
let date;
let year1;
for (let x of movies){
  date = x.released
  year1 = (Number(date.slice(date.length - 4)))
  if (year1 <= year){
    newArr.push(x)
  }
} return newArr
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
let returnName;
let box;
let numArr = [];
let highest;
//let box2;
let strBox;
let price;
if (movies.length === 0){
  return null
}
for (let x of movies){
  box = x.boxOffice
  //box2 = Number(box.slice(1).split(",").join(""))
 numArr.push(Number(box.slice(1).split(",").join("")))
 numArr.sort()
 highest = numArr[numArr.length - 1]
 strBox = highest.toString()
 price = `$${strBox[0]}${strBox[1]}${strBox[2]},${strBox[3]}${strBox[4]}${strBox[5]},${strBox[6]}${strBox[7]}${strBox[8]}`
 if (box === price){
  returnName = x.title
 }
 //console.log(price)
} return returnName
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
