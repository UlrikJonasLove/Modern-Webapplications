import Add from '../actions/actions';

const initState = {
    items: [
        {id: 1, title: "Website", desc: "A complete website", price: 500},
        {id: 2, title: "Web application", desc: "A complete webapplication", price: 1000},
        {id: 3, title: "ASP.NET Core RESTful API", desc: "A complete API", price: 600}
    ],
    addedProducts: [],
    total: 0
}

const reducer = (state = initState) => {
    return state;
}

/*const reducer = (state = initState, action) => {
    if (action.type === Add) {
        let addedProduct = state.items.find(products => products.id === action.id) 

        let existedProduct = state.addedProducts.find(products => action.id === products.id)
        if (existedProduct) 
        {
            addedProduct.quantity += 1
            return {
                ...state,
                total: state.total + addedProduct.price
            }
        }
        else {
            addedProduct.quantity = 1;
            let newTotal = state.total + addedProduct.price
            return {
                ...state, 
                addedProducts: [...state.addedProducts, addedProduct],
                total: newTotal
            }
        }
    }
    else {
        return state
    }
} */

export default reducer; 