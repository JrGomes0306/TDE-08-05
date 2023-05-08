//EXERCICIO 01

for(let i=0;i<=100;i+=2){
    console.log("os numeros pares de 0 a 100 são:"+i);
}


//EXERCICIO 02

let arra = [2,4,6,8,10];
let soma = 0;
for (let i = 0; i < arra.length; i++) {
    console.log(arra[i]);
    soma += arra[i];
}
console.log("soma= "+ soma);


//EXERCICIO 03

let arr = [2,-1,4,6,-5,8,-9,10];
for(let i=0;i < arr.length; i++){
    if(arr[i]<0){
        arr.splice(i,0) 
    }else{
        console.log(arr[i])
    }
}

//EXERCICIO 04

let mult = [1,2,3,4,5];
for(let i= 0;i<mult.length;i++){
    console.log(mult[i]*2)
}

//BONUS

function soma(a, b) {
    return new Promise((resolve, reject) => {
    const resultado = a + b
    if(resultado % 2 == 0){
        resolve(resultado)
    }else{
        reject("Não é par")
    }

    })
}

soma(7, 9)
    .then((resultado) => {console.log(resultado)})
    .catch((erro) => {console.log(erro)})