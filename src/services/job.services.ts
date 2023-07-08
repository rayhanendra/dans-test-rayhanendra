import api from './api';

class JobServices {
  getJobs(page: number) {
    return api.get('/recruitment/positions.json?page=' + page);
  }

  getJobDetail(id: string) {
    return api.get('/recruitment/positions/' + id);
  }
}

export default new JobServices();
