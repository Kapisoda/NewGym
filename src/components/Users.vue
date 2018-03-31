<template>
<div>
    <div v-for="user in users" v-bind:key="user.id">{{user.first_name}} {{user.last_name}}</div>
</div>  
</template>
<script>
export default {
  name: 'Users',
  data(){
      return {
        
      }
  },
  computed: {
      users() {
          return this.$store.state.users.listUsers
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
