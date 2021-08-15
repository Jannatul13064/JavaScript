/// Frist 10 mile = per mile*10
/// After that till 20 miles = per mile * 50
/// After that per mile 100

function animal(mile) {
    var animaldensity = 10;
    var secAnimalDensity = 50;
    var thirdAnimalDensity = 100;
    if (mile <= 10) {
        const first = mile * animaldensity;
        return first;
    }
    else if (mile > 10 && mile <= 20) {
        const second = 10 * animaldensity;
        let restmile = mile - 10;
        let secArea = restmile * secAnimalDensity;
        const totalAnimal = second + secArea;
        return totalAnimal;
    }
    else {
        const second = 10 * animaldensity;
        let secArea = 10 * secAnimalDensity;
        const restmile = mile - 20;
        const restDenseAnimal = restmile * thirdAnimalDensity;
        const totalAnimalThird = second + secArea + restDenseAnimal;
        return totalAnimalThird;

    }

}
const animalSaw = animal(21);
console.log(animalSaw);