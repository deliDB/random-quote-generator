/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

/*** 
 * Creates an array of objects named quotes.
***/

const quotes = [
  {
      quote: 'Geostooooorm!!',
      source: 'Jason Mantzoukas',
      citation: 'How Did This Get Made - Episode 186',
      year: '2018'
  },
  {
      quote: 'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.',
      source: 'Maya Angelou',
      citation: '',
      year: ''
  },
  {
    quote: 'Never underestimate the power of dreams and the influence of the human spirit. We are all the same in this notion: The potential for greatness lives within each of us.',
    source: 'Wilma Rudolph',
    citation: '',
    year: ''
},
{
  quote: `Never be limited by other people's limited imaginations.`,
  source: 'Dr. Mae Jemison',
  citation: 'At the Annual Biomedical Research Conference for Minority Students',
  year: '2009'
},
{
  quote: `What is this, Horseville? Cuz I am surrounded by naysayers! Wordplay!`,
  source: 'Tracy Jordan',
  citation: '30 Rock - Episode 3.16',
  year: '2009'
},
{
  quote: `Humans are allergic to change. They love to say, "We've always done it this way." I try to fight that.`,
  source: 'Grace Hopper',
  citation: 'The Wit and Wisdom of Grace Hopper',
  year: '1987'
}
];
/***
 * The `getRandomQuote` function returns a random object from the quotes array.
***/

function getRandomQuote(){
  const ranNum = Math.floor(Math.random() * quotes.length);
  const ranQuote = quotes[ranNum];
  return ranQuote; 
}

/***
 * The `printQuote` function calls the `getRandomQuote` function and prints the properties of the genQuote object.
***/

function printQuote(){
  const genQuote = getRandomQuote();
  let html = `
      <p class="quote">${genQuote.quote}</p>
      <p class="source">${genQuote.source}
  `;
  
  if(genQuote.citation !== ''){
      html += `
          <span class = "citation">${genQuote.citation}</span>
      `
  }

  if(genQuote.year !== ''){
      html += `
          <span class="year">${genQuote.year}</span>
      `
  }

  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);