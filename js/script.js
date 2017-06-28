// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quote;
var quoteStore = [];

var quotes = [
  {
    quote: "Oh, get a job? Just get a job? Why don’t I strap on my job helmet and squeeze down into a job cannon and fire off into job land, where jobs grow on jobbies?!",
    source: "Charlie Kelley",
    citation: "Always Sunny",
    year: "2011"
  },
  {
    quote: "Are you forgetting that I was a professional twice over? An analyst and a therapist? THe worlds first analrapist.",
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
    quote: "That\'s how you get ants",
    source: "Anon",
    citation: "Archer",
    year: "2013"
  },
  {
    quote: "Think of it more as, um, forced adoption through aggressive guerrilla marketing",
    source: "Richard Hendrix",
    citation: "Silicon Valley",
    year: "2017"
  }
];

function getRandomQuote() {
  var randNum = Math.floor(Math.random() * 5);
  //console.log(randNum);
  for (var i = 0; i < quotes.length; i++) {
    quote = quotes[randNum];
    quoteStore.push(quote);
  }
  return quote;
}

function printQuote() {
  var quote = getRandomQuote();

  var listHTML = "<p class='quote'>" + quote.quote + "</p>";
  listHTML += "<p class='source'>" + quote.source;
  listHTML += "<span class='citation'>" + quote.citation + "</span>";
  listHTML += "<span class='year'>" + quote.year + "</span></p>";
  document.getElementById("quote-box").innerHTML = listHTML;
}
