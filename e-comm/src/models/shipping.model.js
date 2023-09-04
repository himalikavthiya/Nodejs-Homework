const mongoose = require('mongoose')
const shippingSchema = new mongoose.Schema({
    order: {
        type:mongoose.Types.ObjectId,
        ref:"order",
    },
    shipping_address_id: {
        type:mongoose.Types.ObjectId,
        ref: "address"
    },
    shpping_method :{
        type:String,
        trim:true
    },
    status:{
        type:String,
        trim:true
    },
}, {
    timestamps: true

});

const Shipping = mongoose.model("shipping", shippingSchema)

module.exports = Shipping;