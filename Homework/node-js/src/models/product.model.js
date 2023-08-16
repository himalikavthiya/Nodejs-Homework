const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        product_name: {
            type: String,
            trim: true
        },
        product_dic: {
            type: String,
            trim: true
        },
        Product_price: {
            type: Number,
            trim: true
        },
        Product_img:{
            type:URL
        },
        is_available: {
            type: Boolean,
            default: true
        }
    }, {
        timestamps: true,
    }
);

const product=mongoose.model("product",productSchema);
module.exports=product;
