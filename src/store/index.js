import { createStore } from 'vuex';
const dataUrl = ''
export default createStore({
  state: {
    hotels: null,
    hotel: null,
    users: null,
    user: null
  },
  
  mutations: {
    setHotels(state, value) {
      state.hotels = value;
    },
    sethotel(state, value) {
      state.hotel = value;
    },
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    updatehotel(state, updatedhotel) {
      state.hotels = state.hotels.map(hotel => (hotel.id === updatedhotel.id ? updatedhotel : hotel));
    },
    deletehotel(state, hotelId) {
      state.hotels = state.hotels.filter(hotel => hotel.id !== hotelId);
    },
    addhotel(state, newhotel) {
      state.hotels.push(newhotel);
    },
    updateUser(state, updatedUser) {
      state.users = state.users.map(user => (user.id === updatedUser.id ? updatedUser : user));
    },
    deleteUser(state, userId) {
      state.users = state.users.filter(user => user.id !== userId);
    },
    addUser(state, newUser) {
      state.users.push(newUser);
    }
  },

  actions: {
     // Hotels CRUD operations
     async fetchHotels(context) {
       let res = await fetch(`${dataUrl}Hotels`);
       let { results } = await res.json();
       if (results) {
         context.commit('setHotels', results);
       }
     },
     async fetchhotel(context, id) {
       let res = await fetch(`${dataUrl}Hotels/${id}`);
       let { result } = await res.json();
       if (result) {
         context.commit('sethotel', result);
       }
     },
     async updatehotel(context, updatedhotel) {
       let res = await fetch(`${dataUrl}Hotels/${updatedhotel.id}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedhotel),
         headers: { 'Content-Type': 'application/json' }
       });
       if (res.ok) {
         context.commit('updatehotel', updatedhotel);
       }
     },
     async deletehotel(context, hotelId) {
       let res = await fetch(`${dataUrl}Hotels/${hotelId}`, { method: 'DELETE' });
       if (res.ok) {
         context.commit('deletehotel', hotelId);
       }
     },
     async addhotel(context, newhotel) {
       let res = await fetch(`${dataUrl}Hotels`, {
         method: 'POST',
         body: JSON.stringify(newhotel),
         headers: { 'Content-Type': 'application/json' }
       });
       if (res.ok) {
         context.commit('addhotel', newhotel);
       }
     },

     // Users CRUD operations
     async fetchUsers(context) {
       let res = await fetch(`${dataUrl}users`);
       let { results } = await res.json();
       if (results) {
         context.commit('setUsers', results);
       }
     },
     async fetchUser(context, id) {
       let res = await fetch(`${dataUrl}users/${id}`);
       let { result } = await res.json();
       if (result) {
         context.commit('setUser', result);
       }
     },
     async updateUser(context, updatedUser) {
       let res = await fetch(`${dataUrl}users/${updatedUser.id}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedUser),
         headers: { 'Content-Type': 'application/json' }
       });
       if (res.ok) {
         context.commit('updateUser', updatedUser);
       }
     },
     async deleteUser(context, userId) {
       let res = await fetch(`${dataUrl}users/${userId}`, { 
        method: 'DELETE'
       });
       if (res.ok) {
         context.commit('deleteUser', userId);
       }
     },
     async addUser(context, newUser) {
        let res = await fetch(`${dataUrl}users/${newUser}`,{
          method:'POST',
          body:JSON.stringify(newUser),
          headers:{'Content-Type':'application/json'}
        });
        if(res.ok){
          context.commit('addUser',newUser)
        }
      }
   }
});