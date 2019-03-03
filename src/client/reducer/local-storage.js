const REDUX_STATE = "REDUX_STATE";
export const saveState = state => {
  try {
    const stateInString = JSON.stringify(state);
    localStorage.setItem(REDUX_STATE,stateInString);
  }catch(err) {
    // ignore.
  }
}

export const getState = () => {
  try {
    const stateInString = localStorage.getItem(REDUX_STATE);
    const result = JSON.parse(stateInString);
    return result;
  }catch(err) {
    return undefined;
  }
}