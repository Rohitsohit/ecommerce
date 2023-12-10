import { CART} from '../constant/index';
export default (state=[],action) =>{

     switch (action.type) {
          case CART:
               return [...state,action.cartData];
          default:
               return state;
     }
}