import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { listNotes } from '../services/noteService';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await listNotes();
      setNotes(fetchedNotes);
    };

    fetchNotes();
  }, []);

  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

export default NoteList;