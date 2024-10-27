import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState('');
  const [reps, setReps] = useState('');
  const [calories, setCalories] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { exercise, reps, calories, feedback };
    setWorkouts([...workouts, newWorkout]);
    setExercise('');
    setReps('');
    setCalories('');
    setFeedback('');
  };

  return (
    <div className="App">
      <h1>GymInfluencer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Calories Burned"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
        />
        <textarea
          placeholder="Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button type="submit">Log Workout</button>
      </form>

      <h2>Logged Workouts</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <strong>Exercise:</strong> {workout.exercise} | 
            <strong> Reps:</strong> {workout.reps} | 
            <strong> Calories:</strong> {workout.calories} | 
            <strong> Feedback:</strong> {workout.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
