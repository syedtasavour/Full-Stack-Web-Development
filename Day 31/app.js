h1 = document.querySelector("h1");
let a =1;
 function changeColor(color, delay ) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let ran = Math.floor(Math.random(5)*5)+1;
      if(ran > 3){
        console.log("Promise Rejected: ",ran);
        reject("promise rejected");
      }
      console.log("Work Done",a);
      h1.style.color =color;
      a++;
      resolve("color changed");
    },delay)

  })};






async function demo(){
  try{
    await changeColor('orange',1000);
  await changeColor('green',1000);
  await changeColor('red',1000);
  await changeColor('blue',1000)
  await changeColor('white',1000)
  await changeColor('skyblue',1000)
  }catch(e){
    console.log("error found",e);
  }

  let c = 1;
  console.log("Work Done after error",a);
  c++;
}
demo(); 









  // changeColor('red',1000)
  // .then(()=>{
  //   console.log("Red Color Changed");
  //   return changeColor("orange",1000);
  // }) .then(()=>{
  //   console.log("orange Color Changed");
  //   return changeColor("green",1000);
  // }).then(()=>{
  //   console.log("green Color Changed");
  //   return changeColor("blue",1000);
  // }).then(()=>{
  //   console.log("blue Color Changed");
  // });
  



// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000);
//   });
// });
