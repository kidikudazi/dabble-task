const Census  =  require('./models/Census.model');

const resolvers =  {
	Query:{
		getAllCensus: async()=>{
			return await Census.find()
		},

		getCensus: async (_parent, {id}, _context, _info)=>{
			return await Census.findById(id);
		}
	},
	Mutation:{
		createCensus: async (parent, args, context, info)=>{
			const {Country, Year, Area, Total_population}  = args.census
			const census =  new Census({Country, Year, Area, Total_population});
			await census.save();
			return census;
		},

		deleteCensus: async (parent, args, context, info)=>{
			const {id} = args;
			let checkRecord = await Census.findById(id);

			if(checkRecord == null){
				return "No record found.";
			}
			
			await Census.findByIdAndDelete(id);
			return "Ok, Census deleted";
		},

		updateCensus: async (parent, args, context, info)=>{
			const {id} =  args;
			const {Country, Year, Area, Total_population} = args.census
			const updateObj =  {};
			
			if(Country!= undefined){
				updateObj.Country =  Country; 
			}

			if(Year!= undefined){
				updateObj.Year =  Year; 
			}

			if(Area!= undefined){
				updateObj.Area =  Area; 
			}

			if(Total_population!= undefined){
				updateObj.Total_population =  Total_population; 
			}

			const census =  await Census.findByIdAndUpdate(id, updateObj, {new:true});

			return census;

		}
	}
}


module.exports =  resolvers;