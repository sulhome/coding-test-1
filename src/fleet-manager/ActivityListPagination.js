import Colors from '../colors';
import React from 'react';
import {ChevronLeft, ChevronRight} from '@material-ui/icons';
import {IconButton} from '@material-ui/core';

export default () => {


  return (
    <div>
      <span>06:00 - 07:00</span>
      <IconButton style={{height: '0'}}>
        <ChevronLeft style={{
          color: Colors.grey50,
          backgroundColor: Colors.black,
          border: `1px solid ${Colors.grey200}`,
          borderRadius: '50%'
        }}/>
      </IconButton>
      <IconButton style={{height: '0'}}>
        <ChevronRight style={{color: Colors.white, border: `1px solid ${Colors.grey200}`, borderRadius: '50%'}}/>
      </IconButton>
    </div>
  );
}
