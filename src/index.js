import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './db/index.db.js'

dotenv.config({path:'./env'})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log('app is not working',error)
})