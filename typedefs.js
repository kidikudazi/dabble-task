const {gql}  = require('apollo-server-express');
const typeDefs =  gql`
	type  Census{
		id: ID
		Country: String

		Year: Int

		Area: Float

		Total_population: Float
	}

	type Query {

		getAllCensus:[Census]

		getCensus(id: ID): Census
	}

	input CensusInput {
		id:ID,
		Country:String,
		Year:Int,
		Area:Float,		
		Total_population:Float
	}
	type Mutation {
		createCensus(census: CensusInput):Census

		updateCensus(id:ID, census: CensusInput):Census

		deleteCensus(id: ID): String
	}
`

module.exports = typeDefs;