<template>
  <div class="task-view">
    <div class="flex w-full flex-col flex-grow px-4">
      <input
        type="text"
        class=" w-full text-center uppercase bg-custom text-white p-4 text-xl font-semibold rounded-custom tasktitle"
        :value="board.name"
        placeholder="Enter Board Name"
        @change="updateBoardProperty($event, 'name')"
        @keyup.enter="updateBoardProperty($event, 'name')"
      >

    </div>
     <div class="flex-1 px-4">
       <AppButton class="save" @click.native="close"> Save </AppButton>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getBoard']),
    board () {
      return this.getBoard
    }
  },
  methods: {
    updateBoardProperty (e, key) {
      this.$store.commit('UPDATE_BOARD', {
        board: this.baord,
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
  @apply relative flex flex-row bg-white pin mx-2 m-32 mx-auto py-2 items-center text-left rounded shadow;
  max-width: 400px;
  height: 20vh;
  max-height: 100px
}

@media (max-width: 969px)
{
  .task-view {
  max-width: 90vw;
}

}

.tasktitle
{
  font-size: 17.5px;
}

.save{
    font-size: 17.5px;
}
</style>
