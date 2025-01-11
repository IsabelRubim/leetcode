const getPhoneBook = (input) => {
    let arr = input.split('\n');

    const number = parseInt(arr[0]);
    const phoneBook = {};
    
    for (let i = 1; i <= number; i++) {
        const [name, phoneNumber] = arr[i].split(' ');
        phoneBook[name] = phoneNumber;
    }
    
    for (let i = number + 1; i < arr.length; i++) {
        const queryName = arr[i];
     
        if (queryName) {
            if (phoneBook[queryName]) {
                    console.log(`${queryName}=${phoneBook[queryName]}`)
            } else {   
                console.log('Not found')
            }
        }
    }
}

const input = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry
`;

getPhoneBook(input);