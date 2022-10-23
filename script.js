const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");
const loader = document.querySelector("#loader");

let apiQuotes = [];

//Show loading
function loading() {
   loader.hidden = false;
   quoteContainer.hidden = true;
}

//Show loading
function complete() {
   quoteContainer.hidden = false;
   loader.hidden = true;
}

//Show new quote
function newQupte() {
   //    loading();
   //Pick a random quote from apiQuotes array
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

   //check if quote author is null, show unknown
   //if(!quote.author)
   //Or
   if (quote.author == "" || quote.author == null) {
      authorText.textContent = "unknown";
   } else {
      authorText.textContent = quote.author;
   }

   //Checking if the quote text is long add long-qoute css class
   if (quote.text.length > 120) {
      quoteText.classList.add("long-quote");
   } else {
      quoteText.classList.remove("long-quote");
   }
   quoteText.textContent = quote.text;
   complete();

   //    console.log(quote);
}

//Get Quotes from API
async function getQuptes() {
   loading();
   try {
      const response = await fetch("https://type.fit/api/quotes");
      apiQuotes = await response.json();
      newQupte();
      //console.log(apiQuotes[9]);
   } catch (err) {
      console.log(err);
   }
}
getQuptes();
// loading();

//Event Listener
newQuoteBtn.addEventListener("click", newQupte);

/*
async function getQuptes1() {
   loading();
   try {
      await fetch("https://type.fit/api/quotes")
         .then((res) => {
            return res.json();
         })
         .then((res) => {
            // console.log("This is response", res);
            // console.log("This is response", res[10].text);
         });
   } catch (err) {
      console.log(err);
   }
}
getQuptes1();

*/
/*
//Show quotes from local file (quotes.js)
function newQupte() {
      //Pick a random quote from apiQuotes array
      const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
   
      console.log(quote);
   }
newQupte();
*/
