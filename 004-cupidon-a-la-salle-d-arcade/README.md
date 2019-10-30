
Nous travaillons pour un PoC (Proof of Concept) d'application de rencontre, qui sera écrite en JavaScript.
Nous avons une liste d'utilisateurs:
```
var utilisateurs = [
  { prenom: "Étienne", age: 42, sexe: "H" },
  { prenom: "Xan", age: 21, sexe: "F" },
  { prenom: "Fred", age: 32, sexe: "H" },
  { prenom: "Michel", age: 51, sexe: "H" },
  { prenom: "Fred", age: 44, sexe: "F" },
  { prenom: "Mehdi", age: 19, sexe: "H" },
  { prenom: "Sandrine", age: 28, sexe: "F" },
  { prenom: "James", age: 26, sexe: "H" },
  { prenom: "Irina", age: 66, sexe: "F" }
];
```
Pour l'instant on ne peut pas faire grand chose (pas de choix de matching, pas d'orientation sexuelle, pas d'IA, on part sur du basique et petit à petit on augmentera les possibilités).
On souhaite dès la connexion de l’utilisateur lui demander son sexe et son âge dans deux prompts successifs.
On souhaite ensuite lui présenter une liste (ul), dont les éléments (li) sont les personnes du sexe opposé ayant moins de 10 ans de différence d'âge !
Amusez-vous à ajouter des utilisateurs, pour augmenter les chances de cupidon !

BONUS:
Ajouter une prompt dans les questions de départ, pour demander la tolérance de différence d'âge de l'utilisateur (ex: +/- 5ans, au lieu des 10 de départ).
Notre application ne sert pas que pour l'amour, mais aussi pour l'amitié. Ajouter une liste de hobbies pour chaque utilisateur, sous la forme `hobbies: ["tennis", "jeux vidéo", "cuisine"]`.
Afficher la liste de tous les hobbies de tout le monde, sans doublons, séparé par des virgules.
Proposer un bouton cliquable, ouvrant une prompt, proposant un matching par hobbies uniquement. La personne devra entrer son hobby favori, valider, et verra  apparaître la liste de ses amis potentiels, qui ont le même hobby.

Bonne chance