const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0;

totalBatteries = batteryBatches.reduce((accumulator, element) => element + accumulator, 0)

// totalBatteries = batteryBatches.reduce(function(accumulator, element){ return element + accumulator}, 0)