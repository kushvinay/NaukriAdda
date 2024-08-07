const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


const employeModel = new mongoose.Schema({

    fullname:{
        type:String,
        required:[true,"First name is required"],
        minLenght:[3,"first name should be atleast 3 character long"]
    },
    // lastname:{
    //     type:String,
    //     required:[true,"last name is required"],
    //     minLenght:[3,"last name should be atleast 3 character long"]
    // },
    
    contact:{
        type:String,
        required:[true,"Contact is required"],
        minLenght:[10,"Contact should be atleast 10 character long"],
        maxLenght:[10,"Contact must not exceed 10 character"]

    },
    organisationname:{
        type:String,
        required:[true,"organisationname name is required"],
        minLenght:[1,"organisationname name should be atleast 1 character long"]
    },
    organisationlogo:{
        type:Object,
        default:{
            fileId:'',
            url:"https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
    },
    email:{
        type:String,
        unique:true,
        require:[true,"Email is required"],
    },
    password:{
        type:String,
        select:false,
    },
    passwordResatToken:{
        type:String,
        default:"0"
    },
    internships:[
        { type: mongoose.Schema.Types.ObjectId, ref:"internship"}
    ],
    jobs:[
        { type: mongoose.Schema.Types.ObjectId, ref:"job"}
    ]

},{timestamps:true});

employeModel.pre("save", function(){
    if(!this.isModified("password")){
        return;
    }
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt)
});

employeModel.methods.comparepassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

employeModel.methods.getjwtoken = function (){
    return jwt.sign({id: this.id},process.env.JWT_SECRET ,{
        expiresIn: process.env.JWT_EXPIRE,
    });
};

const employe = mongoose.model("employe",employeModel);

module.exports = employe;