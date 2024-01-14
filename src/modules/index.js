const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
    task:{
        type: String,
    },
    status:{
        type: String,
    },
    date:{
        type: Date,
    },
    time:{
        type: TimeRanges,
    }
});

exports = mongoose.Model("TodoSchema", TodoSchema);