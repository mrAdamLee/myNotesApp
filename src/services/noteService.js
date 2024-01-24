import axios from 'axios';

export const submitNote = async (noteText) => {
  return await axios.post('http://192.168.86.27:3000/notes', {
    note: { text: noteText }
  });
};

export const listNotes = async () => {
  try {
    const response = await axios.get('http://192.168.86.27:3000/notes');
    return response.data; // Assuming the server returns the list of notes
  } catch (error) {
    console.error(error);
    // Handle or throw error
  }
};