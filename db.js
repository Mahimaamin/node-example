const moongose=require ('mongoose');
moongose.connect('mongodb+srv://mahima21cs048:mahima55@cluster0.es6qjib.mongodb.net/?retryWrites=true&w=majority',
{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}
)
.then((response)=>{
    console.log("connected to database");

})
.catch((error) => {

    console.log(error);
});