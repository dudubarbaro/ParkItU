import api from '/src/components/plugins/api'

class newCarService {
    async saveNewCar(newcar) {
        const response = await api.post('/api/cars', newCar)
        return response.data
    }
}

export default new newCarService()