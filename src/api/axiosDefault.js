import axios from "axios";

axios.defaults.baseURL = 'https://django-rest-framework-andretta-f415d1e4c8be.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
anxios.defaults.withCredentials = true