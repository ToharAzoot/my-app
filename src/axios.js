import axios from 'axios';

const instance=axios.create({baseURL:"http://localhost:61244/api/"})
export default instance 