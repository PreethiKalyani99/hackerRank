function hackerLandRadioTransmitters(location, transmissionRange){
    let sortedLocation = location.sort((a,b) => a-b)
    let i = 0, transmitterCount = 0
    while (i < sortedLocation.length){
        let houseLocation = sortedLocation[i] + transmissionRange
        while(i < sortedLocation.length && sortedLocation[i] <= houseLocation){
            i++
        }
        i--
        transmitterCount += 1

        houseLocation = sortedLocation[i] + transmissionRange
        while(i < sortedLocation.length && sortedLocation[i] <= houseLocation){
            i++
        }
    }
    return transmitterCount
}
console.log(hackerLandRadioTransmitters([1,2,3,4,5], 1))