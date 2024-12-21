
export const actionType = {
    increment: {
        type: 'ADD_DATA',
        payload: null
    },

    decrement: {
        type: 'SUB_DATA',
        payload: -2
    },

    reset100: {
        type: 'RESET_DATA',
        payload: 100
    }
}


// 修改的类型也是 用户自定义
export const reducer = (state, action) => {
    switch (action.type) {
        case actionType.increment.type:
            return { count: state.count + 1 }
        case actionType.decrement.type:
            return { count: state.count - 1 }
        case actionType.reset100.type:
            return { count: actionType.reset100.payload }
        default:
            return state
    }
}


