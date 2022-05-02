<template>
  <AppDrop
    @drop="moveTaskOrColumn"
  >
    <AppDrag
      class="column"
      :transferData="{
        type: 'column',
        fromColumnIndex: columnIndex
      }"
    >
      <div class="flex font-semibold text-white ml-1 mt-2 mb-2">
        <div class="col-name">
        {{ column.name }}
        </div>
        <div @click="editColumn()" class="edit"><fa class="-ml-10" icon="pencil-alt"/>
          </div>

<div @click="deleteColumn(columnIndex)" class="edit"><fa class="-ml-4" icon="trash-alt"/></div>
      </div>
      <div class="list-reset -mt-2 ml-1 mr-1">
        <ColumnTask
          v-for="(task, $taskIndex) of column.tasks"
          :key="$taskIndex"
          :task="task"
          :taskIndex="$taskIndex"
          :column="column"
          :columnIndex="columnIndex"
          :board="board"
        />

        <input
          type="text"
          class="block p-2 mb-1 w-full mt-4 rounded-custom text-white font-medium bg-transparent border "
          placeholder="+ Enter new task"
          @keyup.enter="createTask($event, column.tasks)"
        />
      </div>
    </AppDrag>
  </AppDrop>
</template>

<script>
import ColumnTask from './ColumnTask'
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'

export default {
  data () {
    return {
    }
  },
  components: {
    ColumnTask,
    AppDrag,
    AppDrop
  },
  mixins: [movingTasksAndColumnsMixin],
  methods: {
    pickupColumn (e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: e.target.value
      })
      e.target.value = ''
    },
    editColumn () {
      this.goToColumn(this.column.id)
    },
    goToColumn (columnid) {
      this.$router.push({ name: 'column', params: { id: columnid } })
    },
    deleteColumn (fromColumnIndex) {
      this.$store.commit('DELETE_COLUMN', { fromColumnIndex })
    }
  }
}
</script>

<style lang="css">
.column {
  @apply bg-custom rounded-custom p-2 mr-4 text-left mt-3;
  width: 320px;
  word-wrap: break-word;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>

<style scoped>

.edit{
  font-size: 12px;
}

.col-name
{
  width: 100%;
}
</style>
