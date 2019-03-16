import React from "react";
import {
  TasksViewComponent
} from "../../components/tasks-view";
import * as renderer from "react-test-renderer";

describe("The Task View Component.", () => {
      it("render", () => {
          const tree = renderer.create( < TasksViewComponent tasks = {
              []
            }
            />).toJSON();
            expect(tree).toMatchSnapshot();
          })
      })