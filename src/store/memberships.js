import Vue from 'vue'
import HTTP from '../http-common'

const state = {
    membershipsList: []
}

const actions = {
    loadMemberships ({ commit }){
        HTTP.get('api/v1/membership_types/index').then(response => {
            commit('setMemberships', response.data)
        }).catch(e => {
            console.log(e.response);
        })
    }
}

const mutations = {
    setMemberships (state, memberships){
        state.membershipsList = memberships;
    }
}

export default {
    state,
    actions,
    mutations
}