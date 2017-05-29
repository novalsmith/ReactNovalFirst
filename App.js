import React from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';

import List from './List';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    // deklarasi state
    this.state = {
      text: '',
      todos: []
    };
  }

  // Tambah todo
  add = () => {
    // Dapatkan value dari state sekarang
    const { text, todos } = this.state;

    // Jika text kosong, skip
    if (!text) return;

    // Masukkan todo baru ke array
    todos.push(text);

    // Set state baru
    this.setState({
      todos: todos,
      text: ''
    });
  }

  // Hapus todo
  remove = (todo) => {
    const { todos } = this.state;

    // Cari index dari todo
    todoWillDelete = todos.indexOf(todo);

    // Hapus todo
    todos.splice(todoWillDelete, 1);

    // Set state baru
    this.setState({
      todos: todos,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.spacer} />

          <Text>Facebook Circle Sby React Native</Text>

          <View style={styles.spacer} />

          {/* Form input todo */}
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />

            <Button
              title="Execute"
              color="#208de6"
              onPress={this.add}
            />
          </View>

          <View style={styles.spacer} />

          {/* Tampilan todos jika ada */}
          {this.state.todos.length > 0 &&
            <List items={this.state.todos} onRemove={this.remove} />
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  button: {},
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10
  },
  spacer: {
    left: 0,
    right: 0,
    height: 30,
  },
});
