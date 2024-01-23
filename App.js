import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://192.168.86.27:3000/notes', {
        note: { text: noteText }
      });
      console.log(response.data);
      // Handle response or set state
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={noteText}
        onChangeText={setNoteText}
        placeholder="Enter note text"
      />
      <Button title="Submit Note" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;