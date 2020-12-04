const initState = {
    documents: [],
    isLoading: true
}

const dataReducer = (state=initState, action) => {
    switch(action.type){
        case 'FETCH_DATA':
            return {...state,
                documents: action.payload,
                lenght: action.payload.length,
                isLoading: false
            }
        case 'LOADING':
            return {...state, 
                isLoading: true
            }
        default:
            return {...state}

    }
}

export default dataReducer;
