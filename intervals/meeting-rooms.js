const meetingRooms = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);

    let previous = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];

        if (current[0] < previous[1]) {
            return false;
        }
    }

    return true;
}

console.log(meetingRooms([[7,10],[2,4]]));

