import React from "react";


const ActivityList = ({ activity, onDelete }) => {

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col">Activity</th>
                    <th scope="col">Date</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    <th scope="col">Duration</th>
                </tr>
            </thead>
            <tbody>
                {activity.map((performed) => (
                    <tr key={performed.id}>
                        <td>{performed.activityName}</td>
                        <td>{performed.activityDate}</td>
                        <td>{performed.startTime}</td>
                        <td>{performed.endTime}</td>
                        <td>{performed.activityDistance}</td>
                        <td>
                            <button onClick={() => onDelete(performed.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}


export default ActivityList;