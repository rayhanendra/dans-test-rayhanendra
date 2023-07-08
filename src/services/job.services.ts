import api from './api';

class JobServices {
  getJobs() {
    return api.get('/recruitment/positions.json?page=1');
  }
}

export default new JobServices();
