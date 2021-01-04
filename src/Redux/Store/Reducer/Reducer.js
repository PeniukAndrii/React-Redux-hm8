const initialState= {
    item:[],
    chose:[],
    cart:[]
}

export const reducer = (state=initialState,action)=>{
    switch (action.type){
        case 'SET_ITEM':
            state.item.push(...action.payload)
            state.item.forEach(value => value.stan=false)
            return{...state}
        case 'ITEM_ADD':
            const updChose = state.chose.filter((el)=>el.id !== action.payload.id)
            if(updChose.length === state.chose.length){
                updChose.push(action.payload)
            }
            return {...state, chose: updChose}
        case 'ITEM_CART_ADD':
            const updCart = state.cart.filter((el)=>el.id !== action.payload.id)
            const price = updCart.reduce((acc,value)=>acc+value)
            if(price.length === state.cart.length){
                price.push(action.payload)
            }

            return {...state, cart: price}
        default:
            return state
    }
}