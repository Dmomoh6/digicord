import { uuid } from './utils'

export function newBoard () {
  return { name: 'New Board',
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
      }
    ]
  }
}
