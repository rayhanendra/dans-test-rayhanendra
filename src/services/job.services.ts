import api from './api';

class JobServices {
  getJobs(page: number) {
    return api.get('/recruitment/positions.json?page=' + page);
  }
}

export default new JobServices();
