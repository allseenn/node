import NP from 'number-precision';

export default {
calculateResultSum(purchases, discount) {
    let total = purchases.reduce((sum, purchase) => NP.plus(sum, purchase), 0);
    total = NP.times(total, NP.minus(1,discount));
    return total;
}
}
