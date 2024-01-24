const NoteInput = () => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = async () => {
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