import { database } from '../firebaseConfig'



const TEXT_CHANGE = 'userData/TEXT_CHANGE'

export const inputChangeAction = text => ({
    type: TEXT_CHANGE,
    text
})

export const saveTextToDbAsyncAction = () => (dispatch, getState) => {
    const text = getState().userData.text
    const uuid = getState().auth.user.uid

    database.ref(`users/${uuid}`).set({
        text
    })
}
export const loadTextFromDbAsyncAction = () => (dispatch, getState) => {
    const uuid = getState().auth.user.uid
    database.ref(`users/${uuid}`).once(
        'value',
        snapshot => {
            dispatch(
                inputChangeAction(snapshot.val().text)
            )
        }
    )

}
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