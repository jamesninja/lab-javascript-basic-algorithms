// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver\'s name is ${hacker1}`);
let hacker2 = "Thomas";
console.log(`The navigator\'s name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length>hacher2.length){
    console.log(hacker1.length)

} else if (hacker2.length>hacher1.length) {
    console.log (hacker2.length)
} else if (hacker1.length===hacher2.length)
    console.log(`Wow, you both have equally long names,${hacker1.length}`)
} else {console.log("invalide")}

// Iteration 3: Loops
let capital = hacker1.toUpperCase; 
console.log(capital); 
console.log("J"+" "+"O"+" "+"H"+" "+"N"); 

const reversed = hacker1.reverse();
console.log(reversed);

hacker1.localeCompare(hacker2);


let nom = [hacker1,hacker2];
nom.sort(function(hacker1, hacker2) {
  return hacker1 - hacker2;
});
console.log(nom);
// [1, 2, 3, 4, 5]



