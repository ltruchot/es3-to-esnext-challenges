# Hackerflix and chill
## Consignes de base
- utiliser notre [seed parcel](https://github.com/ltruchot/parcel-seed-js-eslint-sass) 
  - `git clone https://github.com/ltruchot/parcel-seed-js-eslint-sass`
  - renommer ce dossier "hackerflix", l'ouvrir avec VSCode, supprimer ".git" à la racine
  - ouvrir un terminal, puis
    - `npm install`
    - `npmi start`
  - ouvrir le navigateur sur http://localhost:1234 
- clean le projet
  - dé-commenter le lien vers bootstrap dans styles.scss
  - supprimer les mentions de jquery et bootstrap dans script.js
  - supprimer le html inutile (mais garder la div#app)
- **interdit de toucher le HTML** durant tout le reste de l'exercice: tout le HTML apparaît dans la div#app !
  
## Description du challenge

### Javascript statique
- Nous proposons un site pour le fan de film à propos du hacking
- utiliser les données présentes dans `movies.js`
  - les exporter depuis un fichier
  - les importer dans votre script.js
- copier le dossiers `posters` dans votre dossier `static`
- tous les "posters imbd" des films sont visibles sur votre page d'accueil dans un grand container en "flex-wrap"
- ATTENTION: certains film n'ont pas de "poster" (leur propriété `img` est alors à `false`). Dans ce cas, un rectangle coloré remplace l'image, et le titre du film est écrit dans ce rectangle

### Javascript dynamique
- cliquer sur un "poster" ouvre une popup: une div centrée, au dessus des élements, en position fixed, invisible au début
- Cette popup affiche toutes les infos disponibles pour le film cliqué
- Cette popup contient un bouton "fermer": cliquer dessus la cache de nouveau
- On peut utiliser cette popup plusieurs fois d'affilé
- Il y a un bouton en haut de site "Recent film only"
- Cliquer dessus cache toutes les jaquettes de film réalisé avant l'an 2000

## Bonus
- WIP
