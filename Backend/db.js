const mongoose=require('mongoose');

const connect=async()=>{
    const MONGO_URI=process.env.MONGO_URI
    try {
        mongoose.connect(`mongodb://${MONGO_URI}/login_app`)
        .then(()=>{
            console.log('db connected');
        })
    } catch (error) {
        console.log('Db error : ',error);
        
    }
}

module.exports=connect