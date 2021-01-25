//Abstract Class having no object of this class
class ParkingSpot{
    constructor(){
        this.reserve="false";
        this.type="Parking Spot"
    }
    assignVehicle(){
        this.reserve="true";
    }
    removeVehicle(){
        this.reserve="false";
    }
}

module.exports=ParkingSpot  