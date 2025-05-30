import { argMin } from "./../argmin";
import { matrixPrint } from "./../mathPrint";

export function crudeALS() {
  const userProductsMatrix = [
    [0.5, null, 4],
    [1, 3, 5],
  ];

  let userMatrix = [1, 1];
  let productsMatrix: Array<number | null> = [null, null, null];

  for (let iterations = 0; iterations < 40; iterations++) {
    productsMatrix = calculateProductsMatrix(
      userProductsMatrix,
      userMatrix,
      productsMatrix
    );

    userMatrix = calculateUserMatrix(
      userProductsMatrix,
      userMatrix,
      productsMatrix
    );
  }

  userProductsMatrix[0][1] = userMatrix[0] * (productsMatrix[1] as number);
  console.clear();
  console.log("User - Products matrix after my crude ASL:");
  console.log();
  matrixPrint(userProductsMatrix as number[][]);
}

function calculateUserMatrix(
  userProductsMatrix: (number | null)[][],
  initialUserMatrix: number[],
  productsMatrix: (number | null)[]
) {
  let coefficients: number[][] = [];
  const userMatrix: number[] = [...initialUserMatrix];
  for (let i = 0; i < initialUserMatrix.length; i++) {
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
  return userMatrix;
}

function calculateProductsMatrix(
  userProductsMatrix: (number | null)[][],
  userMatrix: number[],
  initialProductsMatrix: (number | null)[]
) {
  const productsMatrix: number[] = [];
  for (let i = 0; i < initialProductsMatrix.length; i++) {
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
  return productsMatrix;
}
