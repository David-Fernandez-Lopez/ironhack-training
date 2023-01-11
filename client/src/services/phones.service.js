import axios from 'axios'

class PhoneService {

    constructor() {

       
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/phones`
        })

    }

    getAllPhones() {
        return this.api.get(`/`)
    }

    getPhonesById(_id) {
        return this.api.get(`/${_id}`)
    }
    
}

const phoneService = new PhoneService()

export default phoneService