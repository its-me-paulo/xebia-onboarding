import { createContext } from "react"

export interface OnboardingState {
    teamName: string 
    startTime: Date
    level: OnboardingLevel
}

export interface OnboardingLevel {
    number: number
    state: LevelState
}

/**
 * 
 * STARTED: challenge has been started (is the current challenge loaded in the map), the in world game has not been started 
 * IN_PROGRESS: In world game has started (QR has been scanned)
 * COMPLETE: The Challenge has been completed successfully
 */
export enum LevelState {
    STARTED, IN_PROGRESS, COMPLETE
}