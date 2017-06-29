// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//will hold individual quotes
var quote;

//will hold the index of each quote from the object array
var quoteStore = [];

//all of the quotes
var quotes = [
  {
    quote: "Oh, get a job? Just get a job? Why don’t I strap on my job helmet and squeeze down into a job cannon and fire off into job land, where jobs grow on jobbies?!",
    source: "Charlie Kelley",
    citation: "Always Sunny",
    year: "2011"
  },
  {
    quote: "Are you forgetting that I was a professional twice over? An analyst and a therapist? The worlds first analrapist.",
    source: "Tobias Funke",
    citation: "Arrested Development",
    year: "2004"
  },
  {
    quote: "Webster\'s dictionary defines wedding as: The fusing of two metals with a hot torch.",
    source: "Michael Scott",
    citation: "The Office",
    year: "2009"
  },
  {
    quote: "That\'s how you get ants.",
    source: "Anon",
    citation: "Archer",
    year: "2013"
  },
  {
    quote: "Think of it more as, um, forced adoption through aggressive guerrilla marketing.",
    source: "Richard Hendrix",
    citation: "Silicon Valley",
    year: "2017"
  }
];

//generates a random number between 0 and 4 for the location of the quotes then selects the entire quote object.
function getRandomQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  //console.log(randNum);
  for (var i = 0; i < quotes.length; i++) {
    quote = quotes[randNum];
    quoteStore.push(quote);
  }
  return quote;
}

//prints out the four quote properties to the location in index.html
function printQuote() {
  var quote = getRandomQuote();

  var listHTML = "<p class='quote'>" + quote.quote + "</p>";
  listHTML += "<p class='source'>" + quote.source;
  listHTML += "<span class='citation'>" + quote.citation + "</span>";
  listHTML += "<span class='year'>" + quote.year + "</span></p>";
  document.getElementById("quote-box").innerHTML = listHTML;
}
