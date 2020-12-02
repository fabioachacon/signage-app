const initState = {
    documents: []
}

const dataReducer = (state=initState, action) => {
    switch(action.type){
        case 'FETCH_DATA':
            return {...state,
                documents: action.payload,
                lenght: action.payload.length
            }
        default:
            return {...state}

    }
}

export default dataReducer;
