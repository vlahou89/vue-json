export default {
  workedHours: [
    {
      employee: 'Alan B',
      day: 'Monday',
      normal_hours: 6,
      overtime_hours: 2,
    },
    {
      employee: 'Alan B',
      day: 'Tuesday',
      normal_hours: 7,
      overtime_hours: 1,
    },
    {
      employee: 'Alan B',
      day: 'Wednesday',
      normal_hours: 6,
      overtime_hours: 1,
    },
    {
      employee: 'Mary C',
      day: 'Monday',
      normal_hours: 7,
      overtime_hours: 2,
    },
    {
      employee: 'Mary C',
      day: 'Tuesday',
      normal_hours: 6,
      overtime_hours: 2,
    },
    {
      employee: 'Mary C',
      day: 'Wednesday',
      normal_hours: 4,
      overtime_hours: 0,
    },
  ],
  roles: {
    engineers: ['Mike C', 'Alan B', 'Sara D'],
    plumbers: ['Niall J', 'Mary C'],
  },
  ratesPerRole: {
    engineer: {
      normal_time: 11.5,
      overtime: 15.5,
    },
    plumber: {
      normal_time: 11.1,
      overtime: 15.0,
    },
  },
};
