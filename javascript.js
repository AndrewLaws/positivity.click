var quotes = [
  'I am an old man and have known a great many troubles, but most of them never happened. Mark Twain',
  'Use your smile to change the world; don\’t let the world change your smile. – Unknown',
  'If you pay attention to the darkness, you will never find the light.',
  'If you study and relive your past experiences, analyzing them, and getting in touch with your feelings you will only reinforce those feelings. If you want to get away from a problem, you should not focus on it. Focus on the good, the positive, the beautiful, the nice.',
  'A happy person is fully caught up in the moment, and is not thinking about the past or the future.',
  'Too much thinking and analyzing just makes any problem worse. Today is a wonderful day – live it in the present.',
  'Why do little children think ghosts, goblins, and monsters are real? As adults, we know they aren’t. Your thoughts aren’t "real" either in the sense that you "create" and reinforce them -- and the emotions that go along with them. Your thoughts are only what you decide to believe in and continually reinforce in your mind.',
  'If your thoughts begin to change, you will feel better.',
  'There is so much in life I can’t control. But this is my life and I’ve decided to be happy. I can choose to be happy regardless of my other circumstances. It’s not "when I get a promotion, I’ll be happy....." or "when I can speak in front of a small group of people, I’ll be happy....." The focus should be on learning to be happy now. Tap into your inner peace and contentment in the way that works best for you.',
  'Happiness is a result of a decision to be happy.',
  'Your emotions and feelings are created by your thoughts.',
  'Unhappiness cannot exist on its own. It occurs because of thoughts, which can be changed.',
  'Your past thoughts are about events that are no longer real. That bad experience happened yesterday (in the past) and is over. It is gone and exists solely in your mind. Today is a new day, a better day, and worrying about the past just dooms us in the present. It’s how you process it now that makes a difference.',
  'You are a thought-producing machine. When you realize this, you can begin to slow your thoughts down and allow your anxieties and fears to rest.',
  'Your automatic negative thoughts (ANTs) are only thoughts: they are not real. Your ANTS are not real. They do not tell you the truth.',
  'Our tendency is to think TOO MUCH and to paralyze ourselves with our ruminations. We have a choice: Realize what we\'re doing to ourselves, get up, find a distraction, and do something interesting (positive).',
  'Happy people understand that to enjoy life you live it -- you don’t think about it. Watch a roomful of preschool children. They are enjoying life because they are focused on the moment and are not thinking about it. They are immersed and absorbed in living.',
  'Analysis creates paralysis. Anticipatory anxiety killing you? Stop thinking about it, take that step, and just do it. Thoughts grow with attention. If you focus on negative thoughts, they will grow and grow and become larger. If you focus on your progress and the new thoughts you are learning, they will grow stronger and take "automatic" control.',
  'Even if you understand and know why you have a problem, this will not help you in solving it. Going over and over the reasons for your problem is like pouring salt in an open wound.',
  'The only factor making you unhappy is your own thoughts. Relax, release them, let them go. When you notice self-limiting and self-defeating thoughts playing over and over in your mind, say "STOP! I will not give you any more power over me! I have better things to do!',
  'Just as an attitude of doom and gloom makes you see more problems, facing the future with a sense of wonder makes you alive to all sorts of wonderful things that are going on, right now, everywhere around you.',
  'Decide that a good day is any day that you\'re above ground. Similarly, decide that a bad day is when somebody steals your car and drives it into the ocean. Those types of definitions make it easy to be happy–and difficult to be sad.',
  'Think about the big picture: Unless something life-changing has happened (like the death of a loved one), chances are that in two weeks, you\'ll have forgotten completely about whatever it was that has your shorts in a twist today.',
  'There is nothing good or bad, only thinking makes it so. ~ Hamlet',
  'You cannot tailor-make the situations in life but you can tailor-make the attitudes to fit those situations. ~ Zig Ziglar',
  'Each problem has hidden in it an opportunity so powerful that it literally dwarfs the problem. The greatest success stories were created by people who recognized a problem and turned it into an opportunity. ~ Joseph Sugarman',
  'Each morning when I open my eyes I say to myself: I, not events, have the power to make me happy or unhappy today. I can choose which it shall be. Yesterday is dead, tomorrow hasn’t arrived yet. I have just one day, today, and I’m going to be happy in it. ~ Groucho Marx',
  
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
