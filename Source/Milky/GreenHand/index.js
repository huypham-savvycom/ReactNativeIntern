// import { createStore } from "redux";
// import React, { Component } from "react";
// import { Provider } from "react-redux";
// import {GreenApp} from "./App";
// import {WelcomeCopy} from './Welcome';
// import {Login} from './Login';
// import Main from './Main';
// const defaultState = {
//   name: "Chien",
//   soCayCanTuoi: 5,
//   soCayDaTuoi: 0,
//   soCayHong: 0,
//   screen: <WelcomeCopy />
// };
// const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "TuoiCay":
//       return {
//         soCayCanTuoi: state.soCayCanTuoi - 1,
//         soCayDaTuoi: state.soCayDaTuoi + 1
//       };
//     case "CayHong":
//       return { soCayHong: state.soCayHong + 1 };
//     case 'Login': return {screen: <Login />};
//     case 'SignUp': return {screen: <SignUp />};
//     case 'Main': return {screen: <Main />}
//   }
//   return state;
// };

// const store = createStore(reducer);

// export default class Index extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <GreenApp />
//       </Provider>
//     );
//   }
// }
