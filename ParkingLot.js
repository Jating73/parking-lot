const Address = require("./Address");
const ParkingFloor = require("./ParkingFloor");

class ParkingLot{
        constructor(){
            this.name=null;
            this.address=null;
            this.totalFloors=null;
            this.FloorInfo=new Map();
        }
        setName(name){
            this.name=name;
        }
        setAddress(city,state,pincode){
            const addressObject = new Address()
            addressObject.setCity(city);
            addressObject.setState(state);
            addressObject.setPincode(pincode);
            this.address={
                "City":addressObject.getCity(),
                "State":addressObject.getState(),
                "Pincode":addressObject.getPincode()
            };
        }
        setFloors(totalFloors){
            this.totalFloors=totalFloors;    
        }
        setFloorDetails(floorLevel,rows,columns){
        const parkingFloorObject = new ParkingFloor();
            parkingFloorObject.setFloor(floorLevel);
            parkingFloorObject.setFloorStructure(rows,columns);
            this.FloorInfo.set(parkingFloorObject.getFloor(),parkingFloorObject.getFloorStructure());
        }
        getName(){
            return this.name;
        }
        getAddress(){
            return this.address;
        }  
        getFloors(){
            return this.totalFloors;    
        } 
        getFloorDetails(){
            const parkingFloorObject = new ParkingFloor();
            this.FloorInfo.get(parkingFloorObject.getFloor());
        }
}

module.exports=ParkingLot;

