export interface TeamReward {
    from: string;
    level: string;
    levelAmount: string;
    dr: number;
    rp: number;
    reward: string;
    tcr: number;
    rr: number;
    st: number;
    lastClaim: string;
  }

  export interface LevelData {
    totalHeadcount: number;
    numberOfActive: number;
    teamTopUp: number;
    totalReturn: number;
    todaysEarnings: number;
  }