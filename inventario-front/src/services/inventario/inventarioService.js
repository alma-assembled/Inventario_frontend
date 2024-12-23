
import { apiClient } from './../apiClient'

const API_URL = 'http://127.0.0.1:5002';
//const API_URL = 'http://192.168.1.200:5002';
//const baseUrl ='http://127.0.0.1:5050/empleados/' 

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}



const fetch_insumos_cantidades = async () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = apiClient.get(`${API_URL}/costos_insumos_almacen/1`,config)
  return request.then(response => response.data)
};

export default {setToken, fetch_insumos_cantidades}