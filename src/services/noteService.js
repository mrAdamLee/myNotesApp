import axios from 'axios';

export const submitNote = async (noteText) => {

  // ATT: IP CHANGES SO THIS MAY HAVE TO CHANGE
  return await axios.post('http://192.168.1.37:3000/notes', {
    note: { text: noteText }
  });
};

export const listNotes = async () => {
  try {
    const response = await axios.get('http://192.168.1.37:3000/notes');
    return response.data; // Assuming the server returns the list of notes
  } catch (error) {
    console.error(error);
    // Handle or throw error
  }
};