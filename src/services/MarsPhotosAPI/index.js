import rp from 'request-promise';

// usually this API key will have been in an env file to protect sensitive data
// but for this exercise, it easier to hard code it to prevent too much setup when downloading the project
const API_KEY = 'YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa';

const RoversType = {
  CURIOSITY: 'curiosity',
  OPPORTUNITY: 'opportunity',
  SPIRIT: 'spirit'
};

const MarsPhotosAPI = {
  getPhotosByRover: function(rover, earthDate) {
    return rp.get({
      uri:
        'https://api.nasa.gov/mars-photos/api/v1/rovers/' +
        rover +
        '/photos?earth_date=' +
        earthDate +
        '&api_key=' +
        API_KEY,
      headers: {},
      json: true
    });
  }
};

export { RoversType, MarsPhotosAPI };
