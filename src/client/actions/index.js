export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const NEW_TASK_CREATED = "NEW_TASK_CREATED";
export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
export const AUTHORIZATION_FAILED = "AUTHORIZATION_FAILED";
export const AUTHORIZATION_SUCCESSFULLY = "AUTHORIZATION_SUCCESSFULLY";
export const UNKNOWN_ERROR = "UNKNOWN_ERROR";
export const REGISTER_NEW_USER = "REGISTER_NEW_USER";
export const USER_REGISTERED_SUCCESSFULLY = "USER_REGISTERED_SUCCESSFULLY";
export const REQUEST_TO_REGISTER_DECLINED = "REQUEST_TO_REGISTER_DECLINED";

export const authenticateUser = (username,
  password) => ({
  type: AUTHENTICATE_USER,
  username,
  password
});

export const userIsAuthorized = (id, name, tasks) => ({
  type: AUTHORIZATION_SUCCESSFULLY,
  name,
  tasks,
  id
});

export const userIsNotAuthorized = () => ({
  type: AUTHORIZATION_FAILED
});

export const unknownError = () => ({
  type: UNKNOWN_ERROR
});

export const addNewTask = (id, task) => ({
  type: ADD_NEW_TASK,
  id,
  task
});

export const newTaskCreated = (id, name, tasks) => ({
  type: NEW_TASK_CREATED,
  id,
  name,
  tasks
});

export const requestToRegister = (name,password) => ({
  type: REGISTER_NEW_USER,
  name,password
});

export const newUserRegistered =( name, password) => ({
  type : USER_REGISTERED_SUCCESSFULLY,
  name,password
});

export const requestToRegisterNewUserDeclined = () => ({
  type: REQUEST_TO_REGISTER_DECLINED
})