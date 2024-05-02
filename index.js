const jsonServer = require("json-server")
const SneakerStoreServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()
SneakerStoreServer.use(middleware)
SneakerStoreServer.use(router)
const PORT = 4000 || process.env
SneakerStoreServer.listen(PORT,()=>{
    console.log('server running successfully');
})