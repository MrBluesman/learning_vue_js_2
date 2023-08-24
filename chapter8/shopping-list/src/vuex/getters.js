export default {
  getLists: (state) => state.shoppingLists,
  getListById: (state) => (id) => state.shoppingLists.find((list) => list.id === id),
  getActiveList: (state) => state.shoppingLists.find((list) => list.active),
};
