const {Schema}= require('mongoose');

const HoldingsSchema=new Schema({
    name: {
        type:String,
    },
    qty: {
        type:Number,
    },
    avg: {
        type:Number,
    },
    price: {
        type:Number,
    },
    net: {
        type:String,
    },
    day: {
        type:String,
    },
    isLoss:{
        type:Boolean,
        default:false,
    }
})

module.exports={HoldingsSchema}