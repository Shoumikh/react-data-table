export const initialState = {
  students: [
    { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
    { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
    { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
    { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
  ],
  basket: [],
  user: null,
};

//selector
export const TotalPrice = (basket) =>
  basket?.reduce((sum, inBasket) => sum + inBasket.price, 0);

//takes a state and a action (add to datalayer or get from datalayer)
const reducer = (state, action) => {
  let sameId = true;
  switch (action.type) {
    case "ADD_TO_TABLE":
      //setting up unique id
      state.students.map((member) => {
        if (member.id === action.member.id) {
          sameId = false;
        }
      });
      if (sameId) {
        return {
          ...state, //whatever the state originally was
          students: [...state.students, action.member], //..state.basket >> whatever basket currently was and whatever we decided to add
        };
      } else {
        alert("Id is taken. Try different Id");
      }

    default:
      return state;
  }
};

export default reducer;
