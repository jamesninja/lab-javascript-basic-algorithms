// Iteration 1: Names and Input
let name = prompt("Donner un un prenom au Pilote:");
let name2 = prompt("Donner un un prenom au Navigateur:");
// Iteration 2: Conditionals
if (name.length > name2.length) {
  console.log(
    `La longeur du prenom de ${name} est la plus grande, ${name.length}`
  );
  // code to execute if condition1 is true
} else if (name2.length > name.length) {
  console.log(
    `La longeur du prenom de ${name2} est la plus grande, ${name2.length}`
  );
  // code to execute if condition2 is true
} else {
  console.log("les prenoms ont la meme longueur");
  // code to execute if condition1  condition2 are false
}

// Iteration 3: Loops
//3.1
console.log(name.toUpperCase());
console.log(name2.toUpperCase());

//3.2
console.log(name.reverse());
console.log(name2.reverse());

//3.3
if (name.localeCompare(name2) = -1) {
  console.log(`Le prenom de ${name} est trié avant, ${name2}`)
  // code to execute if condition1 is true
} else if (name.localeCompare(name2) = 1) {
   console.log(`Le prenom de ${name} est trié apres, ${name2})
  code to execute if condition2 is true
} else if {
  console.log("les prenoms sont egaux")
  // code to execute if condition1  condition2 are false
} 