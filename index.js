import { userRouter, express} from "./controller/UsersController.js";
import { bookingsRouter } from "./controller/BookingsController.js";
import { roomsRouter } from "./controller/RoomsController.js";
import cookieParser from "cookie-parser";
import { errorHandling } from "./middleware/ErrorHandling.js";
import path from 'path'
import cors from 'cors'
import { config } from "dotenv";
config()
const app = express()
const port = +process.env.PORT || 4000
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credintials", "true");
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
// Router -- where you going , app get from which is the /
app.get('^/$|/endmoduleproject_connection', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})

app.use('/Users', userRouter)
app.use('/Rooms', roomsRouter)
app.use('/Bookings', bookingsRouter)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port https://localhost:${port}`);
})
