// tady je místo pro náš program
let ctverecek = document.querySelector('.ctverecek');

function zmenBarvu() {
  ctverecek.style.backgroundColor = 'green';
}


document.querySelector("#vysledek").textContent = ' ';

function zobrazVysledek() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  ctverecek.textContent = "Gratulace, právě jsi spustila tuto funkci!";
  ctverecek.style.fontSize = "8px";
}
