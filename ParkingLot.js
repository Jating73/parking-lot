const Address = require("./Address");

class ParkingLot{
        constructor(){
            this.name=null;
            this.address=null;
        }
        addParkingFloor(floors){

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
        getName(){
            return this.name;
        }
        getAddress(){
            return this.address;
        }   
}

module.exports=ParkingLot;

