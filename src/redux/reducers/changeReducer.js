// Store all database data
const changeReducer = (state=[], action)=>{
  if(action.type === `SEND_CHANGE`){
    return action.payload;
  }
  return state;
}

export default changeReducer;