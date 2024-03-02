
const API_KEY = "YOURAPIKEY";
let api_url ="https://api.api-ninjas.com/v1/quotes?category=";

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
const category = document.querySelector("#topics");
function updateQuote(quoteObject) {
  quoteArea.innerText = quoteObject[0]["quote"];
  quoteAuthor.innerText = quoteObject[0]["author"];
}
const btn  = document.querySelector(".btn");
// window.addEventListener("load",async function () {
//   let a = await getQuote(api_url);
//   updateQuote(a);
// }
// )

btn.addEventListener("click" , async function () {
  // if (!category.value) {
  //   quoteArea.innerText = "Please select a category!!";
  //   return;
  // }
  api_url =baseurl+ category.value;
  let a = await getQuote(api_url);
  console.log(a);
  updateQuote(a);
})