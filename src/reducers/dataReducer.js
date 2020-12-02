const initState = {
    documents: []
}

const dataReducer = (state=initState, action) => {
    switch(action.type){
        case 'FETCH_DATA':
            return {...state,
                documents: action.payload
            }
        default:
            return {...state}

    }
}

export default dataReducer;
