import Vue from 'vue'
import Router from 'vue-router'
import Board from './views/Board.vue'
import Task from './views/Task.vue'
import Column from './views/Column.vue'
import BoardName from './views/Boardname.vue'
import BoardList from './views/BoardList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'board',
      component: Board,
      children: [
        {
          path: 'task/:id',
          name: 'task',
          component: Task
        },
        {
          path: 'column/:id',
          name: 'column',
          component: Column
        },
        {
          path: 'board-name/:id',
          name: 'board-name',
          component: BoardName
        },
        {
          path: 'board-list',
          name: 'board-list',
          component: BoardList
        }
      ]
    }
  ]
})
