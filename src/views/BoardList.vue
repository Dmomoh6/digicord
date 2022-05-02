<template>
  <div class="task-view">
    <div class="overflow-scroll flex flex-col flex-grow items-start px-4">
      <div v-for="(board, index) of boards" :key="index" class="p-2 w-full mr-2  text-center bg-custom text-white p-4 mb-6 text-xl font-semibold rounded-custom tasktitle"
      >
      <div
        @click="moveToBoard(index)"
      >
      <span class="relative uppercase">
      {{board.name}}
</span>
</div>
        <div @click="deleteBoard({board, index})" class="w-full boardX"><fa icon="times"/>
          </div>

</div>
      <div
      @click="createBoard"
        class="p-2 w-full mr-2 block text-center bg-custom text-white p-4 mb-6 text-xl font-semibold rounded-custom tasktitle"
      >
      + Create new board
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getBoardList']),
    boards () {
      return this.getBoardList
    }
  },
  methods: {
    moveToBoard (index) {
      this.$store.commit('CHANGE_BOARD', index)
      this.$router.push({ name: 'board' })
    },
    createBoard () {
      this.$store.commit('CREATE_BOARD')
      this.$router.push({ name: 'board' })
    },
    close () {
      this.$router.push({ name: 'board' })
    },
    deleteBoard (board) {
      this.$store.commit('DELETE_BOARD', board)
    }
  }
}
</script>

<style scoped>
.task-view {
  @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 800px;
  min-height: 70vh;
}

.tasktitle
{
  font-size: 17.5px;
}

@media (max-width: 969px)
{
  .task-view
  {
    max-width: 90vw;
    min-height: 50vh;
  }

  .tasktitle
{
  font-size: 14px;
}
}

.boardX
{
  float: right;
  max-width: 5%;
  margin-top: -18.5px !important;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.boardX:hover
{
  color: #92278F
}
</style>
