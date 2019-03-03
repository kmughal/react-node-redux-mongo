import * as actions from "../../actions/index";

export const sessions = (state = {
    authenticated: null
  },
  action) => {
  switch (action.type) {
    case actions.AUTHORIZATION_SUCCESSFULLY:
      return {
        name: action.name,
        tasks: action.tasks,
        authenticated: true,
        id: action.id
      };
    case actions.AUTHORIZATION_FAILED:
      return {
        authenticated: false
      };
  }
  return state;
}