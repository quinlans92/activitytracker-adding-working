import React from 'react';


const ActivityList = ({ activity }) => {
    return (
        <ul id="Class-List style-none">
            {
                activity.map((performed) => (
                    <li key={performed.id}>Activity:{performed.activityName}  Date:{performed.activityDate}  Distance:{performed.activityDistance}</li>
                ))}
        </ul>
    )
}


export default ActivityList;