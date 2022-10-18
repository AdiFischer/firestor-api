import express from 'express'
import { createCoffee, getAllCoffees } from './scr/coffees.js'

const app = express()
//connect to db in a new file in coffees.js

app.use(express.json())

app.post('/coffees', createCoffee)
app.get('/coffees', getAllCoffees)

app. listen(3030, () => console.log('Listening on http://localhost:3030...'))

