import {
    userRouter,
    express
} from "./controller/UserController.js";
import {
    productRouter
} from "./controller/ProductController.js";
import {
    orderRouter
} from "./controller/OrderController.js"
import {
    adminRouter
} from "./controller/AdminController.js"
import {
    customerRouter
} from "./controller/CustomerController.js"
import 'dotenv/config.js'
import cookieParser from "cookie-parser";
import cors from "cors";
import path from 'path'
import {
    errorHandling
} from "./middleware/ErrorHandling.js";

const app = express()
const port = +process.env.POST || 8800

//Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
)
app.get('^/$|/endmoduleproject_connection', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})

app.use(express.static('static'))

app.use('/Users', userRouter)
app.use('/Products', productRouter)
app.use('/Admins', adminRouter)
app.use('/Customers', customerRouter)
app.use('/Orders', orderRouter)
app.use(errorHandling)
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

// console.log();