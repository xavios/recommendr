import { argMin } from "./argmin";

const userProductsMatrix = [
  [0.5, null, 4],
  [1, 3, 5],
];
console.log("user-products matrix", userProductsMatrix);

const userMatrix = [1, 1];
const productsMatrix: Array<number | null> = [null, null, null];

for (let iterations = 0; iterations < 30; iterations++) {
  // for (let iterations = 0; iterations < 200; iterations++) {
  for (let i = 0; i < productsMatrix.length; i++) {
    // producst matrix depends on userMatrix and userProducstsMatrix
    // 2 * x = 0.5 és 3 * x = 1.5
    // 0.5 / 2 és 1.5 /3
    let coefficients: number[] = [];
    for (let j = 0; j < userMatrix.length; j++) {
      if (userProductsMatrix[j][i] != null) {
        coefficients.push((userProductsMatrix[j][i] as number) / userMatrix[j]);
      }
    }
    if (coefficients.length != userMatrix.length) {
      productsMatrix[i] = coefficients[0];
    } else {
      productsMatrix[i] = argMin(coefficients);
    }
  }
  // now we need to fix the productsMatrix
  let coefficients: number[][] = [];
  for (let i = 0; i < userMatrix.length; i++) {
    // 0.5 = 0.75 * u és 1 = 0.75 * u
    // 0.5 / 0.75 = u és 1 / 0.75 = u
    for (let j = 0; j < productsMatrix.length; j++) {
      if (userProductsMatrix[i][j] != null) {
        if (coefficients[i] != null) {
          coefficients[i].push(
            (userProductsMatrix[i][j] as number) / (productsMatrix[j] as number)
          );
        } else {
          coefficients[i] = [
            (userProductsMatrix[i][j] as number) /
              (productsMatrix[j] as number),
          ];
        }
      } else {
        if (coefficients[i] === null) {
          coefficients[i] = [userProductsMatrix[i + 1][j] as number];
        } else {
          coefficients[i].push(userProductsMatrix[i + 1][j] as number);
        }
      }
    }
    userMatrix[i] = argMin(coefficients[i]);
  }
}
console.log("products:", productsMatrix);
console.log("users:", userMatrix);
console.log(userProductsMatrix);
