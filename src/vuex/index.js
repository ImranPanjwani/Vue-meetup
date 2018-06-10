import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

const store = new vuex.Store({
    state : {
        laptops : [
            {name:'mac'},
            {name:'windows'}
        ]
    },
    getters: {
        getAllLaptops: state => state.laptops
    },
    mutations: {
        addLaptop: (state, payload) => {
            state.laptops.push(payload);
        }
    },
    actions: {
        addLaptopAction : (state, payload) => {
            state.commit('addLaptop', payload);
        }
    } 
    
});

export default store;