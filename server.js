const express = require('express');
const {ApolloServer, gql}  = require('apollo-server-express');
const typeDefs =  require('./typedefs');
const resolvers =  require('./resolvers');
const mongoose =  require('mongoose');

async function startServer(){
	const app = express();

	const apolloServer =  new ApolloServer({
		typeDefs,
		resolvers
	});

	await apolloServer.start();

	apolloServer.applyMiddleware({app:app});

	app.use((req,res)=>{
		res.send('Dabble Task express apollo server')
	});

	// make mongoose connection
	await mongoose.connect('mongodb://localhost:27017/cenus_db', {
		useUnifiedTopology: true,
		useNewUrlParser:true  
	});
	console.log('mongoose connected.');
	
	app.listen(4000, ()=> console.log('Server is running on port 4000'));
}

startServer();