<template>
    <div>
        <p>Home</p>
        <button @click="comp='Users'">Users</button>
        <button @click="comp='Groups'">Groups</button>
        <button @click="comp='Memberships'">Memberships</button>
        <component v-bind:is="comp"></component>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Users from './Users'
import Groups from './Groups'
import Memberships from './Memberships'
    export default {
        name: 'Home',
        data() {
            return {
                comp: 'Users'
            }
        },
        methods: {
            ...mapActions([
                'loadUsers',
                'loadGroups',
                'loadMemberships'
            ])
        },
        created(){
            this.$store.dispatch('loadUsers');
            this.$store.dispatch('loadGroups');
            this.$store.dispatch('loadMemberships')
        },
        components: {
            Users,
            Groups,
            Memberships
        }
    }
</script>

<style lang="scss">

</style>


