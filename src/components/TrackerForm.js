import React from "react";

// props = { onSubmitHandler: addClassMember }
const TrackerForm = ({ onSubmitHandler }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let newEntry = {
            activityName: e.target.activityName.value,
            activityDate: e.target.date.value,
            activityDistance: e.target.distance.value
        };
        e.target.activityName.value = "";

        onSubmitHandler(newEntry);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Add new Activity to list: </label>
                <input type="text" name="activityName" placeholder="Enter Name" />
                <label>Date</label>
                <input type="date" name="date" placeholder="date" />
                <label>Distance</label>
                <input type="number" name="distance" placeholder="km" />
            </div>
            <input type="submit" className="btns" value="Add" />
        </form>
    );
}

export default TrackerForm;