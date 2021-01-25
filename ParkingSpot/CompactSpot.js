const ParkingSpot = require('./ParkingSpot');

class CompactSpot extends ParkingSpot{
    constructor(){
        this.type="Compact Spot";
    }
}

module.exports=CompactSpot