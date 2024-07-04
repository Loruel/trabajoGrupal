import http, { request } from 'node:http'
import { PORT } from './config.js'
import { index, mostrar } from './controller.js'

const server = http.createServer((request, response) =>{
    const url = request.url
    const method = request.method

    if (method === 'GET') {
        switch (url) {
            case '/':
                index(request, response)
                break;
            
            case '/empleados':
                mostrar(request, response)
                break;
        
            default: response.writeHead(404, { "Content-Type": 'text/plain, utf-8'})
                     response.end('No se encontro la ruta GET')
                break;
        }
        
    }
    if (method === 'POST') {
        switch (url) {
            case '/export':
            
                break;
            
            case '/import':
                
                break;
        
            default: response.writeHead(404, { "Content-Type": 'text/plain, utf-8'})
            response.end('No se encontro la ruta POST')
                break;
        }
        
    }

})
server.listen(PORT, () => console.log(`Servidor http://localhost:${PORT}`))