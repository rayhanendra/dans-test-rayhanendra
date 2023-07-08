import api from './api';

class JobServices {
  getJobs({
    page,
    description = '',
    location = '',
    full_time = false,
  }: {
    page: number;
    description?: string;
    location?: string;
    full_time?: boolean;
  }) {
    return api.get(
      '/recruitment/positions.json?page=' +
        page +
        '&description=' +
        description +
        '&location=' +
        location +
        '&full_time=' +
        full_time,
    );
  }

  getJobDetail(id: string) {
    return api.get('/recruitment/positions/' + id);
  }
}

export default new JobServices();
