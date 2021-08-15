/**wood for,
 * chair = 3 cft
 * table = 10 cft
 * bed = 50 cft
 * total wood ?
 */
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    //wood cal for chair
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuatity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuatity + bedWoodQuantity;
    return totalWood;


}
let allWood = woodCalculator(1, 1, 1);
console.log(allWood);