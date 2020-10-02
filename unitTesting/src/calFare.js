// Function to calculate Taxi Fare
function calculateFare(minDistance,minwait) {
    let fare = 25;
    if(minDistance> 2)
    {
        fare+= (10* (minDistance-2))
    }
    parseInt()
    if(minwait>15)
    {
        fare += 2 * (minwait -15)
    }
    return fare;
}

exports.calculateFare = calculateFare;