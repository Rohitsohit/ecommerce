import {CARTDATA} from '../constant/index';
export default (state=[],action) =>{

     switch (action.type) {
          case CARTDATA:
               return action.cartProduct;
          default:
               return state;
     }
}