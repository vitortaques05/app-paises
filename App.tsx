import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes/App.routes";

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
