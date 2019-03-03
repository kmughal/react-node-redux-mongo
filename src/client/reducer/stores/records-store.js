import * as actions from "../../actions";

export const records = (state = {},
  action) => {

  switch (action.type) {
    case actions.ADD_NEW_TASK:
      return state;
    case actions.NEW_TASK_CREATED:
      return {
        id: action.id,
        name: action.name,
        tasks: action.tasks
      };
  }

  return state;
}