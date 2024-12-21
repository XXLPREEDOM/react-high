/**
 * 模拟状态管理
 */

// 需要引入 reducer

export const createStore = (initData, reducer) => {
    let state = initData
    const listeners = [] // 依赖

    // 通过 subscribe，将订阅了数据data的函数存储起来，便于后续数据改变时回调
    const subscribe = (handler) => {
        listeners.push(handler)
    }

    /* 此修改方式不安全的原因是传入的 newVal 不可控 */
    // 修改data数据的唯一方法，data变化时，通知订阅者全部执行
    const UNSAFE_changeData = (newVal) => {
        state = newVal
        listeners.forEach(cb => cb())
    }

    // 采用可控的修改数据方式
    const dispatch = (action) => {
        // 1.获取修改后的值
        const currentState = reducer(state, action)
        state = currentState
        listeners.forEach(cb => cb())
    }

    const getState = () => state
    return {
        getState,
        subscribe,
        UNSAFE_changeData,
        dispatch // 搭配reducer
    }
}