export const ContactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.payload]
      };
    case "DEL_CONTACT":
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "START":
      return {
        loading: true
      };
    case "COMPLETE":
      return {
        loading: false
      };
    default:
      throw new Error();
  }
};