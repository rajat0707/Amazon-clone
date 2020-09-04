export const initialState = {
    basket: [],
    user: null
};
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding intem to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //;logic for removing item from bakset
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(`Cant remove product (id:${action.id} as its not  present in the basket)`)
            }


            return { ...state, basket: newBasket }

        default:
            return state;
    }
}
export default reducer;