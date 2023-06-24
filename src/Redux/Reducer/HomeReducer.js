import ActionType from "../Action/ActionType"

const initialState = {
    testData: false,
    banner: [],
    category: [],
    product: [],
    deals: [],
    top_selling: [],
    store: [],
    address: [],
    single_product_Detail:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionType.BANNER:
            return { ...state, banner: action.payload }
       
        default:
            return state
    }
}
