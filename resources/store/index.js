import Axios from 'axios';
import Vuex from 'vuex';

const store = new Vuex.Store({
    
    state: {
        allCats: [],
        activeCat: null,
        rooms: [],
        currentRoom: null,
        scenarioId: null,
        crime: null,
        guiltyCat: null,
        owner: null
    },

    actions: {
        setCats: function(context, cats) {
            const randomIndex = Math.floor(Math.random() * cats.length);
            context.commit('setAllCats', cats);
            context.commit('setGuiltyCat', cats[randomIndex]);
        },
        setOwner: function(context, owner) {
            context.commit('setOwner', owner);
        },
        setCrime: function(context, crime) {
            context.commit('setCrime', crime);
        },
        setRooms: function(context, rooms) {
            context.commit('setRooms', rooms);
            context.commit('setCurrentRoom', 'hallway');
        },
        setActivities: function(context, activities) {
            context.commit('setActivities', activities);
        },
        startChat: function(context, cat) {
            context.commit('setActiveCat', cat);
        },
        endChat: function(context, currentCat) {
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
        },
        endGame: function(context) {
            context.commit('endGame');
        },
        resetGame: function(context) {
            context.commit('resetState');
        }
    },
    
    mutations: {
        setAllCats: function(state, cats) {
            for(let cat of cats) {
                cat.messages = [];
            }
            state.allCats = cats;
        },
        setActiveCat: function(state, cat) {
            state.activeCat = cat;
        },
        setGuiltyCat: function(state, cat) {
            state.guiltyCat = cat;
        },
        addMessage: function(state, messageData) {
            messageData.cat.messages.push({
                text: messageData.message,
                type: messageData.type
            });
        },
        setRooms: function(state, rooms) {
            for(let room of rooms) {
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
        setActivities: function(state, activities) {
            state.activities = activities;
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
        },
        setOwner: function(state, owner) {
            state.owner = owner;
        },
        setCrime: function(state, crime) {
           
            const roomIndex = Math.floor(Math.random() * state.rooms.length);
            crime.location = { // don't reference actual room to prevent circular references
                _id: state.rooms[roomIndex]._id,
                name: state.rooms[roomIndex].name,
                preposition: state.rooms[roomIndex].preposition
            };

            state.crime = crime;
        },
        endGame: function(state) {
            state.activeCat = null;
            state.rooms = [];
            state.currentRoom = null;
        },
        resetState: function(state) {
            state.allCats = [];
            state.activeCat = null;
            state.rooms = [];
            state.currentRoom = null;
            state.scenarioId = null;
            state.crime = null;
            state.guiltyCat = null;
            state.owner = null;
            state.activities = null;
        }
    }
});

export default store;