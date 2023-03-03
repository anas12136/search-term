import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 1S1XkSv7c5_fHzUVO01S_Z2OVFdXpRxf5brFhnNgbkk'
        },
        params: {
            query: term,
        }
    });
    console.log(response.data.results);
    return response.data.results;

}
export default searchImages;