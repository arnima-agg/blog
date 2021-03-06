import axios from 'axios';

export default {
  user: {
    login: credentials =>
      axios.post('/api/auth', { credentials }).then(res => res.data.user),
  },
  blog: {
    getAll: () => axios.get('/api/blog').then(res => res.data),
    getBlog: id => axios.post('/api/blog/' + id, {}).then(res => res.data),
    add: data => axios.post('/api/blog', { data }).then(res => res.data),
    update: data => axios.put('/api/blog', { data }).then(res => res.data),
    delete: id => axios.delete('/api/blog/' + id).then(res => res.data),
  },
};
