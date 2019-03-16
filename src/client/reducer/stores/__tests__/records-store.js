import {
  records
} from "../records-store";
import * as actions from "../../../actions/index"
describe("Records reducers", () => {
  it("should not modify the state for unknown actions.", () => {
    const state = ["fake"];
    const action = {
      type: "FAKE_ACTION",
      tasks : {
        task: "nothing"
      }
    };
    const actual = records(state,action);
    expect(actual).toEqual(state);
  });

})