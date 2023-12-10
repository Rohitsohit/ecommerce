
import { FETCH_ALL} from '../constant/index';
export default (product=[],action) =>{

     switch (action.type) {
          case FETCH_ALL:
               return action.payload;
          default:
               return product;
     }
}