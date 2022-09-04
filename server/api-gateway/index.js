const fastapi=require('fast-gateway');

require('dotenv').config();





const port =9000;
const server = fastapi({
    //middlewares:[authentication],
    routes: [
    {
        prefix: '/Authentication',
        target: 'http://localhost:8001',
        //methods:['POST','GET']
        //middlewares:[authentication],
        hooks:{}
      },
      {
        prefix: '/Songs',
        target: 'http://localhost:8002',
        hooks:{}
      },
      {
        prefix: '/Artist',
        target: 'http://localhost:8003',
        hooks:{}
      }
]
  })
  
  
  server.get('/test',(req,res)=>res.send('we called fastapi'));
  server.start(port).then(server=>console.log(`fastapi is running at ${port}`)).catch(error=>console.log(error))