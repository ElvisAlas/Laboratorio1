import Express, { request } from "express";

const empleado = Express();
import { getEmpleado, putEmpledo, postEmpleado, deleteEmpleado } from "../controllers/empleadoscontroller.js";
//import {db} from '../db/conn.js'



empleado.get('', getEmpleado)

empleado.post('', postEmpleado)

empleado.put('/:id', putEmpledo)

empleado.delete('/:id', deleteEmpleado)

export { empleado }