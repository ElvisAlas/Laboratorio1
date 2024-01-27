
import  express  from "express";

import { empleado } from './routers/apiRRHH.js'

const app = express();

app.use(express.json());

const port = 4000;

app.use('/api/empleados',empleado);

app.listen(port,()=>{
console.log(`escuchando en el puerto ${port}`);
});