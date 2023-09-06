import { createContext } from "react";
import { OnboardingState } from "./state/OnboardingState";

export const OnboardingContext = createContext<OnboardingState | undefined>(undefined)

