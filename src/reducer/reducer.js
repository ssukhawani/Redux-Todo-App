const reducer=(state={},action)=>{

    switch (action.type) {
      case "Add_TODO_DETAILS": {
        return {
          ...state,
          todoDetails: [...state.todoDetails, action.payload],
          todoReplica: [...state.todoDetails, action.payload],
        };
      }
      case "DELETE_TODO": {
        return {
          ...state,
          todoDetails: [
            ...state.todoDetails.slice(0, action.payload),
            ...state.todoDetails.slice(action.payload + 1),
          ],
          todoReplica: [
            ...state.todoDetails.slice(0, action.payload),
            ...state.todoDetails.slice(action.payload + 1),
          ],
        };
      }

      case "DEL_INCOMPLETE_TODO": {
        return {
          ...state,
          todoReplica: [
            ...state.todoDetails.slice(0, action.payload),
            ...state.todoDetails.slice(action.payload + 1),
          ],
        };
      }

      case "DEL_COMPLETE_TODO": {
        return {
          ...state,
          todoReplica: [
            ...state.todoDetails.slice(0, action.payload),
            ...state.todoDetails.slice(action.payload + 1),
          ],
        };
      }

      case "UPDATE_TODO": {
        return {
          ...state,
          todoDetails: [
            ...state.todoDetails.slice(0, action.payload.id),
            action.payload.object,
            ...state.todoDetails.slice(action.payload.id + 1),
          ],
          todoReplica: [
            ...state.todoDetails.slice(0, action.payload.id),
            action.payload.object,
            ...state.todoDetails.slice(action.payload.id + 1),
          ],
        };
      }

      case "ADD_LOGIN_USER": {
        return {
          ...state,
          loginDetails: [action.payload],
        };
      }

      case "FLEX_REVERT": {
        return {
          ...state,
          flex: action.payload,
        };
      }

      case "CHECKED_TRUE": {
        return {
          ...state,
          todoDetails: [
            ...state.todoDetails.slice(0, action.payload.id),
            {
              ...state.todoDetails[action.payload.id],
              checked: action.payload.true,
            },
            ...state.todoDetails.slice(action.payload.id + 1),
          ],
          todoReplica: [
            ...state.todoDetails.slice(0, action.payload.id),
            {
              ...state.todoDetails[action.payload.id],
              checked: action.payload.true,
            },
            ...state.todoDetails.slice(action.payload.id + 1),
          ],
        };
      }

      case "COMPLETE": {
        return {
          ...state,
          todoReplica: action.payload,
        };
      }
      case "COMPLETE_DATV": {
        return {
          ...state,
          todoReplica: action.payload,
        };
      }
      case "ALL_ACT": {
        return {
          ...state,
          todoReplica: action.payload,
        };
      }

      case "SET_ACTIVE_DIV": {
        return {
          ...state,
          active: action.payload,
        };
      }

      default: {
        return state;
      }
    }
}
export default reducer;