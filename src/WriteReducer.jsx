export default function WriteReducer(guest, action) {
  switch (action.type) {
    case 'write': {
      return [
        ...guest,
        {
          id: action.id,
          text: action.text,
          date: action.date
        }
      ]
    }
    case 'changed': {
      return guest.map((t) => {
        if (t.id === action.data.id) {
          return action.data;
        } else {
          return t
        }
      })
    }
    case 'deleted': {
      return guest.filter((t)=> t.id !== action.id)
    }
      
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

