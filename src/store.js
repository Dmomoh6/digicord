import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { saveStatePlugin, uuid } from './utils'
import { newBoard } from './new-board'

Vue.use(Vuex)

const overboard = JSON.parse(localStorage.getItem('overboard')) || defaultBoard

var active = {
  board: overboard.board[0],
  type: 'board'
}
export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    overboard,
    active
  },
  getters: {
    getTask (state) {
      return (id) => {
        for (const column of active.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    },
    getTaskColumn (state) {
      return (id) => {
        for (const column of active.board.columns) {
          let count = 0
          for (const task of column.tasks) {
            count++
            if (task.id === id) {
              return (count - 1)
            }
          }
        }
      }
    },
    getBoardIndex (state) {
      return (id) => {
        let count = 0
        for (const board of state.overboard.board) {
          if (board.id === id) {
            return (count)
          } else {
            count++
          }
        }
      }
    },
    getColumn (state) {
      return (id) => {
        for (const column of active.board.columns) {
          if (column.id === id) {
            return column
          }
        }
      }
    },
    getBoard (state) {
      return active.board
    },
    getBoardList (state) {
      return overboard.board
    }
  },
  mutations: {
    CREATE_TASK (state, { tasks, name }) {
      if (name) {
        tasks.push({
          name,
          id: uuid(),
          description: ''
        })
      }
    },
    CREATE_COLUMN (state, { name }) {
      state.active.board.columns.push({
        name,
        id: uuid(),
        tasks: []
      })
    },
    DELETE_COLUMN (state, { fromColumnIndex }) {
      state.active.board.columns.splice(fromColumnIndex, 1)
    },
    RENAME_COLUMN (state, { name, fromColumnIndex }) {

    },
    UPDATE_COLUMN (state, { column, key, value }) {
      if (value) {
        column[key] = value
      } else {
        column[key] = 'Untitiled'
      }
    },
    UPDATE_TASK (state, { task, key, value }) {
      if (value) {
        task[key] = value
      } else {
        task[key] = 'No Task'
      }
    },
    DELETE_TASK (state, { task, column, getters }) {
      let index = this.getters.getTaskColumn(task.id)
      column.tasks.splice(index, 1)
    },
    DELETE_BOARD (state, { board, getters }) {
      if (state.overboard.board.length > 1) {
        let index = this.getters.getBoardIndex(board.id)
        state.overboard.board.splice(index, 1)
        if (board.id === active.board.id) { state.active.board = state.overboard.board[0] }
      } else {
        alert('You must have at least one board')
      }
    },
    UPDATE_BOARD (state, { board, key, value }) {
      if (value) {
        state.active.board[key] = value
      } else {
        state.active.board[key] = 'Untitled'
      }
    },
    MOVE_TASK (state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
      toTasks.splice(toTaskIndex, 0, taskToMove)
    },
    MOVE_COLUMN (state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.active.board.columns

      const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
      columnList.splice(toColumnIndex, 0, columnToMove)
    },
    CHANGE_BOARD (state, index) {
      Vue.set(active, 'board', state.overboard.board[index])
    },
    CREATE_BOARD (state) {
      if (state.overboard.board.length < 5) {
        state.overboard.board.push(newBoard())
        Vue.set(active, 'board', state.overboard.board[(state.overboard.board.length - 1)])
      } else {
        alert("Can't have more than 5 active boards at a time")
      }
    }
  }
})
