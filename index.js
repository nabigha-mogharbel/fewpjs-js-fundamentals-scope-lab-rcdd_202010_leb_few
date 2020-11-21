let animal = '';

function myAnimal() {
  animal='dog';
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal='cat';
  return animal;
}
let two=yourAnimal();
let n=myAnimal();
function add2(two, n) {
return ('${n} ${two}');
}
