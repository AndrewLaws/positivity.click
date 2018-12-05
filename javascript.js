var quotes = [
  'I am an old man and have known a great many troubles, but most of them never happened. Mark Twain',
  'Use your smile to change the world; don\’t let the world change your smile. – Unknown',
  'If you pay attention to the darkness, you will never find the light.',
  'If you study and relive your past experiences, analyzing them, and getting in touch with your feelings you will only reinforce those feelings. If you want to get away from a problem, you should not focus on it. Focus on the good, the positive, the beautiful, the nice.',
  'A happy person is fully caught up in the moment, and is not thinking about the past or the future.'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
