import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import DriverActivity from './DriverActivity';
import '@testing-library/jest-dom/extend-expect';
import Colors from '../colors';

describe('Driver Activity', () => {
  const activity = {
    id: 2,
    image: 'image1.png',
    time: '06:03:52',
    location: 'Newton, Great Yarmouth, GB-ENG',
    description: 'Coasting Opportunity Missed',
    frequency: 33,
    value: 15,
    visible: true,
    flagged: false
  };

  afterEach(cleanup);

  it('With Activity, It should display activity', async () => {
    const {getByTestId} = render(<DriverActivity activity={activity}/>);
    expect(getByTestId('activity-description')).toHaveTextContent('Coasting Opportunity Missed');
  });

  it('With Activity dismiss clicked, It should raise dismiss event', async () => {
    const mockDismiss = jest.fn();
    const {getByTestId} = render(<DriverActivity activity={activity} dismiss={mockDismiss}/>);
    fireEvent.click(getByTestId('activity-dismiss'));
    expect(mockDismiss.mock.calls[0][0]).toBe(2);
  });

  it('With flag clicked, It should raise flagged event', async () => {
    const mockFlag = jest.fn();
    const {getByTestId} = render(<DriverActivity activity={activity} flagActivity={mockFlag}/>);
    fireEvent.click(getByTestId('activity-flag'));
    expect(mockFlag.mock.calls[0][0]).toBe(2);
  });

  it('With activity flagged, It should change flag color', async () => {
    const mockFlag = jest.fn();
    const {getByTestId} = render(<DriverActivity activity={{...activity, flagged: true}} flagActivity={mockFlag}/>);
    expect(getByTestId('activity-flag-icon')).toHaveStyle(`color: ${Colors.blue200}`);
  });
});
