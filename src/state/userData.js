const TEXT_CHANGE = 'TEXT_CHANGE'

export const inputChangeAction = text => ({
    type: TEXT_CHANGE,
    text
})

const INITIAL_STATE = {
    text: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEXT_CHANGE:
            return {
                ...state,
                text: action.text
            }

        default:
            return state
    }
}

