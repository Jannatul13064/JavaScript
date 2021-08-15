
//Problem 1 seerToMon
function seerToMon(number) {
    let convert = number / 40;
    return convert;
}
const convertToMon = seerToMon(50);
console.log(convertToMon);

//Problem No 2
function totalSales(shirt, pant, shoes) {
    let shirtPrice = 100;
    let pantPrice = 200;
    let shoesPrice = 500;

    const totalPriceShirt = shirtPrice * shirt;
    const totalPricePant = pantPrice * pant;
    const totalPriceShoes = shoesPrice * shoes;

    const totalProductPrice = totalPriceShirt + totalPricePant + totalPriceShoes;
    return totalProductPrice;
}
const productTotal = totalSales(1, 2, 1);
console.log(productTotal);

//Problem 3 deliveryCost

function deliveryCost(num) {
    let firstHundreadCharge = 100;
    let secondHundreadCharge = 80;
    let thirdHundreadCharge = 50;
    if (num <= 0) {//Extra-Part
        console.log('Please Enter Positive Value');
        return 1;
    }
    else if (num <= 100 && num > 0) {
        let totalFirstPrice = firstHundreadCharge * num;
        return totalFirstPrice;
    }
    else if (num > 100 && num <= 200) {
        let firstPart = firstHundreadCharge * 100;
        let remain = num - 100;
        let secondCharge = remain * secondHundreadCharge;
        let totalSecondPrice = secondCharge + firstPart;
        return totalSecondPrice;
    }
    else {
        let firstPart = firstHundreadCharge * 100;
        let secondPart = secondHundreadCharge * 100;
        let remainThird = num - 200;
        let thirdCharge = remainThird * thirdHundreadCharge;
        let totalThirdPrice = firstPart + secondPart + thirdCharge;
        return totalThirdPrice;
    }

}
const deliveryCharge = deliveryCost(0);
console.log(deliveryCharge);

// Problem-->4
function perfectFriend(friend) {
    if (typeof friend != 'object') {//error case
        return 'please give us array';
    }
    ;
    let calculate = '';
    for (let i = 0; i < bestFriend.length; i++) {
        let positionIndex = bestFriend[i];
        if (positionIndex.length == 5) {
            calculate = positionIndex;
            break;
        }

    }
    return calculate;
}
const bestFriend = ['Akash', 'Badhon', 'Ratul', 'Niloy', 'Shuvo', 'Sithil'];
const output = perfectFriend(bestFriend);
console.log(output);