const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'carparking'
});

// db.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + db.threadId);
// });

const port = process.env.PORT || 3000;


const main=[];

//Classes required
const ParkingLot = require('./ParkingLot');
const ParkingFloorStructure = require('./ParkingFloorStructure');
const EntryTerminal = require('./Terminal/EntryTerminal');
const ExitTerminal = require('./Terminal/ExitTerminal');
const Ticket = require('./Ticket');

//take vehicle type and number on entry gate and return ticket id
app.post('/parkingservice',(req,res)=>{
  const vehicleType=req.body.vehicleType;
  const vehicleNumber=req.body.vehicleNumber;

  const entryObject=new EntryTerminal();
  const ticket=entryObject.getTicket(vehicleType);

  res.status(201).json({
    message:ticket
  });

});


//take ticketid and generate price
app.get('/parkingservice',(req,res)=>{
  const exitTime= new Date().getTime();

  const {ticketId, entryTime,slotId}=req.body;

  //Database finding row with ticket id and updating exit time then
  const exitObject=new ExitTerminal();
  exitObject.acceptTicket(req.body);

});




//Admin requests
app.post('/createParkingLot',(req,res)=>{
  const name=req.body.name;
  const city=req.body.city;
  const state=req.body.state;
  const pincode=req.body.state;
  const parkingLotObject=new ParkingLot();
  
  parkingLotObject.setName(name);
  parkingLotObject.setAddress(city,state,pincode);
  
  main.push(parkingLotObject);
  
  res.status(201).json({
    message:"Parking Lot Created Successfully!"
  });

});

app.get('/getParkingLotDetails',(req,res)=>{
  res.status(201).json({
    "Parking Lot Details":main
  });
})


app.post('/createFloorStructure',(req,res)=>{
    const rows=req.body.rows;
    const columns=req.body.columns;

    const parkingFloorStructeObject=new ParkingFloorStructure();

    parkingFloorStructeObject.setFloorStructure(rows,columns);

    console.log(parkingFloorStructeObject.getFloorStructure());

    res.send(parkingFloorStructeObject.getFloorStructure());

});


app.post('/markSpot',(req,res)=>{
  
});




app.listen(port, function () {
  console.log(`Server started on port ${port}.`);
});
