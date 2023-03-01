import './App.css';
import TrackerForm from './components/TrackerForm';
import ActivityList from './components/ActivityList';
import { useState } from "react";


const sampleActivity = [
  {

  }

];




function App() {

  const [activityEntry, setActivityEntry] = useState(sampleActivity);

  const addActivityEntry = (newFormEntry) => {
    let randomId = Math.floor(Math.random() * 100000) + 1

    newFormEntry.id = randomId;

    setActivityEntry([...activityEntry, newFormEntry]);
  };

  return (
    <div className="container-sm p-2">
      <header className="p-3 text-center bg-dark text-light rounded-3">
        <h2>Activity Tracker</h2>
      </header>
      <div className="container">
        <div className='row justify-content-center'>
          <div className='col-12'>
            <ActivityList activity={activityEntry} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className='row justify-content-center'>
          <div className='col-12'>
            <TrackerForm onSubmitHandler={addActivityEntry} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;