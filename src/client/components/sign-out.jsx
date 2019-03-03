import React from "react";

import {saveState} from "../reducer/local-storage";

export const SignOutComponent = () => {
  saveState(null);
  return <p>Your signed out!</p>
}