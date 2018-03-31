import Vue from 'vue'
import Vuex from 'vuex'

import users from './store/users'
import groups from './store/groups'
import memberships from './store/memberships'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        users,
        groups,
        memberships
    }
})