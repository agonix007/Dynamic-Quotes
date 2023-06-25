AOS.init();

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("newQuotes");
const tweet = document.getElementById("tweetNow");
let data = "";
let quoteData = "";

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quoteData.text} By ${quoteData.author}.`;
  window.open(tweetPost);
};

const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * 100);
  // console.log(data[rnum].text);
  quoteData = data[rnum];
  quotes.innerText = `${quoteData.text}`;
  if (quoteData.author === null) {
    author.innerText = "Unknown";
  } else {
    author.innerText = `${quoteData.author}`;
  }
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let response = await fetch(api);
    data = await response.json();
    getNewQuotes();
    // console.log(data[3].text);
    // console.log(data[3].author);
  } catch (error) {
    console.log(error);
  }
};

getQuotes();

newQuotes.addEventListener("click", getQuotes);
tweet.addEventListener("click", tweetNow);
