import React from 'react';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import {StackNavigator} from "react-navigation";
import store from "./store/ReduxStore";

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    render() {
        return (
          <RootStack screenProps={this.state.todos}/>
        );
    }
}
const RootStack = StackNavigator(
  {
      TaskList: {
          screen: TaskList,
      },
      TaskForm: {
          screen: TaskForm,
      },
  },
  {
      initialRouteName: 'TaskList',
      navigationOptions: {
          title: 'Todo List',
          alignItems: "right",
          textAlign: "right",
          alignContent: "right",
          headerStyle: {
              backgroundColor: '#05a1d1',
          },
          headerTintColor: '#fafafa',
          headerTitleStyle: {
              fontWeight: 'bold',
          },
      },
  }
);



