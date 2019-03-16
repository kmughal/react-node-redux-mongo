import {
  mapStateToProps
} from "../task-input-panel";
import React from "react" ;
import renderer from "react-test-renderer";
import {TasksViewComponent} from "../tasks-view";

describe("The task input panel component.", () => {
  describe("mapStateToProps", () => {
    it("Should map states to props correctly", () => {
      const tasks = {
        tasks: [{
          task: "TODO"
        }]
      };
      const appState = {
        records: {
          tasks: [{
            task: "TODO"
          }]
        },
        sessions: {}
      };
      const props = {};
      const componentState = mapStateToProps(appState, props);
      expect(componentState).toEqual(tasks);
    })
  });

  describe("TaskInputPanelComponent" , ()=> {
    describe("TasksViewComponent" , ()=> {
      const tasks =  [{
        task: "TODO!"
      }];
      const tree = renderer.create(<TasksViewComponent tasks={tasks}/>);
      expect(tree.toJSON()).toMatchSnapshot();
    })
  })
});