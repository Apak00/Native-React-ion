import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-start",
        paddingTop: 50,
        backgroundColor: "#f7f7f7",
    },
    input: {
        borderWidth: 1,
        borderColor: "#d7d7d7",
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#f7f7f7",
    },
    button: {
        alignSelf: "stretch",
        height: 45,
        backgroundColor: "#05a5d1",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    }
});


class TaskForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        }
    static navigationOptions = {
        title: 'Task Form',
    };
    handleAddClick() {
        this.props.navigation.state.params.onAdd(this.task);
    }
    onChangeText(text) {
        this.task = text;
    }

    render() {
        return (
          //put your JSX
          <View style={styles.container}>
              <TextInput
                placeholder="Task"
                onChangeText={this.onChangeText.bind(this)}
                style={styles.input}
              />
              <TouchableHighlight
                onPress={this.handleAddClick.bind(this)}
                style={styles.button}
              >
                  <Text
                    style={styles.buttonText}
                  >
                      Add
                  </Text>
              </TouchableHighlight>
          </View>
        );
    }
}


export default TaskForm;