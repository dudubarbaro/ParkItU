import api from './src/components/plugins/api.js'

class GarageService {
    async getAllGarages() {
        const response = await api.get('/garages/')
        return response.data
    }
    async saveGarage(garage) {
        const response = await api.post('/garages/', garage)
        return response.data
    }
    async deleteGarage(garage) {
        const response = await api.delete(`/garages/${garage.id}/`)
        return response.data
    }
}

export default new GarageService()