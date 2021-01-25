const ParkingSpot = require('./ParkingSpot');

class HandicappedSpot extends ParkingSpot{
    constructor(){
        this.type="Handicapped Spot";
    }
}

module.exports=HandicappedSpot