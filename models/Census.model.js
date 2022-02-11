const mongoose =  require('mongoose');

const CensusSchema  =  new mongoose.Schema({
	Country:{
		type:String,
		required:true
	},
	Year:{
		type:Number,
		required:true
	},
	Area:{
		type:Number,
		required:true
	},
	Total_population:{
		type: Number,
		required:true
	}
});


const Census =  mongoose.model('cencus', CensusSchema);

module.exports =  Census;