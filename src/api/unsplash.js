import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 486UG18DSyi3zO0Zmy_MGH0pvJ3K4ivGTFdD4PreP68'
	}
});
