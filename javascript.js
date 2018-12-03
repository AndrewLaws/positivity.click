var quotes = [
  'This is a quote',
  'this is flarty bart fast',
  'yeah yeah you know the routine now'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
