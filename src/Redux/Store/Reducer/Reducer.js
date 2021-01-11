const initialState= {
    item:[],
    chose:[],
    cartItem:[],
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
            const updCart = state.cartItem.filter((el)=> el !== action.payload.price)
            if(updCart.length===state.cartItem.length){
                updCart.push(action.payload.price)
            }
            console.log(updCart)
            const sum = updCart.reduce((acc,el)=>(acc+=el),0)
            console.log(sum)

            return {...state, cartItem: updCart, cart:[sum]}
        default:
            return state
    }
}