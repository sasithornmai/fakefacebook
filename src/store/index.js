import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    defaultAvatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIMKLBPr-PxlbWxWWaAerVx1V2QA1BDgUw9Foe1cwE87wPOup8JKPhkYEu4lKAGQH5gM&usqp=CAU",
  },
  getters: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});
