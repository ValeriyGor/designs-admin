export const SET_DESIGNS = (state, data) => state.designs = data

export const SET_LOAD_DESIGNS = (state, data) => state.loadedDesignItems = data

export const ADD_DESIGN = (state, data) => {
    state.designs = [data, ...state.designs]
}

export const UPDATE_DESIGN = (state, data) => {
    const sIndex = state.designs.findIndex(v => +v.hash === +data.hash);
    state.designs.splice(sIndex, 1, {...data});
}

export const REMOVE_DESIGN = (state, hash) => {
    state.designs = state.designs.filter(design => +design.hash !== +hash)
}