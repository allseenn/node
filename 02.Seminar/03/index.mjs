import math from "./calculateResultSum.mjs";
import "colors";

const total = math.calculateResultSum([12.1, 32.2, 43.1], 0.9);

console.log(total>10 ? `${total}`.red : `${total}`.green);