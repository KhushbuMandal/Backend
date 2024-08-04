const mongoose = require ("mongoose")

const productSchema = new mongoose.Schema(
    {
        description : {
            type : String,
            required : true
        },
        name : {
            required : true,
            type : String
        },
        productImage : {
            type : String,
        },
        price : {
            type : Number,
            default: 0
        },
        stock : {
            default: 0,
            type : Number
        },
        category : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Category",
            required : true
        },
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
        }
    } , 
    {timestamps}
);

export const Product = mongoose.model("Product" , productSchema);