import Vue from 'vue'
import HTTP from '../http-common'

const state = {
    listGroups: []
}

const actions = {
    loadGroups ({ commit }){
        HTTP.get('api/v1/groups/index').then(response => {
            commit('setGroups', response.data.groups)
        }).catch(e => {
            console.log(e.response);
        })
    }
}

const mutations = {
    setGroups (state, groups){
        state.listGroups = groups;
    }
}

export default {
    state,
    actions,
    mutations
}