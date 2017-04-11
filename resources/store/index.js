import Axios from 'axios';
import Vuex from 'vuex';

const store = new Vuex.Store({
    
    state: {
        owner: 0,
        allCats: [],
        availableCats: [],
        activeCat: null,
        rooms: []
    },

    actions: {
        loadCats: function(context, cats) {
            context.commit('setAllCats', [{
                name: 'Whiskers',
                color: '#f00'
            }, {
                name: 'Oreo',
                color: '#0f0'
            }]);
            context.commit('setAvailableCats');

            // Axios.get('/api/cats/random/2')
            // .then((result) => {
            //     context.commit('setCats', {cats: result.data});
            // })
            // .catch((error) => {
            //     // context.commit('setError', error.msg);
            //     // context.commit('setLoading', false);
            // });
        },
        // loadOwner: function(context, data) {

        //     Axios.get('/todos')
        //     .then((result) => {
        //         context.commit('setTodos', {todos: result.data.data});
        //         context.commit('setLoading', false);
        //     })
        //     .catch((error) => {
        //         // context.commit('setError', error.msg);
        //         // context.commit('setLoading', false);
        //     });
        // },
        // loadRooms: function(context, data) {

        //     Axios.get('/todos')
        //     .then((result) => {
        //         context.commit('setTodos', {todos: result.data.data});
        //         context.commit('setLoading', false);
        //     })
        //     .catch((error) => {
        //         // context.commit('setError', error.msg);
        //         // context.commit('setLoading', false);
        //     });
        // },
        startChat: function(context, cats) {
            context.commit('removeAvailableCat', cats.new);
            context.commit('setActiveCat', cats.new);
            if(cats.current) {
                context.commit('addAvailableCat', cats.current);
            }
        },
        endChat: function(context, currentCat) {
            context.commit('addAvailableCat', currentCat);
            context.commit('setActiveCat');
        },
        sendMessage: function(context, message) {
            context.commit('addMessage', {message: message, type: 'user'});
        }
    },
    
    mutations: {
        setAllCats: function(state, cats) {
            state.allCats = cats;
        },
        setAvailableCats: function(state) {
            state.availableCats = state.allCats.slice();
        },
        setActiveCat: function(state, cat) {
            state.activeCat = cat;
        },
        addAvailableCat: function(state, cat) {
            if(cat) {
                state.availableCats.push(cat);
            }
        },
        removeAvailableCat: function(state, cat) {
            var index = state.availableCats.indexOf(cat);
            if (index > -1) {
                state.availableCats.splice(index, 1);
            }
        },
        addMessage: function(state, messageData) {
            var index = state.allCats.indexOf(state.activeCat);
            if(!state.allCats[index].messages) {
                state.allCats[index].messages = [];
            }
            state.allCats[index].messages.push({
                text: messageData.message,
                type: messageData.type
            });
        }
        // setOwner: function(state, data) {
        //     state.owner = data;
        // },
        // setRooms: function(state, data) {
        //     state.rooms = data;
        // }
    }
});

export default store;