const activities = [{
  id: 1,
  image: 'image1.png',
  time: '06:03:52',
  location: 'Newton, Great Yarmouth, GB-ENG',
  description: 'Coasting Opportunity Missed',
  frequency: 33,
  value: 15,
  visible: true,
  flagged: false
},
  {
    id: 2,
    image: 'image2.png',
    time: '06:07:01',
    location: 'Newton, Norfolk, GB-ENG',
    description: 'Harsh Deceleration',
    frequency: 9,
    value: 4.32,
    visible: true,
    flagged: false
  },
  {
    id: 3,
    image: 'image3.png',
    time: '06:14:11',
    location: 'Great Yarmouth, GB-ENG',
    description: 'Incorrect Gear Usage',
    frequency: 10,
    value: 5.55,
    visible: true,
    flagged: false
  },
  {
    id: 4,
    image: 'image4.png',
    time: '06:42:21',
    location: 'Lingwood - Norwich, GB-ENG',
    description: 'Regenerative Braking Unused',
    frequency: 6.34,
    value: 15,
    visible: true,
    flagged: false
  }
];

export default function getActivities() {
  return JSON.parse(JSON.stringify(activities));
}
