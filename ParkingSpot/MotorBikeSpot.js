const ParkingSpot = require('./ParkingSpot');

class MotorbikeSpot extends ParkingSpot{
    constructor(){
        this.type="Motorbike Spot";
    }
}

module.exports=MotorbikeSpot