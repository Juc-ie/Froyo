const userInputString = prompt(
  "Enter a list of comma-separated froyo flavors.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const stringArray = userInputString.split(",");

for (let i = 0; i < stringArray.length; i++) {
  console.log(stringArray[i]);
}

console.log(stringArray);

const froyoflavors = {
  vanilla: 3,
  strawberry: 1,
  coffee: 2,
};
console.table(froyoflavors);
