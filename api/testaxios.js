import axios from 'axios';
import { useReducer } from 'react';

const response = await axios.get('http://localhost:3000/user/?email=ml2226@cornell.edu', {
            })

console.log(response.data)