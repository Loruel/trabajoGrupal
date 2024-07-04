import fs from 'node:fs/promises'
import path from 'node:path'
import { pool } from './db.js'
import { request } from 'node:http'

export const index = async(request, response) => {
    try {
        const ruta = path.resolve('./public/main.html') 
        const data = await fs.readFile(ruta, 'utf-8')
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        response.end(data)
    } catch (error) {
        console.error('Error al leer el archivo', error)
        response.writeHead(500, {'Content-Type': 'text/plain;'})
        response.end('Error en el servidor')
    }
}

export const mostrar = async(request, response) => {
    try {
        const empleados = await pool.query("SELECT * FROM usuarios")
        response.writeHead(200, {'Content-Typ': 'application/JSON; charset=utf-8'})
        response.end(JSON.stringify(empleados[0]))
        
    } catch (error) {
        console.error('Error al leer el archivo', error)
        response.writeHead(500, {'Content-Type': 'text/plain;'})
        response.end(JSON.stringify({message:'Error en el servidor'}))
    }
}