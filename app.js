import express from 'express'
import shortenRoute from './routes/urlRoutes.js';
import userRoute from './routes/userRoutes.js'

const app = express();

app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use("/url",shortenRoute)
app.use('/auth',userRoute)


export default app
