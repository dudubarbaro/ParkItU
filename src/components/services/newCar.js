import api from '/src/components/plugins/api'

class newCarService {
    async saveNewCar(newcar) {
        const response = await api.post('/newcars/', newcar)
        return response.data
    }
}

export default new newCarService()