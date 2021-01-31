import axios from "axios";

export default {
    definitions: function (word) {
        const options = {
            method: 'GET',
            url: 'https://lingua-robot.p.rapidapi.com/language/v1/entries/en/' + word,
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_APIKEY,
              'x-rapidapi-host': 'lingua-robot.p.rapidapi.com'
            }
          };
          
         return axios.request(options)
      }
}