const ParkingSpot = require('./ParkingSpot');

class LargeSpot extends ParkingSpot{
    constructor(){
        this.type="Large Spot";
    }
}

module.exports=LargeSpot