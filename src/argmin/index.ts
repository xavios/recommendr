export const argMin = (
  constants: number[],
  step = 0.001,
  iterations = 100000
): number => {
  let parameter = 0;
  let goingUp: boolean = false;
  let minimalResult = calculate(constants, parameter);
  while (iterations) {
    switch (goingUp) {
      case true:
        parameter += step;
        break;
      case false:
        parameter -= step;
        break;
    }

    if (calculate(constants, parameter) <= minimalResult) {
      minimalResult = calculate(constants, parameter);
    } else {
      goingUp = !goingUp;
    }

    iterations--;
  }
  return +parameter.toFixed(2);
};

const calculate = (constants: number[], p: number): number => {
  let summ = 0;
  for (let i = 0; i < constants.length; i++) {
    summ += Math.pow(constants[i] - p, 2);
  }
  return summ;
};
