import axios from 'axios';

const KEY = 'AIzaSyD52eo73ju5a_GVnKxamaRwA3ydawXLvNU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
