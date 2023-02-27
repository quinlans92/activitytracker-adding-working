import React from 'react';


const ActivityList = ({ activity }) => {
    return (
        <ul id="Class-List">
            {
                activity.map((performed) => (
                    <li key={performed.id}>{performed.activityName}</li>
                ))}
        </ul>
    )
}


export default ActivityList;