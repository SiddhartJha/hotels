const mongoose = require('mongoose');

const menuitemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        reqired: true
    },
    taste: {
        type: String,
        enum: ['sweet','spicy','sour'],
        required: true,
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredient: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0,
    }
})

const menuitem = mongoose.model('menuitem',menuitemSchema);

module.exports = menuitem;