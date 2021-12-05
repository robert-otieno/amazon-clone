export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_USER': 
        return {
            ...state,
            user:action.user
        }

        case 'ADD_TO_BASKET':
            // lOGIC FOR ADDING ITEM TO BASKET
            return { 
                ...state, 
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
            // lOGIC FOR ADDING ITEM TO BASKET
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                // Item exists in basket, remove it...
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return { ...state, basket: newBasket };
    
        default:
            return state;
    }
}

export default reducer;