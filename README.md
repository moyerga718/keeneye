# keeneye

A quick'n'dirty Vue app used for our Masked Lands homebrew D&D Campaign. The Keeneyed Scavenger ability requires a lot of dice rolls and calculations. This simplifies things!

Here's the ability description straight from the docs:

### Keen-Eyed Scavenger 
You tinker, and thus you have become skilled in identifying and recycling usable materials from both the environment and the belongings of former adversaries. 

#### *Effect*
Whenever you loot a corpse or succeed on a skill check to search the environment for crafting materials, roll a D20(+Int) to get a value for X. You find (X/5) random materials, minimum 1 up to a total of 4. On crit, receive 5 materials of your choice. 

#### *Types of Materials*
Types of Mechanical Components: Machine Part, Steel, Ignition Source, Precious Metal
Types of Alchemical Ingredients: Natural Compound, Bio Matter, Organic Chemical, Rare Mineral

#### *Determining Random Materials*
Roll a 1d20 for each ingredient found using Keen-Eyed Scavenger:
- 1-3 Machine Part
- 4-6; Steel
- 7-8 Ignition Source
- 9-10 Precious Metal
- 11-13 Natural Compound 
- 14-16 Bio Matter
- 17-18 Organic Chemical
- 19-20 Rare Mineral


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Deployment
Access the deployed version [here](https://keeneye.netlify.app/)!
