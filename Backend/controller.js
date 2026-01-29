const user=require('./model')

const signup=async(req,res)=>{
    const{username,email,password}=req.body;
    const newuser=new user({username,email,password});
    await newuser.save();
    res.status(201).json({newuser});
}

const login=async(req,res)=>{
    const{email,password}=req.body;
    const loginuser=await user.findOne({email});
    if(!loginuser){
        return res.status(400).json({error:"User not found"});
    }
    if(loginuser.password!==password){
        return res.status(400).json({error:"Invalid credentials"});
    }
    res.status(201).json({loginuser});
}

const getallusers=async(req,res)=>{
    const users=await user.find();
    res.status(201).json({users});
}
module.exports={signup,login,getallusers}