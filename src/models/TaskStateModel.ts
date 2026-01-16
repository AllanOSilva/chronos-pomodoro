import type { TaskModel } from "./TaskModel"

export type TaskStateModel={
    taske: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask:TaskModel|null;
    currentCycle:number;//1 ao 8
    config:{
        workTime:number;
        shortBreakTime:number;
        longBreakTime:number;
    };
};