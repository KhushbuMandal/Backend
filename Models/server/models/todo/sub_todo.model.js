const mongoose = require ("mongoose");

const subTodoSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true
    },
    complete : {
        type : Boolean,
        deafult : false
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    }

} , {timestamps: true})

export const SubTodo =  mongoose.model("SubTodo" , subTodoSchema);