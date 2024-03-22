import { createStore } from 'vuex';
import axios from 'axios'
import {useCookies} from 'vue3-cookies'
import sweet from "sweetalert"
import router from "../router"
const {cookies} = useCookies()
const dataUrl = 'https://captoneeomp-6.onrender.com/'
export default createStore({
  state: {
    rooms: null,
    room: null,
    users: null,
    user: null
  },
  
  mutations: {
    setRooms(state, value) {
      state.rooms = value;
    },
    setRoom(state, value) {
      state.room = value;
    },
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    updateRoom(state, updatedroom) {
      state.rooms = state.rooms.map(room => (room.id === updatedroom.id ? updatedroom : room));
    },
    deleteroom(state, roomId) {
      state.rooms = state.rooms.filter(room => room.id !== roomId);
    },
    addroom(state, newroom) {
      state.rooms.push(newroom);
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
     // rooms CRUD operations
     async fetchRooms(context) {
      
       let res = await fetch(`${dataUrl}rooms`);
       let { results } = await res.json();
       if (results) {
         context.commit('setRooms', results);
       }
     },
     async fetchRoom(context, id) {
       let res = await fetch(`${dataUrl}rooms/${id}`);
       let { result } = await res.json();
       if (result) {
         context.commit('setroom', result);
       }
     },
     async updateRoom(context, updatedroom) {
       let res = await fetch(`${dataUrl}rooms/${updatedroom.id}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedroom),
         headers: { 'Content-Type': 'application/json' }
       });
       if (res.ok) {
         context.commit('updateroom', updatedroom);
       }
     },
     async deleteroom(context, roomId) {
       let res = await fetch(`${dataUrl}rooms/${roomId}`, { method: 'DELETE' });
       if (res.ok) {
         context.commit('deleteroom', roomId);
       }
     },
     async addroom(context, newroom) {
       let res = await fetch(`${dataUrl}rooms`, {
         method: 'POST',
         body: JSON.stringify(newroom),
         headers: { 'Content-Type': 'application/json' }
       });
       if (res.ok) {
         context.commit('addroom', newroom);
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
      },
      async login(context, payload) {
        try{
          console.log(payload);
        let { msg, results, token} = (
          await axios.post(`${dataUrl}/users/login`, payload)).data
          if(results){
            context.commit("setUsers", {msg,results});
           cookies.set("LogedUser", {token,msg,results})
           sweet({
            tittle: msg,
            text:`Welcome Back,
            ${results?.firstName} ${results?.lastName}`,
            icon: "success",
            timer:2000
           })
           router.push({name:"Users"})
          }else{
            sweet({
              tittle: "Login",
              text: msg,
              icon: "error",
              timer:2000
             })
          }
    }catch(e){
      sweet({
        tittle: "error",
        text: e.message,
        icon: "error",
        timer:2000
       })
    }
  }
   },
   modules: {

   }
});