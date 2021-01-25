class Address{
    constructor(){
        this.city=null;
        this.state=null;
        this.pincode=null;
    }
    setCity(city){
        this.city=city;
    }
    setState(state){
        this.state=state;
    }
    setPincode(pincode){
        this.pincode=pincode;
    }

    getCity(){
        return this.city;
    }
    getState(){
        return this.state;
    }
    getPincode(){
        return this.pincode;
    }
}

module.exports=Address;