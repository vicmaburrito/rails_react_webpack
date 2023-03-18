import { fetchApi } from './api';

const GET_GREETINGS = 'GET_GREETINGS';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';
const GET_GREETINGS_FAILED = 'GET_GREETINGS_FAILED';

export const getGreetings = () => (dispatch) => {
  dispatch({ type: GET_GREETINGS });

  const fetchGreetings = async () => {
    try {
      const greetings = await fetchApi();
      const payload = greetings.map((greeting) => ({
        id: greeting.id,
        message: greeting.message,
        language: greeting.language,
      }));
      dispatch({ type: GET_GREETINGS_SUCCESS, payload });
    } catch (e) {
      dispatch({
        type: GET_GREETINGS_FAILED,
        payload: 'error',
      });
    }
  };
  fetchGreetings();
};

const greetingsState = {
  greetings: [], loading: true, error: null,
};

export const greetingsReducer = (state = greetingsState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return { ...state, loading: true };
    case GET_GREETINGS_SUCCESS:
      return { ...state, loading: false, greetings: action.payload };
    case GET_GREETINGS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
