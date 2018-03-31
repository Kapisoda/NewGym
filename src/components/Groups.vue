<template>
<div>
    <div v-for="group in groups" v-bind:key="group.id">{{group.name}}</div>
</div>
</template>
<script>
export default {
  name: 'Groups',
  computed: {
      groups() {
          return this.$store.state.groups.listGroups
      }
  }
}
</script>

