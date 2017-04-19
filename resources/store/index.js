import Axios from 'axios';
import Vuex from 'vuex';

const store = new Vuex.Store({
    
    state: {
        owner: 0,
        allCats: [],
        activeCat: null,
        rooms: [],
        currentRoom: null,
        scenarioId: null
    },

    actions: {
        loadCats: function(context, cats) {
            context.commit('setAllCats', cats);
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
        loadRooms: function(context, rooms) {
            context.commit('setRooms', rooms);
            context.commit('setCurrentRoom', 'hallway');
        },
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

            if(data.scenarioId) {
                Axios.post('/api/cat/talk', {
                    apiaiKey: data.cat.apiai,
                    message: data.message,
                    cat: data.cat,
                    scenarioId: data.scenarioId
                })
                .then((result) => {
                    context.commit('addMessage', {message: result.data, cat: data.cat, type: 'cat'});
                })
                .catch((error) => {
                    console.error(error);
                });
            } else {
                context.commit('addMessage', {message: 'Sorry, I\'m not ready yet..' , cat: data.cat, type: 'cat'});
            }
        },
        changeRoom: function(context, roomName) {
            context.commit('setCurrentRoom', roomName);
        },
        catChangesRoom: function(context, cat) {
            context.commit('catChangesRoom', cat);
        },
        setScenarioId: function(context, id) {
            context.commit('setScenarioId', id);
        }
    },
    
    mutations: {
        setAllCats: function(state, cats) {
            for (let cat of cats) {
                cat.messages = [];
            }
            state.allCats = cats;
        },
        setActiveCat: function(state, cat) {
            state.activeCat = cat;
        },
        addMessage: function(state, messageData) {
            messageData.cat.messages.push({
                text: messageData.message,
                type: messageData.type
            });
        },
        setRooms: function(state, rooms) {
            for (let room of rooms) {
                room.cats = [];
            }
            state.rooms = rooms;
        },
        setCurrentRoom: function(state, roomName) {
            let currentIndex = 0;
            let roomIndex = -1;


            for(let room of state.rooms) {
                if(room.name == roomName) {
                    roomIndex = currentIndex;
                }
                currentIndex++;
            }

            if(roomIndex > -1) {
                state.currentRoom = state.rooms[roomIndex];
            }
        },
        catChangesRoom: function(state, cat) {

            if(state.activeCat == null || cat._id != state.activeCat._id) {

                let roomIndex = 0;
                let deleteRoomIndex = -1;

                for(let room of state.rooms) {
                    let catIndex = 0;
                    let deleteCatIndex = -1;


                    for(let c of room.cats) {
                        if(c._id == cat._id) {
                            deleteCatIndex = catIndex;
                            deleteRoomIndex = roomIndex;
                        }
                        catIndex++;
                    }

                    if(deleteCatIndex > -1) {
                        room.cats.splice(deleteCatIndex, 1);
                    }

                    roomIndex++;
                }

                let room = Math.floor(Math.random() * state.rooms.length);
                while(room == deleteRoomIndex) {
                    room = Math.floor(Math.random() * state.rooms.length);
                } 

                state.rooms[room].cats.push(cat);
            }
        },
        setScenarioId: function(state, id) {
            state.scenarioId = id;
        }
        // setOwner: function(state, data) {
        //     state.owner = data;
        // },
    }
});

export default store;