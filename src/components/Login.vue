<template>
<div>
    <label  for="username">Korisničko ime</label>
    <input id="username" type="text" v-model="object.admin.username">
    <br>
    <label  for="password">Lozinka</label>
    <input id="password" type="text" v-model="object.admin.password">
    <br>
    <button @click="logIn">Login in</button>
</div>
</template>

<script>
import HTTP from '../http-common'
export default {
    name: 'Login',
        data() {
            return {
                object:{
                admin: {
                    username: '',
                    password: ''
                }
                },
                errors: []
            }
        },
        methods:{
            logIn(){
                HTTP.post('api/v1/sessions/create', this.object)
                .then(response => {
                    window.sessionStorage.setItem("user_name", response.data.admin.username);
                    window.sessionStorage.setItem("auth_token", response.data.admin.auth_token);
                    this.$router.push({ path: '/home'});
                })
                .catch(e => {
                this.errors.push(e)
                })
                
            }
        }
    }
</script>

<style lang="scss">

</style>


