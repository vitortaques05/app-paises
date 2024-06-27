// navigation.ts

import { Country } from "./country";

export type StackParamList = {
  Home: undefined;
  Details: {
    country: Country;
  };
};
