<template>
  <AppDrop
    @drop="moveTaskOrColumn"
  >
    <AppDrag
      class="task mt-4"
      :transferData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
      @click.native="goToTask(task)"

    >
      <span class="w-full flex-no-shrink font-semibold">
        {{ task.name }}
      </span>
      <p
        v-if="task.description"
        class="w-full flex-no-shrink mt-1 text-sm"
      >
        {{ task.description }}
      </p>

    </AppDrag>
    <div @click="deleteTask({task, column})" class="w-full deleteTask"><fa icon="times"/>
          </div>
  </AppDrop>
</template>

<script>
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'

export default {
  components: { AppDrag, AppDrop },
  mixins: [movingTasksAndColumnsMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToTask (task) {
      this.$router.push({ name: 'task', params: { id: task.id } })
    },
    deleteTask (task) {
      this.$store.commit('DELETE_TASK', task)
    }
  }
}
</script>

<style lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.deleteTask
{ @apply py-2 px-3;
  float: right;
  max-width: 12%;
  position: relative;
  margin-top: -42.5px;
  transition: all 0.3s ease-in-out;
}

.deleteTask:hover
{
  color: #662D91
}
</style>
