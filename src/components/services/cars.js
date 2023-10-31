import api from '/src/components/plugins/api.js'

class CarService {
    async getAllCars() {
        const response = await api.get('/cars/')
        return response.data
    }
    async deleteCar(car) {
        const response = await api.delete('/cars/${cars.id}/')
        return response.data
    }
}

export default new CarService()