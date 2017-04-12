import Axios from 'axios';
import Vuex from 'vuex';

const store = new Vuex.Store({
    
    state: {
        owner: 0,
        allCats: [],
        availableCats: [],
        activeCat: null,
        rooms: [],
        currentLocation: 'hallway'
    },

    actions: {
        loadCats: function(context, cats) {
            let numberOfCats = Math.round(Math.random() * 3) + 3;

            Axios.get('/api/cats/random/' + numberOfCats)
            .then((result) => {
                context.commit('setAllCats', result.data);
                context.commit('setAvailableCats');
            })
            .catch((error) => {
                error.log(error);
            });
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
        sendMessage: function(context, data) {
            context.commit('addMessage', {message: data.message, cat: data.cat, type: 'user'});
            Axios.post('/api/cat/talk', {
                apiaiKey: data.cat.apiai,
                message: data.message
            })
            .then((result) => {
                context.commit('addMessage', {message: result.data, cat: data.cat, type: 'cat'});
            })
            .catch((error) => {
                error.log(error);
            });
        },
        changeRoom: function(context, room) {
            context.commit('setCurrentRoom', room);
        }
    },
    
    mutations: {
        setAllCats: function(state, cats) {
            for (let cat of cats) {
                cat.messages = [];
            }
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
            let index = state.availableCats.indexOf(cat);
            if (index > -1) {
                state.availableCats.splice(index, 1);
            }
        },
        addMessage: function(state, messageData) {
            messageData.cat.messages.push({
                text: messageData.message,
                type: messageData.type
            });
        },
        setCurrentRoom: function(state, room) {
            state.currentLocation = room;
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