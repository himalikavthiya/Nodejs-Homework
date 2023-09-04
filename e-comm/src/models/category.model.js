const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        trim: true
    },
    category_des: {
        type: String,
        trim: true
    },
    modified_at:{
        type:Date,
        default:Date.now
    },
    created:{
        type:Date,
        default:Date.now
    },
    is_active: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true

});

const Category = mongoose.model("category", categorySchema)

module.exports = Category;