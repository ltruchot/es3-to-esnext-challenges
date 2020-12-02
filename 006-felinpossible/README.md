# Le défi félinpossible
## Consignes de base
- utiliser notre [seed parcel](https://github.com/ltruchot/parcel-seed-js-eslint-sass) 
  - git clone https://github.com/ltruchot/parcel-seed-js-eslint-sass
  - renommer ce dossier "felinpossible", et supprimer ".git" à la racine
  - cd felinpossible
  - npm install
  - npmi start
  - go http://localhost:1234 
- clean le projet
  - dé-commenter le lien vers bootstrap dans styles.scss
  - supprimer les mentions de jquery et bootstrap dans script.js
  - supprimer le html inutile (mais garder la div#app)
- interdit de toucher le HTML par ailleurs !
  
## Description du challenge

- le site de l'association "Félinpossible" présente une <section> "candichats à adopter": 13 chats : photo, nom, age, sexe, description, etat des vaccin: "a jour" ou "a faire"...
- utiliser les données présentes dans `chats.js`
  - les exporter depuis un fichier
  - les importer dans votre script.js
- tous les chats sont visible sur votre page d'accueil, dans des [cards bootstrap](https://getbootstrap.com/docs/4.5/components/card/)
- chaque cartes a une étoile comme "icône de favori", en haut à droite, cliquable et dé-cliquable (se rempli, se vide)
- Si un chat fait parti de vos favoris, il apparaît désormais dans une nouvelle "section" avec le titre "chavoris" ne contenant que les favoris - on peut revenir en arrière sur notsre choix
- Cet état des favoris est sauvegardé si on recharge la page (localStorage + JSON.strigify/JSON.parse)
- Mettez une "patte" (jeu de mot) artistique à votre oeuvre

## Une belle promesse
- supprimer votre localStorage
- installer [json-server](https://github.com/typicode/json-server)
- passer les données en json
- récupérer les data via ajax
- chaque chat à un hôte qui l'héberge en attendant son adoption
- Inventer un système permettant d'attribuer un "hôte" à chaque chat qui n'en a pas encore
- la notion de favori + les hôtes sont sauvegardés côté serveur...