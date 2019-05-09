import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const mudule={
    state:{
        user:{
            name:'',
            username:'',
            type:''
        }
    },
    getters:{},
    mutations:{
        setUser(state,payload){
            if(payload.hasOwnProperty('name')){
                state.user.name=payload.name
            }
            if(payload.hasOwnProperty('username')){
                state.user.username=payload.username
            }
            if(payload.hasOwnProperty('type')){
                state.user.type=payload.type
            }
        }
    },
    pllugins:[createPersistedState()],
    mounted(){
        // console.log(this.$store.state.user.name)
    }
}

const store=new Vuex.Store(mudule)
export default store

// this.$store.commit('setUser',{name:'kuke_kuke'})