const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema(
    {

        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true
        },
        email : {
            type : String,
            reqired : true,
            unique : true,
            lowercase:true,
        },
        password : {
            type : String,
            required : true
        }
    }, {timestamps : true}
)

export const User =  mongoose.model('User' , userSchema);