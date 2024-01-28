function calculateTotalPrice(order){
let a = 0;
  for (let i = 0; i <= order.length; i += 1){
    a += order[i];
    }
    return a;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));