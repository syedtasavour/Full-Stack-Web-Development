let url = "https://catfact.ninja/fact";
let url2 = "https://api.thecatapi.com/v1/images/search";

// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("Error-- ", e);
    return "Could not fetch fact.";
  }
}

async function getImage() {
  try {
    let res = await axios.get(url2);
    let dataArray = res.data;
      let firstImage = dataArray[0];
      return firstImage.url;
    

  } catch (e) {
    console.log("Error-- ", e);

    return "Could not fetch image.";
  }
}


let fact = document.querySelector("#fact");
let btn = document.querySelector(".btn fact");
let img = document.querySelector("#chnageImage");

function changeText() {
  btn = addEventListener("click", async () => {
    let res = await getFacts();
    let imgg = await getImage();
    console.log(imgg)
    img.setAttribute("src",imgg);
    fact.innerHTML = res;
  });
}
changeText();

const url3 = "https://icanhazdadjoke.com/";
async function getJoke(){
 try{
  const config = {headers:{Accept: "Application/json"}};
  let res = await axios.get(url3,config);
  console.log(res.data);
 }catch(error){
  console.log(error);
 }
}