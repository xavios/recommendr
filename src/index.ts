import { crudeALS } from "./curde-als";
import { genteleTensorflowJS } from "./gentle-intro-tfjs";

try {
  main();
} catch (err) {
  console.log(err);
}

function main() {
  genteleTensorflowJS();
  // crudeALS();
}
