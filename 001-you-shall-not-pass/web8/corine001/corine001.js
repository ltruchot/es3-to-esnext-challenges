export const corine001 = () => {
  var pass = '';
  while (pass !== 't0t0t1t1') {
    alert('Le mot de passe est invalide');
    pass = prompt('Veuillez réessayer ! Tapez un mot de passe');
  }

  alert('vous êtes autorisé à utiliser le site');
};
