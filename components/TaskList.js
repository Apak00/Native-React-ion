import React from "react";
import {FlatList, StyleSheet, Text, TouchableHighlight, Switch, View} from 'react-native';
import PropTypes from 'prop-types';
import TaskRow from "./TaskRow";
import store from "../store/ReduxStore";


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#f7f7f7',
        justifyContent: "flex-start",
    },
    button: {
        height: 60,
        borderColor: "#05a1d1",
        borderWidth: 2,
        backgroundColor: "#333",
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: "#fafafa",
        fontWeight: "600",
    },
    toggleRow: {
        flexDirection: "row",
        padding: 10,
    },
    toggleText: {
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 3,
    },

});

class TaskList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: this.props.screenProps,
            filter: "pending"
        };
        store.subscribe(() => {
            this.setState(store.getState());
        });
    }


    keyExtractor = (item, index) => index;

    onAdd(task) {
        if (task !== "") {
            store.dispatch({
                type: "ADD_TODO",
                task,
            });
            this.props.navigation.goBack(null);
        }
    }
    onDone(todo) {
        store.dispatch({
            type: "DONE_TODO",
            todo,
        })
    }
    onToggle() {
        store.dispatch({
            type: "TOGGLE_STATE",
        })
    }

    render() {
        return (
          <View style={styles.container}>
              <View style={styles.toggleRow}>
                  <Switch
                    onValueChange={this.onToggle.bind(this)}
                    style={styles.switch}
                    value={this.state.filter !== "pending"}
                  />
                  <Text
                    style={styles.toggleText}
                  >
                      Showing {this.state.todos.length} {this.state.filter} todos
                  </Text>
              </View>
              <FlatList
                data={this.state.todos}
                keyExtractor={this.keyExtractor}
                extraData={this.state}
                renderItem={({item}) => <TaskRow onDone={this.onDone.bind(this)} todo={item}/>}
              />
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("TaskForm", {
                    onAdd: this.onAdd.bind(this)
                })}
                style={styles.button}>
                  <Text style={styles.buttonText}>
                      Add Todo
                  </Text>
              </TouchableHighlight>
          </View>
        )
    }
}

TaskList.propTypes = {
    screenProps: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default TaskList;