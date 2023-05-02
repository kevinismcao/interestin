import { csrfFetch } from "./csrf";

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
});

const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
})

const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
})

export const getBoard = boardId => state => {
    return state?.entities.boards ? state.entities.boards[boardId] : null;
}

export const getBoards = state => {
    return state?.entities.boards ? Object.values(state.entities.boards) : [];
}

export const fetchBoards = (userId) => async(dispatch) => {
    const response = await fetch(`/api/users/${userId}/boards`);
    
    if (response.ok){
        const boards = await response.json();
        dispatch(receiveBoards(boards));
    }
}

export const fetchBoard = (userId, boardId) => async(dispatch) => {
    const response = await fetch(`/api/users/${userId}/boards/boardId`);

    if (response.ok){
        const board = await response.json();
        dispatch(receiveBoard(board));
    }
}

export const fetchBoardCover = (boardId) => async(dispatch) => {
    const response = await fetch(`/api/users/`)
}

export const createBoard = board => async (dispatch) => {
    const response = await csrfFetch(`/api/boards/`, {
        method: 'POST',
        body: (board)
    });
    if (response.ok){
        const board = await response.json();
        dispatch(receiveBoard(board));
    }
}

export const updateBoard = (userId, board) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/boards/${board.id}`,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(board)
    });
    if (response.ok){
        const board = await response.json();
        dispatch(receiveBoard(board))
    }
}

const boardsReducer = (state={}, action) => {
    switch (action.type){
        case RECEIVE_BOARDS:
            return { ...action.boards };
        case RECEIVE_BOARD:
            return {...state, [action.board.id]: action.board};
        case REMOVE_BOARD:
            const newState = {...state};
            delete newState[action.boardId];
            return newState;
        default:
            return state;
    }
}

export default boardsReducer