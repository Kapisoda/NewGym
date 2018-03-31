import Vue from 'vue'
import HTTP from '../http-common'

const state = {
    listUsers: []
}

const actions = {
    loadUsers ({ commit }){
        HTTP.get('api/v1/users/index').then(response => {
            commit('setUsers', response.data.users)
        }).catch(e => {
            console.log(e.response);
        })
    }
}

const mutations = {
    setUsers (state, users){
        state.listUsers = users;
    }
}

export default {
    state,
    actions,
    mutations
}