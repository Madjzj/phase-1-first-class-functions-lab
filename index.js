// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(x){
    return function(y){
        return x*y
    }
}
function fareDoubler(x){
    const doubleFunction = createFareMultiplier(x)
    return doubleFunction(2)
}
function fareTripler(x){
    const doubleFunction = createFareMultiplier(x)
    return doubleFunction(3)
}
function selectDifferentDrivers(drivers,side){
    return side(drivers)
}
