const names = ['abul', 'bulbul', 'mokbul', 'sokbul', 'katbul', 'mokbul', 'bulbul'];
function removeDuplicate(names) {
    const unique = [];//Empty box
    // for (let i = 0; i < names.length; i++) {

    //     // const element = names[i];
    //     // console.log(element);
    // }
    for (const element of names) { // for of loop
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }

    }
    return unique;

}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

