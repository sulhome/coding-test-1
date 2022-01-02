import React, {useState} from 'react';
import DriverActivity from './DriverActivity';
import getActivities from './activities';
import styled from '@emotion/styled';
import ActivityListPagination from './ActivityListPagination';

export default () => {
  const [activities, setActivities] = useState(getActivities());

  const PaginationContainerStyle = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
  `;

  const removeActivity = (id) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  const flagActivity = (id) => {
    const activityIndex = activities.findIndex(activity => activity.id === id);
    const activitiesCopy = [...activities];
    activitiesCopy[activityIndex].flagged = !activitiesCopy[activityIndex].flagged;
    setActivities(activitiesCopy);
  };

  return (
    <>
      <PaginationContainerStyle>
        <div>Inefficient Driver Activity</div>
        <ActivityListPagination/>
      </PaginationContainerStyle>
      {activities.map((activity, i) => <DriverActivity
        activity={activity}
        alternateColor={i % 2 === 0}
        dismiss={removeActivity}
        flagActivity={flagActivity}
        key={i}/>)}
    </>
  );
}
