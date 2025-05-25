import React, { useState } from 'react';
import MoodDisplay from './MoodDisplay';

function MoodApp() {
  const [mood, setMood] = useState('neutral');

  return (
    <div style={styles.container}>
      <h1>Mood Changer App</h1>
      <div style={styles.buttonGroup}>
        <button onClick={() => setMood('happy')} style={styles.button}>Happy</button>
        <button onClick={() => setMood('sad')} style={styles.button}>Sad</button>
        <button onClick={() => setMood('angry')} style={styles.button}>Angry</button>
      </div>
      <MoodDisplay mood={mood} />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginTop: '50px',
  },
  buttonGroup: {
    marginBottom: '30px',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '8px',
  }
};

export default MoodApp;
