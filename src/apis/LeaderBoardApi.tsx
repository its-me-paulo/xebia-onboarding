import { ILeaderBoardRoItemProps } from "../components/LeaderBoardRowItem"

export const LeaderBoardApi = {
    get: async function() {
        const leaderBoardItems: ILeaderBoardRoItemProps[] = []
        for (let counter: number = 1; counter <= 10; counter++) {
            leaderBoardItems.push({position: counter, imageUrl: "download.jpeg", teamName: "Team " + counter, time: "03:27:13h"})
        }
       return leaderBoardItems 
    }
}