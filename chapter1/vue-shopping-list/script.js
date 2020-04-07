const data = {
  title: 'Shopping List',
  items: [
    {
      name: 'Babana',
      completed: false,
    },
    {
      name: 'Tomato',
      completed: false,
    },
    {
      name: 'Garlic',
      completed: true
    }
  ]
};

new Vue({
  el: '#shopping-list',
  data,
});
