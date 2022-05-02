import { uuid } from './utils'

export default {
  name: 'overboard',

  board: [
    {
      name: 'Board 1',
      id: uuid(),
      columns: [
        {
          name: 'todo',
          id: uuid(),
          tasks: [
            {
              description: '',
              name: 'first task',
              id: uuid(),
              userAssigned: null
            },
            {
              description: '',
              name: 'second task',
              id: uuid(),
              userAssigned: null
            },
            {
              description: '',
              name: 'and thrid',
              id: uuid(),
              userAssigned: null
            }
          ]
        },
        {
          name: 'in-progress',
          id: uuid(),
          tasks: [
            {
              description: '',
              name: 'first task',
              id: uuid(),
              userAssigned: null
            }
          ]
        },
        {
          name: 'done',
          id: uuid(),
          tasks: [
            {
              description: '',
              name: 'first task',
              id: uuid(),
              userAssigned: null
            }
          ]
        }
      ]
    }
  ]

}
