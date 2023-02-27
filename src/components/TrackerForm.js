import React from "react";
// props = { onSubmitHandler: addClassMember }
const TrackerForm = ({ onSubmitHandler }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let newEntry = {
            activityName: e.target.activityName.value
        };
        e.target.activityName.value = "";

        onSubmitHandler(newEntry);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" name="activityName" placeholder="Enter Name" />
            </div>
            <div>
                <label>Date</label>
                <input id="activityDate" type="date" placeholder="date" />
            </div>
            <input type="submit" className="btn btn primary" value="Add" />
        </form>
    );
}

export default TrackerForm;