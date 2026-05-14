import 'dotenv/config'  // add this as first line
import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import { authorApp } from './APIs/AuthorAPI.js'
import { adminApp } from './APIs/AdminAPI.js'
import { commonApp } from './APIs/CommonAPI.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = exp()

const allowedOrigins = [
  'http://localhost:5173',
  process.env.CLIENT_URL,
  process.env.VITE_URL
].filter(Boolean)

app.set('trust proxy', process.env.NODE_ENV === 'production')

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
)

//add cookie parser middleware
app.use(cookieParser())

//body parser middleware
app.use(exp.json())

app.get('/', (req, res) => res.send('Blog API is running'))

//path level middleware
app.use('/user-api', userApp)
app.use('/author-api', authorApp)
app.use('/admin-api', adminApp)
app.use('/auth', commonApp)

//Connect to DB
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL, { family: 4 })
    console.log('DB Connected')
    const port = process.env.PORT
    app.listen(port, () => console.log(`Server listening on ${port}`))
  } catch (err) {
    console.log('Error in DB Connect', err)
  }
}

connectDB()

//to handle invalid path
app.use((req, res, next) => {
  console.log(req.url)
  res.status(404).json({ message: `path ${req.url} is invalid` })
})

//To handle errors
app.use((err, req, res, next) => {
  console.log(err.name)
  console.log(err)
  //ValidationError
  if (err.name === 'ValidationError')
    return res
      .status(400)
      .json({ message: 'Error occured', error: err.message })
  //CastError
  if (err.name === 'CastError')
    return res
      .status(400)
      .json({ message: 'Error occured', error: err.message })
  //Send server side errors
  res.status(500).json({ message: 'Error occured', error: err.message })
})
