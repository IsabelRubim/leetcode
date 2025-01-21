const meetingRoomsII = (intervals) => {
    const starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    const ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);

    let rooms = 0;
    let end = 0;

    for (let i = 0; i < intervals.length; i++) {
        if (starts[i] < ends[end]) {
            rooms++;
        } else {
            end++;
        }
    }

    return rooms;
};

console.log(meetingRoomsII([[7,10],[2,4]]));