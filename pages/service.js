export const getEvents = ({ offset, limit }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = events.slice(offset, offset + limit);
      resolve(response);
    }, 3000);
  });
};

const events = [
  {
    id: 1,
    name: 'Workshop',
  },
  {
    id: 2,
    name: 'Training',
  },
  {
    id: 3,
    name: 'Discussions',
  },
  {
    id: 4,
    name: 'Tutorial',
  },
  {
    id: 5,
    name: 'Teaching',
  },
  {
    id: 6,
    name: 'Cultural',
  },
  {
    id: 7,
    name: 'Spiritual',
  },
  {
    id: 8,
    name: 'Yoga',
  },
  {
    id: 9,
    name: 'Yoga',
  },
];
