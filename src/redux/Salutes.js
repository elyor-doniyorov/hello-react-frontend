const DISPLAY_SALUTES = 'DISPLAY_SALUTES';

const loadSalutes = (json) => ({
  type: DISPLAY_SALUTES,
  json,
});

const saluteReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_SALUTES:
      return action.json.map((salute) => {
        const { id, body } = salute;
        return {
          id,
          body,
        };
      });
    default:
      return state;
  }
};

const displaySalutes = () => (dispatch) => {
  fetch('http://localhost:3000/api/v1/salutes/')
    .then((response) => response.json())
    .then((json) => dispatch(loadSalutes(json)));
};

export { loadSalutes, saluteReducer, displaySalutes };