const { Schema, default: mongoose } = require("mongoose");

const topicSchema=new Schema({
    title:{
        type:String,
    },
    description:String
},{
    timestamps:true
})

const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema);
export default Topic;