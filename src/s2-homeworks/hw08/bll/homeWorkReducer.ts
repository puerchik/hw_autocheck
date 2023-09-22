import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortArray = [...state.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase()
                ? action.payload === 'up' ? -1 : 1
                : a.name.toLowerCase() === b.name.toLowerCase()
                    ? 0
                    : action.payload === 'up' ? 1 : -1
            )]
            // sort() создаёт новый массив? или нужно в ручную?...
            return sortArray // need to fix
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(f => f.age >= 18).reverse()
        }
        default:
            return state
    }
}
