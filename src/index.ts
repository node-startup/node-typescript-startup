import Koa from 'koa'
import Router from '@koa/router'

// Instantiate
const app = new Koa()
const router = new Router()

// Routes
router.all('/', async ctx=>{
  ctx.body = `<h1>Hello World</h1>`
})

// Middlewares
app.use(router.routes()).use(router.allowedMethods())

// Listen
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log( `server running at ${PORT}` ))
