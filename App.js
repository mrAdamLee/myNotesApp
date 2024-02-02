import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import NoteInput from './src/components/NoteInput';
import NoteList from './src/components/NoteList';
const App = () => {
  return <NoteList />; 
  
};


export default App;