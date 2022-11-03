const getIDs = () =>
   new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve([532, 543, 753, 1, 5]);
      }, 1500);
});

//? Here we are fetching a recipe with a given Id.
//? We are getting a recipe as an object once consumed.
const getRecipe = (recipeID) => {
   return new Promise((resolve, reject) => {
      if(!Array.isArray(recipeID)){
         reject('not array')
      }
      setTimeout((ID) => {
         const recipe = {
            title: "Fresh tomato pasta",
            publisher: "Pinchas Hodadad",
         };
      resolve(`${ID}: ${recipe.title}`);
      },1500,recipeID);
   });
};

//? Here we are consuming the promise.
//? Getting the Ids, then getting a recipe with the id in the index 2.
// getIDs()
//    .then((IDs) => {
//       console.log(IDs);
//       return getRecipe(IDs[2]);
//    })
//    .then((recipe) => {
//       console.log(recipe);
//    })
//    .catch((error) => {
//       console.log("It is an error!");
//    })
async function returnId(){
   try {
      const data = await getIDs()
      console.log(data);
      const data2 = await getRecipe(data[2])
      console.log(data2);
   }
   catch(e){
      console.log(e);
   }
}
returnId()