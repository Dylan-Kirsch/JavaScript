let message = "";
let i = 0;


do {

    message+=`2^${i}=${Math.pow(2,i)} `;
    i++;

}
while (i<=16);

console.log(message);