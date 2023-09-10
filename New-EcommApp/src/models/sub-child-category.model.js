const mongoose = require('mongoose')
const subChildCateSchema = new mongoose.Schema({
    subchildcat_name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    subcategory:{
        type:mongoose.Types.ObjectId,
        ref:"subcategory"
    },
    is_active: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

const subChildCate = mongoose.model("subchildcate", subChildCateSchema)

module.exports = subChildCate;