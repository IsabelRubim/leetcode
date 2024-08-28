/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

var timeRequiredToBuy = function(tickets, k) {
    // 1 - check if tickets is greater then 0 
    // 2 - add time each while
    // 3 - drement tickets each while
    // 4 - check if tickets in position of k is equal 0

    let time = 0;
    let count = 0;
    let n = tickets.length;

    while (tickets[k] > 0) {
        if (tickets[count] > 0) {
            tickets[count]--;
            time++;
        }

        if (tickets[k] === 0) {
            break;
        };

        count = (count + 1 ) % n;
    }

    return time;
};