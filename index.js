const express=require ('express');
const facultyModel=require('./models/facultyModel')
const app=express();
const PORT=5000;
const faculty=require('./models/facultyModel');
app.use(express.json());
require('./db')

app.post('/faculty',async(req,res)=>{
    try{
   const data=req.body;
    const createdfaculty=new faculty(data)
    await createdfaculty.save();
    res.send("faculty Created");

    }
    catch (error){
    console.log(error);  
    }
});
app.put('/faculty/:id',async(req,res)=>{
    try{
      const facultyId=req.params.id;
      await faculty.updateOne({id:facultyId},{$set:req.body});
      res.send(" faculty updated")

    }catch(error){
        console.log(error);
    }
});
app.delete('/faculty/:id',async(req,res)=>{
    try{
      const facultyId=req.params.id;
      await faculty.deleteOne({id:facultyId},{$set:req.body});
      res.send(" faculty deleated")

    }catch(error){
        console.log(error);
    }
});

app.get('/faculty',async(req,res)=>{
    try{
        const facultyList=await faculty.find();
        res.send("faculty list");

    }catch(error){
        console.log(error);
    }
});


//app.get("/faculties",(req,res)=>{
  //  res.send("Hello from faculties");   
//


    //create a resource
//app.post()

app.listen(PORT,function(){;        
console.log(`Server is running on localhost:${PORT}`);           // app it will access two things function and port
});
