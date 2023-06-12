import { designList } from '@/constants/design'

export const GET_DESIGNS = async ({commit}) => {
    /* eslint-disable */
    try {
        // Тут має бути функціонал запиту на сервер отримання данних і запис їх в store наступним коммітом
        const data = designList;
        commit('SET_DESIGNS', data)
        commit('SET_LOAD_DESIGNS', true)
    } catch (error) {
        throw error
    }
}

export const ADD_DESIGN = async ({commit}, {data}) => {
    /* eslint-disable */
    try {
        // Тут має бути функціонал запиту на створення елементу і якщо відповідь 200, то наступні дії
        commit('ADD_DESIGN', data)
    } catch (error) {
        throw error
    }
}

export const UPDATE_DESIGN = async ({commit}, {data}) => {
    /* eslint-disable */
    try {
        // Тут має бути функціонал запиту на оновлення елементу і якщо відповідь 200, то наступні дії
        commit('UPDATE_DESIGN', data)
    } catch (error) {
        throw error
    }
}

export const REMOVE_DESIGN = async ({commit}, {hash}) => {
    /* eslint-disable */
    try {
        // Тут має бути функціонал запиту на видалення елементу і якщо відповідь 200, то наступні дії
        commit('REMOVE_DESIGN', hash)
    } catch (error) {
        throw error
    }
}