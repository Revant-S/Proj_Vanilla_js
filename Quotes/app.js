
const API_KEY = "YourAPIKEY";
const api_url ="https://api.api-ninjas.com/v1/quotes?category=happiness";

async function getQuote(url)
{
  const response = await fetch(api_url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY
      }
})
  let data = await response.json();
  return data;
}
const quoteArea = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".speaker");

function updateQuote(quoteObject) {
  quoteArea.innerText = quoteObject[0]["quote"];
  quoteAuthor.innerText = quoteObject[0]["author"];
}
const btn  = document.querySelector(".btn");
window.addEventListener("load",async function () {
  let a = await getQuote(api_url);
  updateQuote(a);
}
)

btn.addEventListener("click" , async function () {
  let a = await getQuote(api_url);
  updateQuote(a);
})