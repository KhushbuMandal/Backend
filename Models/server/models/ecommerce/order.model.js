const mongoose = require ("mongoose")

const orderItemSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    quantity : {
        type : Number,
        required : true,
    }
})

const orderSchema = new mongoose.Schema({
    
    orderPrice : {
        type : Number,
        required : true
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    orderItems : {
        type : [orderItemSchema]
    },
    address : {
        type : String ,
        required : true,
    },
    status : {
        type : String,
        enum : ["PENDING" , "CANCELED" , "DELIVERED"], // enum matlb user is 3 me se hi select kr sakta hai
        default : "PENDING" 
    }
} , {timestamps});

export const Order = mongoose.model("Order" , orderSchema);