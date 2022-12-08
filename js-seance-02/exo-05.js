let message = "";
let i = 0;
let nombreMax=16;

do {

    message+=`2^${i}=${Math.pow(2,i)} `;
    i++;

}
while (i<=nombreMax);

console.log(message);