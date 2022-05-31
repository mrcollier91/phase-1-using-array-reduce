const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(batteryCounter)
        function batteryCounter(total, num) {
            return total + num
        }

    
