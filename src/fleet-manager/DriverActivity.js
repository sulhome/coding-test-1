import React from 'react';
import {Button, IconButton} from '@material-ui/core';
import {PlayArrow, Flag} from '@material-ui/icons';
import {BoldLabel, MutedLabel} from './ui-components';
import styled from '@emotion/styled';
import Colors from '../colors';

export default ({activity, alternateColor, dismiss, flagActivity}) => {
  const ActivityContainerStyle = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background-color: ${alternateColor ? Colors.black : Colors.grey900}
  `;

  const ItemContainer = styled.div`
    padding-top: ${props => props.paddingTop ? props.paddingTop + 'px' : '30px'};
  `;

  return (<ActivityContainerStyle>
    <div><img src={`images/${activity.image}`}/></div>
    <div style={{width: '20%'}}>
      <MutedLabel>{activity.time}</MutedLabel>
      <MutedLabel>{activity.location}</MutedLabel>
      <BoldLabel data-testid="activity-description">{activity.description}</BoldLabel>
    </div>
    <ItemContainer>
      <MutedLabel>Event freq per day</MutedLabel>
      <BoldLabel>{activity.frequency}</BoldLabel>
    </ItemContainer>
    <ItemContainer>
      <MutedLabel>Event value per day</MutedLabel>
      <BoldLabel>-£{activity.value}</BoldLabel>
    </ItemContainer>
    <ItemContainer paddingTop={50}>
      <MutedLabel style={{cursor: 'pointer'}} onClick={() => dismiss(activity.id)}
                  data-testid="activity-dismiss">dismiss</MutedLabel>
    </ItemContainer>
    <ItemContainer paddingTop={50}>
      <div style={{paddingBottom: '10px', color: '#525E66'}}>
        <Button variant="outlined">
          Watch <PlayArrow/>
        </Button></div>
    </ItemContainer>
    <ItemContainer paddingTop={50}>

      <IconButton data-testid="activity-flag" onClick={() => flagActivity(activity.id)}>
        <Flag data-testid="activity-flag-icon" style={{color: activity.flagged ? Colors.blue200 : Colors.grey50}}/>
      </IconButton>

    </ItemContainer>

  </ActivityContainerStyle>);
};
