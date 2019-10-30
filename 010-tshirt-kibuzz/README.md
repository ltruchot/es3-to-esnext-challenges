## Les T-shirts qui buzzent

Notre entreprise, KIBUZZ.com, a décidé de vendre des t-shirts tendances aux internautes les plus fashions, à l'adresse t-shirt.kibuzz.com.


1. Comment réserver ce nom de domaine, à quel prix ? Puis-je créer ce sous domaine si je le veux ? 
2. Mettre les t-shirts donnés à la fin de cette consigne dans un fichier tshirts.json, faire un "GET" sur le fichier avec axios ou fetch
3. Présenter tous ces t-shirts (leurs infos et images) dans une seule page web responsive
3. Ne pas présenter de doublons (même productId ET même gender === doublon)
4. Ajouter des filtres dans un header
    - select pour filtrer par "size" avec les tailles XS, S, M, L, XL
        - bonus: les tailles dans le select sont proposées en fonction des t-shirt existants
    - select par "gender"
        - bonus: idem
    - select par "category"
        - bonus: idem
    - champ libre de prix maximum
5. A chaque action utilisateurs sur un de ces filtres, les t-shirt affichés changent selon le nouveau filtre (+ les précédents)
7. Ajouter 2 boutons pour classer par tailles et/ou prix croissants ou décroissants les t-shirts
6. Bonus: ajouter un formulaire de création de t-shirt, avec le meme type de data, dont une url d'image choisie. Lorsque ce formulaire est validé, le t-shirt créé s'ajoute à la collection. L'image présentée pour ce t-shirt est un t-shirt blanc avec l'image choisie centrée dessus. 

## Les t-shirts
```json
{
  "t-shirts": [
    {
      "productId": 0,
      "price": 11,
      "size": "XS",
      "gender": "F",
      "imageUrl": "https://lerageshirts.com/wp-content/uploads/2013/10/yao-ming-meme-tee-shirt-bitch-please.jpg",
      "category": "meme"
    },
    {
      "productId": 0,
      "price": 11,
      "size": "XS",
      "gender": "M",
      "imageUrl": "https://lerageshirts.com/wp-content/uploads/2013/10/yao-ming-meme-tee-shirt-bitch-please.jpg",
      "category": "meme"
    },
    {
      "productId": 0,
      "price": 11,
      "size": "S",
      "gender": "F",
      "imageUrl": "https://lerageshirts.com/wp-content/uploads/2013/10/yao-ming-meme-tee-shirt-bitch-please.jpg",
      "category": "meme"
    },
    {
      "productId": 0,
      "price": 11,
      "size": "M",
      "gender": "F",
      "imageUrl": "https://lerageshirts.com/wp-content/uploads/2013/10/yao-ming-meme-tee-shirt-bitch-please.jpg",
      "category": "meme"
    },
    {
      "productId": 0,
      "price": 11,
      "size": "M",
      "gender": "M",
      "imageUrl": "https://lerageshirts.com/wp-content/uploads/2013/10/yao-ming-meme-tee-shirt-bitch-please.jpg",
      "category": "meme"
    },
    {
      "productId": 0,
      "price": 11,
      "size": "L",
      "gender": "F",
      "imageUrl": "https://lerageshirts.com/wp-content/uploads/2013/10/yao-ming-meme-tee-shirt-bitch-please.jpg",
      "category": "meme"
    },
    {
      "productId": 0,
      "price": 11,
      "size": "XL",
      "gender": "M",
      "imageUrl": "https://lerageshirts.com/wp-content/uploads/2013/10/yao-ming-meme-tee-shirt-bitch-please.jpg",
      "category": "meme"
    },
    {
      "productId": 1,
      "price": 13,
      "size": "XS",
      "gender": "F",
      "imageUrl": "http://medritemidtownwest.com/wp-content/uploads/2019/02/t-shirt-memes-1.jpg",
      "category": "meme"
    },
    {
      "productId": 1,
      "price": 13,
      "size": "XS",
      "gender": "F",
      "imageUrl": "http://medritemidtownwest.com/wp-content/uploads/2019/02/t-shirt-memes-1.jpg",
      "category": "meme"
    },
    {
      "productId": 1,
      "price": 13,
      "size": "S",
      "gender": "M",
      "imageUrl": "http://medritemidtownwest.com/wp-content/uploads/2019/02/t-shirt-memes-1.jpg",
      "category": "meme"
    },
    {
      "productId": 1,
      "price": 13,
      "size": "S",
      "gender": "M",
      "imageUrl": "http://medritemidtownwest.com/wp-content/uploads/2019/02/t-shirt-memes-1.jpg",
      "category": "meme"
    },
    {
      "productId": 1,
      "price": 13,
      "size": "S",
      "gender": "M",
      "imageUrl": "http://medritemidtownwest.com/wp-content/uploads/2019/02/t-shirt-memes-1.jpg",
      "category": "meme"
    },
    {
      "productId": 1,
      "price": 13,
      "size": "S",
      "gender": "F",
      "imageUrl": "http://medritemidtownwest.com/wp-content/uploads/2019/02/t-shirt-memes-1.jpg",
      "category": "meme"
    },
    {
      "productId": 1,
      "price": 13,
      "size": "L",
      "gender": "F",
      "imageUrl": "http://medritemidtownwest.com/wp-content/uploads/2019/02/t-shirt-memes-1.jpg",
      "category": "meme"
    },
    {
      "productId": 1,
      "price": 13,
      "size": "L",
      "gender": "M",
      "imageUrl": "http://medritemidtownwest.com/wp-content/uploads/2019/02/t-shirt-memes-1.jpg",
      "category": "meme"
    },
    {
      "productId": 1,
      "price": 13,
      "size": "XL",
      "gender": "F",
      "imageUrl": "http://medritemidtownwest.com/wp-content/uploads/2019/02/t-shirt-memes-1.jpg",
      "category": "meme"
    },
    {
      "productId": 2,
      "price": 9,
      "size": "XS",
      "gender": "F",
      "imageUrl": "https://rsz.tzy.li/816/918/tzy/previews/images/699/467/115/original/funny-javascript-eat-sleep-code-repeat-function-tshirt.jpg",
      "category": "geek"
    },
    {
      "productId": 2,
      "price": 9,
      "size": "XS",
      "gender": "F",
      "imageUrl": "https://rsz.tzy.li/816/918/tzy/previews/images/699/467/115/original/funny-javascript-eat-sleep-code-repeat-function-tshirt.jpg",
      "category": "geek"
    },
    {
      "productId": 2,
      "price": 9,
      "size": "S",
      "gender": "M",
      "imageUrl": "https://rsz.tzy.li/816/918/tzy/previews/images/699/467/115/original/funny-javascript-eat-sleep-code-repeat-function-tshirt.jpg",
      "category": "geek"
    },
    {
      "productId": 2,
      "price": 9,
      "size": "S",
      "gender": "M",
      "imageUrl": "https://rsz.tzy.li/816/918/tzy/previews/images/699/467/115/original/funny-javascript-eat-sleep-code-repeat-function-tshirt.jpg",
      "category": "geek"
    },
    {
      "productId": 2,
      "price": 9,
      "size": "S",
      "gender": "M",
      "imageUrl": "https://rsz.tzy.li/816/918/tzy/previews/images/699/467/115/original/funny-javascript-eat-sleep-code-repeat-function-tshirt.jpg",
      "category": "geek"
    },
    {
      "productId": 2,
      "price": 9,
      "size": "S",
      "gender": "F",
      "imageUrl": "https://rsz.tzy.li/816/918/tzy/previews/images/699/467/115/original/funny-javascript-eat-sleep-code-repeat-function-tshirt.jpg",
      "category": "geek"
    },
    {
      "productId": 2,
      "price": 9,
      "size": "L",
      "gender": "F",
      "imageUrl": "https://rsz.tzy.li/816/918/tzy/previews/images/699/467/115/original/funny-javascript-eat-sleep-code-repeat-function-tshirt.jpg",
      "category": "geek"
    },
    {
      "productId": 2,
      "price": 9,
      "size": "L",
      "gender": "M",
      "imageUrl": "https://rsz.tzy.li/816/918/tzy/previews/images/699/467/115/original/funny-javascript-eat-sleep-code-repeat-function-tshirt.jpg",
      "category": "geek"
    },
    {
      "productId": 2,
      "price": 9,
      "size": "XL",
      "gender": "F",
      "imageUrl": "https://rsz.tzy.li/816/918/tzy/previews/images/699/467/115/original/funny-javascript-eat-sleep-code-repeat-function-tshirt.jpg",
      "category": "geek"
    }
  ]
}
```