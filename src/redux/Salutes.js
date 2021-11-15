const DISPLAY_SALUTES = 'HELLO/DISPLAY_SALUTES';

const loadSalutes = (json) => ({
  type: DISPLAY_SALUTES,
  json,
});

const saluteReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_SALUTES:
      return action.json.map((salute) => {
        const { id, greeting } = salute;
        return {
          id,
          greeting,
        };
      });
    default:
      return state;
  }
};

const displaySalutes = () => (dispatch) => {
  fetch('http://localhost:3000/api/v1/salutes/')
    .then((Response) => Response.json())
    .then((json) => dispatch(loadSalutes(json)));
};

export { loadSalutes, saluteReducer, displaySalutes };
