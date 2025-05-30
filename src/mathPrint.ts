export function matrixPrint(matrix: number[][]) {
  let shape = [matrix.length, matrix[0].length];
  function getColumn(mat: number[][], i: number) {
    return mat.map((row) => row[i]);
  }
  let columnMaxLengths: number[] = [];
  for (let i = 0; i < shape[1]; i++) {
    const columnLenghts = getColumn(matrix, i).map((n) => n.toString().length);
    const maxColumnLength = Math.max(...columnLenghts);
    columnMaxLengths.push(maxColumnLength);
  }

  matrix.forEach((row) => {
    console.log.apply(
      null,
      row.map((val, j) => {
        return (
          new Array(columnMaxLengths[j] - val.toString().length + 1).join(" ") +
          val.toString() +
          "  "
        );
      })
    );
  });
}
