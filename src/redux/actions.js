import axios from 'axios'; // You may need to install axios using npm or yarn.

export const FETCH_RANDOM_GREETING_REQUEST = 'FETCH_RANDOM_GREETING_REQUEST';
export const FETCH_RANDOM_GREETING_SUCCESS = 'FETCH_RANDOM_GREETING_SUCCESS';
export const FETCH_RANDOM_GREETING_FAILURE = 'FETCH_RANDOM_GREETING_FAILURE';

export const fetchRandomGreeting = () => async (dispatch) => {
  dispatch({ type: FETCH_RANDOM_GREETING_REQUEST });

  try {
    const response = await axios.get('your_api_endpoint');

    dispatch({
      type: FETCH_RANDOM_GREETING_SUCCESS,
      payload: response.data, // Assuming your API returns the greeting as 'data'.
    });
  } catch (error) {
    dispatch({
      type: FETCH_RANDOM_GREETING_FAILURE,
      error: 'Failed to fetch greeting',
    });
  }
};
