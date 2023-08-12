
let test = "Etudiants info && @ "; 
let chaineVide = "";
for (let i = 0; i < test.length; i++) {
  let paInclus = test[i];
  if ((paInclus >= 'a' && paInclus <= 'z') || (paInclus >= 'A' && paInclus <= 'Z')) {
    chaineVide += paInclus;
  }
}
console.log(chaineVide); 