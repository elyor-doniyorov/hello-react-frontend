import apiSalutes from './Api';

const GET_SALUTES = 'hello-react-frontend/salutes/GET_SALUTES';

const initialState = {};

const getSalutes = (payload) => ({
  type: GET_SALUTES,
  payload,
});

export const getSalutesSuccess = () => async (dispatch) => {
  const salutes = await apiSalutes();

  if (salutes) {
    dispatch(getSalutes(salutes));
  }
};

const salutesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SALUTES:
      return {
        ...state,
        body: action.payload,
      };
    default:
      return state;
  }
};

export default salutesReducer;
