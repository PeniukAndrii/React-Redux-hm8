const initialState= {
    item:[],
    price:[]
}

export const reducer = (state=initialState,action)=>{
    switch (action.type){
        case 'SET_ITEM':
            state.item.push(...action.payload)
            return{...state}
        case 'ITEM_ADD':

            return {...state}
        default:
            return state
    }
}