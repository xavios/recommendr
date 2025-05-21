import * as dfd from "danfojs-node";
const tensorflow = dfd.tensorflow;

const userProductsTensor = tensorflow.tensor2d([
  [0.5, "?", 4],
  [1, 3, 5],
]);

const df = new dfd.DataFrame(userProductsTensor, {
  columns: ["Product1", "Product2", "Product3"],
});

const productCnt = df.columns.length;
const userCnt = df.index.length;

const userArr: Array<number> = [];
for (let i = 0; i < userCnt; i++) {
  userArr.push(1);
}

const userdf = new dfd.DataFrame(userArr);
