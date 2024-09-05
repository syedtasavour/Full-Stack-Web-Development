// function saveTodb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success(data);  // Pass the data to the success callback
//   } else {
//     failure();  // Call failure without data (as per your original design)
//   }
// }

// saveTodb(
//   "Test Data",
//   () => {
//     console.log("Your Data Was Saved: ");
//     saveTodb("Test Data Inside: ",()=>{
//       console.log("Test Data Inside: ");
//       saveTodb("3rd db save",()=>{
//         console.log("Test Data Inside: 3rd");
//       },()=>{
//         console.log("failure3 : Weak connection");
//       }) 

//     },()=>{
//       console.log("failure2 : Weak connection");

//     })
//   },
//   () => {
//     console.log("Data Save Failed.");  // It's a failure case, so no data is passed
//   }
// );

function saveTodb(data) {
  
 return new Promise((success,failure)=>{
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
        success("sucess : Data Was Saved");  
      } else {
        failure("Failuere : weak connection"); 
      }
 })
}

saveTodb("Test Data")
.then((r)=>{
  console.log("Promise was resolved. data one saved: --", r);
  return saveTodb("Test Data inside", r);
}).then((r)=>{
  console.log("Promise was resolved. data two saved: -- ")
  return saveTodb("Test Data inside", r);
})
.then((r)=>{
  console.log("Promise was resolved. data three saved: -- ")
  return saveTodb("Test Data inside", r);
})
.catch((e)=>{
  console.log("Promise was Rejected: -- ",e);
});