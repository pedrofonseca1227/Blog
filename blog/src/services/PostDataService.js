import http from '../http-common.js'

class PostDataService {
    getAll() {
        return http.get("/posts")
    }
}

export default new PostDataService()