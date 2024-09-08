function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((sum, purchase) => sum+=purchase, 0);
    total = total * (1 - discount);
    return total;
}

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

console.log(total);