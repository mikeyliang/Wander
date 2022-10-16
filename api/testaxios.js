import axios from 'axios';
import { useReducer } from 'react';

const response = await axios.get(`http://localhost:3000/trail/?collegeid=ef8f0795-9036-4301-b56f-48995494fcfe`)
  
const json = response.data


const coordinate = []

json.forEach(function(k) {

    const c = []

    k.trailposition.forEach(function(i) {
        const j = {
            "latitude": i.latitude,
            "longitude": i.longitude
        }
        c.push(j)

    })

    coordinate.push(c)



})

console.log(coordinate)