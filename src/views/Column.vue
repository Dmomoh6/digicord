<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input
        type="text"
        class="p-2 w-full mr-2 block  text-center bg-custom text-white p-4 mb-6 text-xl font-semibold rounded-custom tasktitle"
        :value="column.name"
        placeholder="Enter Column Name"
        @change="updateColumnProperty($event, 'name')"
        @keyup.enter="updateColumnProperty($event, 'name')"
      >
      <div class="flex-1 w-full">
      <AppButton class="save" @click.native="close"> Save </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getColumn']),
    column () {
      return this.getColumn(this.$route.params.id)
    }
  },
  methods: {
    updateColumnProperty (e, key) {
      this.$store.commit('UPDATE_COLUMN', {
        column: this.column,
        key,
        value: e.target.value
      })
    },
    close () {
      this.$router.push({ name: 'board' })
    }
  }
}
</script>

<style scoped>
.task-view {
  @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 400px;
  height: 20vh;
}

@media (max-width: 969px)
{
  .task-view{
  max-width: 90vw
  }
}

.tasktitle
{
  font-size: 17.5px;
}

.save{
  right: 12px;
  position: absolute;
}
</style>
