import React from "react";
import {StyleSheet, TouchableHighlight, Text, View} from "react-native";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e7e7e7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
    },
    text: {
        fontSize: 20,
        fontWeight: "500"
    },
    doneButton: {
        borderRadius: 5,
        backgroundColor: "#eaeaea",
        padding: 5,
    }
});

class TaskRow extends React.Component {

    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.text}>{this.props.todo.task}</Text>
              <TouchableHighlight
                style={styles.doneButton}
                onPress={() => this.props.onDone(this.props.todo)}
              >
                  <Text>Done</Text>
              </TouchableHighlight>
          </View>
        );
    }

}

TaskRow.propTypes = {
    onDone: PropTypes.func.isRequired,
    todo: PropTypes.shape({
        task: PropTypes.string.isRequired,
    }).isRequired,
};

export default TaskRow;