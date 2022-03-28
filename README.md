# Technical Test - Smile&pay

Site avec 2 vues permettant via la première de visualiser/créer/editer/supprimer/trier/rechercher des transactions via un tableau, puis via la seconde de visualiser le total des transactions débiteur/créditeur avec la balance comptable.

Le site est responsive et utilise React coté front end avec les librairies suivante : 
```
React Router, Material table, React Hook Form, Bootstrap, Hightcharts
```

## Version en ligne du site
Une version en ligne du site est disponible à cette adresse :

**[Smile&Pay - technical test](https://transactions-pi.vercel.app/)**

## Installation du projet
Cloner ou télécharger le répo, ensuite via le terminal entrer la commande suivante à partir de la racine du dossier du projet : 

### `npm install`

## Lancement du site

Via le terminal entrer la commande suivante a la racine du dossier du  projet: 

### `npm start`

ou lancer via l'IDE le script :

![image](https://user-images.githubusercontent.com/97733746/160355986-e26c2347-b79c-475e-a585-494e292c2d5d.png)

Patienter que le compilation se termine, le fenetre du site doit s'ouvrir automatiquement.

Sinon utiliser l'url : [http://localhost:3000](http://localhost:3000) pour y accéder via le navigateur

## Fonctionnement du site

### La vue transaction

![image](https://user-images.githubusercontent.com/97733746/160356365-f68463bb-2902-42dc-9ea0-bde38df4bd41.png)

1 - Ajouter une transaction

![image](https://user-images.githubusercontent.com/97733746/160356417-89f430f3-b3ee-4ea0-8c9f-171b9fc0f92b.png)

2 - Editer une transaction existante

![image](https://user-images.githubusercontent.com/97733746/160356442-cafc1851-9cfc-454c-9e12-6358e5523b1c.png)

3 - Supprimer une transaction existante

![image](https://user-images.githubusercontent.com/97733746/160356519-f2b36259-e923-4800-bfdd-9882e98245ba.png)

4 - Trier par colonne

![image](https://user-images.githubusercontent.com/97733746/160356566-795659e0-9589-41d6-bb6a-5088c384a984.png)

5 - Rechercher une transaction existante

![image](https://user-images.githubusercontent.com/97733746/160356584-88191283-b45a-4bd7-a97c-cbc7e89536e3.png)

Une pagination est également présente 

![image](https://user-images.githubusercontent.com/97733746/160356694-6cd7b4cf-ea9e-4da6-a2be-3218b45932d8.png)

On peut également choisir d'afficher plus de 5 transactions :

![image](https://user-images.githubusercontent.com/97733746/160356776-efb15b6f-0893-4573-a856-b87809e6e482.png)

### La vue recapitulatif

![image](https://user-images.githubusercontent.com/97733746/160357030-c64d526a-f849-46e6-8c20-cabfc269d182.png)

Elle affiche dynamiquement les totaux débit/crédit avec le solde comptable.
