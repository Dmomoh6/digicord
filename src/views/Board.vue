<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <BoardColumn
        v-for="(column, $columnIndex) of active.board.columns"
        :key="$columnIndex"
        :column="column"
        :columnIndex="$columnIndex"
        :board="active.board"
      />

      <div @click="createColumn" class="newcol">
          <fa class="plus text-white justify-center" icon="plus"/>
      </div>
    </div>

    <div
      class="task-bg"
      v-if="isTaskOpen"
      @click.self="close"
    >
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BoardColumn from '@/components/BoardColumn'

export default {
  components: { BoardColumn },
  data () {
    return {
      newColumnName: 'New Column ',
      a: 1
    }
  },
  computed: {
    ...mapState(['active']),
    isTaskOpen () {
      return this.$route.name !== 'board'
    }
  },
  methods: {
    close () {
      this.$router.push({ name: 'board' })
    },
    createColumn () {
      this.$store.commit('CREATE_COLUMN', {
        name: this.newColumnName + this.a++
      })
    }
  }
}
</script>

<style lang="css">
.board {
  @apply p-4 bg-white h-full overflow-auto ml-6 mr-10;
}
@media(max-width: 969px){
  .board{
@apply ml-0 mr-4;
}
}
.task-bg {
  @apply pin absolute;
  background: rgba(0,0,0,0.5);
}

.newcol
{
  @apply p-2 mr-4 text-left mt-3;
  border-radius: 6px;
  margin-right: 20px;
  min-width: 320px;
  min-height: 250px;
  background-color: #C0C0C0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
    display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.newcol:hover
{
  @apply bg-custom;
}

.plus
{
  font-size: 50px;

}
</style>
