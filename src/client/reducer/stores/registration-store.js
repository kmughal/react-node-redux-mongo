import * as actions from "../../actions"
console.log(actions);

export const registerNewUser = (state = {
    registered: null
  },
  action) => {
  switch(action.type) {
    case actions.USER_REGISTERED_SUCCESSFULLY :
    return {
      registered : true,
      name: action.name
    };
    case actions.REQUEST_TO_REGISTER_DECLINED :
    return {
      registered : false
    };
  }
  return state;
}