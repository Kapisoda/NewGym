<template>
<div>
    <div v-for="membership in memberships" v-bind:key="membership.id">{{membership.name}}</div>
</div>
</template>

<script>
export default {
  name: 'Memberships',
  computed: {
      memberships() {
          return this.$store.state.memberships.membershipsList.membership_types
      }
  }
}
</script>

