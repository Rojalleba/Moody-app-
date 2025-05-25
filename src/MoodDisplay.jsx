import React from 'react';

function MoodDisplay({ mood }) {
  let emoji = '😐';
  let message = 'How are you feeling today?';

  if (mood === 'happy') {
    emoji = '😄';
    message = 'Keep smiling!';
  } else if (mood === 'sad') {
    emoji = '😢';
    message = 'It’s okay to feel sad.';
  } else if (mood === 'angry') {
    emoji = '😠';
    message = 'Take a deep breath.';
  }

  return (
    <div style={styles.display}>
      <div style={styles.emoji}>{emoji}</div>
      <p style={styles.message}>{message}</p>
    </div>
  );
}

const styles = {
  display: {
    fontSize: '24px',
    marginTop: '20px',
  },
  emoji: {
    fontSize: '60px',
    marginBottom: '10px',
  },
  message: {
    fontSize: '20px',
    color: '#555',
  }
};

export default MoodDisplay;
