// export const fetchComments = (pinId) => dispatch => {
//     const response = await fetch(`/api/pins/${pinId}/comments`)
// }

import { csrfFetch } from "./csrf";
import { receivePin } from "./pins";

export const deleteComment = (pinId, commentId) => async(dispatch) => {
     const response = await csrfFetch(`/api/pins/${pinId}/comments/${commentId}`,{
        method: 'DELETE',
     }).then((response) => response.json()).then(pin => dispatch(receivePin(pin)))
};
   
export const createComment = (pinId, comment) => async(dispatch) => {
    const response = await csrfFetch(`/api/pins/${pinId}/comments`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(comment)
    }).then((response)=> response.json()).then(pin => dispatch(receivePin(pin)))
};

export const updateComment = (pinId, commentId, comment) => async (dispatch) => {
    const response = await csrfFetch(`/api/pins/${pinId}/comments/${commentId}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    }).then((response) => response.json()).then(pin => dispatch(receivePin(pin)))
};