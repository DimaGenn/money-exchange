// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let sum = {};
    if (currency >= 10000) {
        sum = { error: "You are rich, my friend! We don't have so much coins for exchange" };
        return(sum);
    }
    else {
        h = Math.floor(currency / 50);
        currency = currency % 50;

        q = Math.floor(currency / 25);
        currency = currency % 25;

        d = Math.floor(currency / 10);
        currency = currency % 10;

        n = Math.floor(currency / 5);
        currency = currency % 5;

        p = Math.floor(currency);

        if (h > 0) sum.H = h;
        if (q > 0) sum.Q = q;
        if (d > 0) sum.D = d;
        if (n > 0) sum.N = n;
        if (p > 0) sum.P = p;
        return(sum);
    }
}