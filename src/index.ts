import { crudeALS } from "./curde-als";
import { genteleTensorflowJS } from "./gentle-intro-tfjs";
import { tfjsAls } from "./tensorflow-als";

try {
  main();
} catch (err) {
  console.log(err);
}

async function main() {
  await tfjsAls();

  // await genteleTensorflowJS();

  // crudeALS();
}
