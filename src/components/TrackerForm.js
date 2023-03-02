
import React from "react";


// props = { onSubmitHandler: addClassMember }
const TrackerForm = ({ onSubmitHandler }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let newEntry = {
            activityName: e.target.activityName.value,
            activityDate: e.target.date.value,
            startTime: e.target.startTime.value,
            endTime: e.target.endTime.value,
            activityDistance: e.target.distance.value
        };
        e.target.activityName.value = "";

        onSubmitHandler(newEntry);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Activity: </label>
                <input type="text" name="activityName" placeholder="Enter Name" /><br />
                <label>Date:</label>
                <input type="date" name="date" placeholder="date" /><br />
                <label>Start Time:</label>
                <input type="time" name="startTime" placeholder="Start Time" /><br />
                <label>End Time:</label>
                <input type="time" name="endTime" placeholder="End Time" /><br />
                <label>Distance:</label>
                <input type="number" name="distance" placeholder="km" />
            </div>
            <input type="submit" className="btns" value="Add" />
        </form>
    );
}

export default TrackerForm;