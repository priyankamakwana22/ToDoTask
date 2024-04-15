export const ADD_NOTE = 'ADD_NOTE';

export const addNote = todoData =>  
    ({
        type : 'ADD_NOTE',
        payload : todoData
    })
