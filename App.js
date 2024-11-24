import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { Navigation_ref } from "./src/Utils/NavigationHelper";
import RootNavigation from "./src/RootNavigation";
import FlashMessage from "react-native-flash-message";
import Fonts from "Configs/Fonts";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "ReduxState";

import { enableLatestRenderer } from "react-native-maps";
import "react-native-gesture-handler";

const App = () => {
  enableLatestRenderer();

  return (
    <PersistGate persistor={persistor}>
      <NavigationContainer ref={Navigation_ref}>
        <RootNavigation />
        <FlashMessage
          position="top"
          titleStyle={{
            fontFamily: Fonts.PoppinsMedium,
          }}
        />
      </NavigationContainer>
    </PersistGate>
  );
};
export default App;
