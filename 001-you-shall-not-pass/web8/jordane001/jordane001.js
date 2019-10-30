import templateString from './jordane001.html';

export const jordane001 = () => {
  document.body.innerHTML = templateString;

  /** ******** STUDENT CODE ********* */
  var motDePasse = document.getElementById('password');
  var container = document.getElementById('container');
  var btn = document.getElementById('submitBtn');

  btn.addEventListener('click', function () {
    if (motDePasse.value === 't0t0t1t1') {
      container.innerText = 'Merci, vous allez être redirigé...';
    } else {
      container.innerText = "Sorry, vous n'êtes pas assez cool pour Toto et Titi...";
    }
  });
  /** ****************************** */
};
