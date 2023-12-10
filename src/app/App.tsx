import { Provider } from "react-redux";
import { MainPage } from "pages/MainPage";
import { store } from "store";

import "./app.css";

export const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};
