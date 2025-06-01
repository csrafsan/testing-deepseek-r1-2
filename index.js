import axios from 'axios';

async function main() {
  try {
    const response = await axios.post('http://localhost:11434/api/chat', {
      model: 'deepseek-r1:1.5b',
      messages: [
        { role: 'system', content: 'You are a helpful coding assistant.' },
        { role: 'user', content: 'Write a Python function to reverse a string.' }
      ],
      stream: false
    });

    console.log(response.data.message.content);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

main();
