var B = {};

B.verifyTransaction = function (amount) {
    return Math.random() >= 0.5;
}

module.exports = B;