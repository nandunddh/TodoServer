const mongoose = require("mongoose");

mongoose.connect(DATA_BASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => {
    console.log("Connection Success");
})
.catch((err) =>{
    console.log(err.message);
})