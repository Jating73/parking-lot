const ParkingFloorStructure = require('./ParkingFloorStructure');

class ParkingFloor{
    constructor(){
        this.floorLevel=null;
        this.floorStructure=null;
        this.floorDetails=null;
    }
    setFloor(floorLevel){
        this.floorLevel=floorLevel;
    }
    setFloorStructure(rows,columns){
        const parkingFloorStructeObject=new ParkingFloorStructure();
        parkingFloorStructeObject.setFloorStructure(rows,columns);
        this.floorStructure=parkingFloorStructeObject.getFloorStructure();
    }
    getFloor(){
        return this.floorLevel;
    }
    getFloorStructure(){
        return this.floorStructure;
    }
    
}

module.exports=ParkingFloor;