import * as tf from "@tensorflow/tfjs-node";

export const genteleTensorflowJS = () => {
  //   basicCapabilitiesDemo();
  optimizationExample();
};

function optimizationExample() {
  //  f(x) = x⁶+2x⁴+3x²+x+1
  const f = (x: tf.Variable<tf.Rank.R0>) => {
    const f1 = x.pow(tf.scalar(6, "int32"));
    const f2 = x.pow(tf.scalar(4, "int32")).mul(2);
    const f3 = x.pow(tf.scalar(2, "int32")).mul(3);
    const f4 = tf.scalar(1, "int32");
    return f1.add(f2).add(f3).add(x).add(f4);
  };

  const minimize = (
    epochs: number,
    learningRate: number,
    f: (x: tf.Scalar) => tf.Tensor<tf.Rank>
  ): tf.Variable<tf.Rank.R0> => {
    let y = tf.variable(tf.scalar(2));
    const optim = tf.train.adam(learningRate);
    for (let i = 0; i < epochs; i++) {
      optim.minimize(() => f(y) as tf.Scalar);
    }
    return y;
  };

  const minParam = minimize(200, 0.9, f);
  console.log("Parameter, with which it takes a minimal value:");
  minParam.print();
  console.log("the minimal value:");
  f(minParam).print();
}

function basicCapabilitiesDemo() {
  const scalar = tf.scalar(2);
  scalar.print();
  console.log(scalar.shape);

  const first_tensor = tf.tensor([2, 2]);
  first_tensor.print();
  console.log(first_tensor.shape);

  const zeros_tensor = tf.zeros([2, 2]);
  zeros_tensor.print();
  console.log(zeros_tensor.shape);

  const squerable = tf.tensor([1, 2, 3]);
  // tensorflow even allows chaining the different commands
  squerable.square().square().print();
  squerable.dispose();
  // squerable.print(); --> this throws: Error: Tensor is disposed.
  // tidy operator automatically disposes not needed tensors (think about it like GC)
  const tidyDemo = (x: tf.Tensor) => {
    return tf.tidy(() => {
      const y = x.square();
      const z = x.mul(y);
      return z;
    });
  };
  const tidiedResult = tidyDemo(
    tf.tensor([
      [1, 2, 3],
      [4, 5, 6],
    ])
  );
  tidiedResult.print();
}
