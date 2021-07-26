// importing dependencies
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import session from 'express-session'
import cookieParser from 'cookie-parser'
// importing routes
import user from './routes/user.route.js'
import page from './routes/page.route.js'
import MongoStore from 'connect-mongodb-session'
// app config
dotenv.config()
const PORT = process.env.PORT || 4000//
const app = express()

// connecting to database
mongoose.connect(process.env.DATABASE_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> 
    console.log('connected to MongoDb') )
.catch(err =>{
    console.log(err.message)
})


// middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

const MongoDBSession = (MongoStore)(session)
//
const store = new MongoDBSession({
    uri: process.env.DATABASE_URI, collection: 'userSession'
})

app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: store
    })
)
app.set('view engine', 'ejs')
app.use('/user', user)
app.use('/', page)
// bootstrap (css, js and jquery) middlewares
app.use('/css', express.static('node_modules/bootstrap/dist/css'))
app.use('/js', express.static('node_modules/bootstrap/dist/js'))
app.use('/js', express.static('node_modules/jquery/dist'))
// mdbootstrap (css, js) middle ware
app.use('/mdb/css', express.static('node_modules/mdbootstrap/css'))
app.use('/mdb/js', express.static('node_modules/mdbootstrap/js'))

app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`)
})


