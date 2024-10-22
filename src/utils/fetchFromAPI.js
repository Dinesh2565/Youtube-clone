import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
	params: {
    maxResults: 50,
  },
	headers: {
		'x-rapidapi-key': 'c243044e54msh1976634786aab37p1c2dd0jsn4412c07340cc',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export default fetchFromAPI