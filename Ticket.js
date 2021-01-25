class Ticket{
    constructor(){
        this.ticketId="NA";
        this.entryTime="NA";
        this.exitTime="NA";
        this.slotId="NA";
    }
    setTicketId(ticketId){
        this.ticketId=ticketId;
    }
    setEntryTime(entryTime){
        this.entryTime=entryTime;
    }
    setExitTime(exitTime){
        this.exitTime=exitTime;
    }
    setSlotId(slotId){
        this.slotId=slotId;
    }

    getTicketId(){
        return this.ticketId;
    }
    getEntryTime(){
        return this.entryTime;
    }
    getExitTime(){
        return this.exitTime;
    }
    getSlotId(){
        return this.slotId;
    }

}

module.exports=Ticket;