const axios = require('axios')

const imgApi = axios.create({
  baseURL: "http://www.splashbase.co/api/v1/images/search?query=woods",
  timeout: 10000
})

class AxiosService{

  async getImage(){
    let photos = await imgApi.get()
    let photo = photos.data.images[0]
    return photo
  }

}

export const axiosService = new AxiosService()