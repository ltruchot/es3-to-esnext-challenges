# Harder - Better - Stronger

Faire une app musicale sur l'air de Daft Punk - Harder, Better, Faster, Stronger

- Récuperer les [samples](https://github.com/ltruchot/es3-to-esnext-challenges/blob/master/012-harder-better-stonger/all_samples.zip) dans ce repo

Le code suivant apparaît au début de votre body, pour contourner les restrictions de lecture auto.

```html
<iframe
  src="silence.mp3"
  allow="autoplay"
  style="width:0; height:0; position:absolute; left:-1px"
></iframe>
```

- Le son "song-instrumental" se lance lorsque votre application se lance
- La souris peut déclencher chaque son en cliquant sur des boutons
```javascript
[
  'work it', 'make it', 'do it', 'makes us',
  'harder', 'better', 'faster', 'stronger',
  'more than', 'hour', 'our', 'never',
  'ever', 'after', 'work is', 'over'
]
```

- chaque son est aussi associé à une touche du clavier
- Faire des boutons stop/start/restart
- Faire un bouton déclenchant 3 sons d'affilés
- Effets disco + mot cliqué qui grossi et fade out
- solution de preloading des samples ?