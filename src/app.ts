
import express,{Application, Request, Response, NextFunction} from 'express'
import rutas_ejemplo from './routes/rutas_ejemplo'

const app:Application = express()



app.use('/', rutas_ejemplo)


/**
 * 
 * Respuesta cuando la ruta no exista
 * 
 */

app.use(
    (req:Request, res:Response,next:NextFunction)=>{
        res.status(404)
        res.json({message:"Ups, el recurso no existe"})
    }
)

/**
 * 
 * Respuesta de error 
 * 
 */

app.use(
    (error:Error, req:Request, res:Response,next:NextFunction)=>{
        res.status(500)
        console.log(error)
        res.json({message:"Houston, tenemos un problema"})
    }
)

export default app


