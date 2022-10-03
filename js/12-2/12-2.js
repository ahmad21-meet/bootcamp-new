const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }

    function getCandy(candyStore, id){
        const lok = candyStore.candies.find(mov =>{
            return console.log(` the name of the element is: ${mov.name} and the price  is:${mov.price}`);
        })
        }

getCandy(candyStore)

console.log("----------------------------------");

function getPrice(candyStore, id){
    const lok = candyStore.candies.find(mov =>{
        return console.log(` the name of the element is: ${mov.name} and the id is:${mov.id}`);
    })

    }

    getPrice(candyStore)

    
    function addCandy(candyStore, id, name, price){
        const result  = candyStore.candies.find(()=>{
          candyStore.candies.push({name:name,id:id,price:1});
          //*  console.log(arr)
        });
    };
    addCandy(candyStore,'aa','kinder',2)

    
        console.log(candyStore);


        
function Buy(candyStore , id) {

    const res  = candyStore.candies.find(candy=>{
        candyStore.cashRegister += candy.price;
        candyStore.candies.amount=candy.amount-1;
      });
      console.log(candyStore.cashRegister,candyStore.candies.amount);


}
Buy(candyStore ,"as12f")