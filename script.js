// 1 a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());
// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);
//or
//console.log(warmHugs.replace("like", "love"));

// 2a
let beenimpaled = "Oh, look at that. I've Been impaled."

// 2b
//console.log(beenimpaled.slice(18, 36));
//or
console.log(beenimpaled.slice(18));
//or
//console.log(beenimpaled.splice(-18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5

let randomNumber = Math.floor(Math.random()*3 +1)
//or
//let randomNumber = Math.ceil(Math.random()*3);

// Bonus 6
//let go = "Let It Go";
//console.log(go.repeat(2).toUpperCase().repeat(2));
//or
console.log(" Let It Go!".repeat(2).toUpperCase().trim());
//or 
console.log(" Let It Go!".repeat(2).toUpperCase());

// Bonus 7a
let reindeers = "Reindeers are better than people.";

// Bonus 7b
console.log(reindeers.replaceAll(" ","_"));
//or
console.log(reindeers.replace(/ /gi, "_"));
// or
//console.log(reindeers.replace("Reindeers are better than people.", "Reindeers_are_better_than_people."));

// Bonus 8
console.log(Math.sqrt(2));
//or
console.log(Math.SQRT2);

// Bonus 9
let newRandomNumber = Math.floor(Math.random()*(23-7+1)+7);

