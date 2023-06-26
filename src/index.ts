/**
 * 
 * Iniciar el servidor
 * 
 */

import app from './app'



const puerto = 3000

app.listen(
    puerto,
    ()=>{
        console.log(`Puerto ${puerto}, servidor arriba`)
    }
)