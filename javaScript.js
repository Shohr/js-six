let string = "qwerty"
let num = 5

console.log(string.repeat(5))

function repeatStr (){
    for(let i = 0; i < num; i++){
            console.log (i+1 + ". " +string)
    }
}
repeatStr ()


function firstUpper(){
    console.log(string.slice(0, 1).toUpperCase() + string.substr(1))
}
firstUpper()



function getCardNum(){
    let result = "8600111122223333"

    if (result.slice(0, 4) === "8600"){
        console.log("this is uzcard")
    } else if(result.slice(0, 4) === "9680") {
        console.log("this is humo")
    } else { 
        console.log("Error")
    }
    
    result.slice(4, 12) === "**** ****"

    console.log(result.slice(0, 4) + " " + result.slice(4, 12) + " " + result.slice(12, 16))
}

getCardNum()

// function getCardNum(){
//     let num1
//     let num2
//     let num3
//     let result 
//     if (num1 = 8600){
//         console.log("this is uzcard")
//     } else if (num1 = 9680){
//         console.log("this is humo")
//     } else {
//         console.log("Error")
//     };
//     if (num2 = 0 >= 99999999){
//         num2 = " **** **** "
//     } else {
//         console.log("Error")
//     };
    
// }