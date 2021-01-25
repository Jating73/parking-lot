class ParkingFloorStructure{
    constructor(){
        this.rows=new Array(2);
        for(var i=0;i<this.rows.length;i++){
            this.rows[i]=new Array(2);
        }
        this.totalSlots=2*2;
        this.k=0;
        for (var i = 0; i < this.rows.length; i++) { 
            for (var j = 0; j < this.rows[i].length; j++) { 
                if(this.k<=this.totalSlots){
                    this.k++;
                }
                this.rows[i][j] = {
                    "row":i,
                    "column":j,
                    "type":"X",
                    "slot_number":this.k
                };
            } 
        } 
    }

    setFloorStructure(rows,cols){
        this.rows=new Array(rows);
        for(var i=0;i<this.rows.length;i++){
            this.rows[i]=new Array(cols);
        }
        this.totalSlots=rows*cols;
        this.k=0;
        for (var i = 0; i < this.rows.length; i++) { 
            for (var j = 0; j < this.rows[i].length; j++) { 
                if(this.k<=this.totalSlots){
                    this.k++;
                }
                this.rows[i][j] = {
                    "row":i+1,
                    "column":j+1,
                    "type":"X",
                    "slot_number":this.k
                };  
            } 
        }
    }

    getFloorStructure(){
        return this.rows;
    }
}

module.exports=ParkingFloorStructure;