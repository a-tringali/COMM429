const quotes = [
    {"quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
    {"quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "author": "Nelson Mandela"},
    {"quote": "It takes courage to grow up and become who you really are.", "author": "E. E. Cummings"},
    {"quote": "Nothing is impossible. The word itself says 'I'm possible!", "author": "Audrey Hepburn"},
    {"quote": "Keep your face always toward the sunshine, and shadows will fall behind you.", "author": "Walt Whitman"},
    {"quote": "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the guy who'll decide where to go.", "author": "Dr. Seuss"},
    {"quote": "Attitude is a little thing that makes a big difference.", "author": "Winston Churchill"},
    {"quote": "To bring about change, you must not be afraid to take the first step. We will fail when we fail to try.", "author": "Rosa Parks"},
    {"quote": "Don't sit down and wait for the opportunities to come. Get up and make them.", "author": "Madam C. J. Walker"},
    {"quote": "Champions keep playing until they get it right.", "author": "Billie Jean King"},
    {"quote": "I am lucky that whatever fear I have inside me, my desire to win is always stronger.", "author": "Serena Williams"},
    {"quote": "You are never too old to set another goal or to dream a new dream.", "author": "C. S. Lewis"},
    {"quote": "It is during our darkest moments that we must focus to see the light.", "author": "Aristotle"},
    {"quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
    {"quote": "Life shrinks or expands in proportion to one’s courage", "author": "Anaïs Nin"},
    {"quote": "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.", "author": "Ella Fitzgerald"},
    {"quote": "Try to be a rainbow in someone's cloud.", "author": "Maya Angelou"},
    {"quote": "If you don't like the road you're walking, start paving another one.", "author": "Dolly Parton"},
    {"quote": "Real change, enduring change, happens one step at a time.", "author": "Ruth Bader Ginsburg"},
    {"quote": "All dreams are within reach. All you have to do is keep moving towards them.", "author": "Viola Davis"},
    {"quote": "t is never too late to be what you might have been.", "author": "George Eliot"},
    {"quote": "It always seems impossible until it's done.", "author": "Nelson Mandela"},
    {"quote": "Don’t count the days, make the days count.", "author": "Muhammed Ali"},
    {"quote": "If you risk nothing, then you risk everything.", "author": "Geena Davis"},
    {"quote": "Definitions belong to the definers, not the defined.", "author": "Toni Morrison"},
    {"quote": "When it comes to luck, you make your own.", "author": "Bruce Springsteen"},
    
    // Add more quotes as needed
  ];

  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the quote and author on the webpage
    document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
    document.getElementById('author').textContent = `— ${randomQuote.author}`;
  }

  // Display a random quote when the page loads
  window.onload = getRandomQuote;