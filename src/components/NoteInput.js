import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../styles/styles';
import { submitNote } from '../services/noteService';

const NoteInput = () => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = async () => {
    console.log("Submit button pressed"); // For debugging
    try {
      const response = await submitNote(noteText);
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

export default NoteInput;