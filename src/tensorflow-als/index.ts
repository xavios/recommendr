import * as dfd from "danfojs-node";
import { DataFrame } from "danfojs-node/dist/danfojs-base";
import { CsvInputOptionsNode } from "danfojs-node/dist/danfojs-base/shared/types";

export const tfjsAls = async () => {
  const ratingsDf = await dfd.readCSV("./src/tensorflow-als/u.data", {
    delimiter: "\t",
    header: true,
    dtypes: ["int32", "int32", "float32", "int32"],
  } as unknown as CsvInputOptionsNode);

  const getUniqueCount = (column: string, df: DataFrame): number =>
    df[column].nUnique();

  const userCnt = getUniqueCount("user_id", ratingsDf);
  const movieCnt = getUniqueCount("item_id", ratingsDf);
  console.log("user cnt:", userCnt, "movie cnt:", movieCnt);
  // it turned out that DanfoJS does not support at all the plotting in Node :(
};
