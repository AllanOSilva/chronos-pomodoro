import type { TaskModel } from "./TaskModel"

//estado -> componente -> filhos
export type TaskStateModel={
    tasks: TaskModel[];//histórico, mainform, ...
    secondsRemaining: number;//countdown, histórico, mainform, botão
    formattedSecondsRemaining: string; // título, countDown
    activeTask:TaskModel|null;// título, countDown, mainform, button
    currentCycle:number;//1 ao 8 //home
    config:{
        workTime:number;//mainform
        shortBreakTime:number;//mainform
        longBreakTime:number;//mainform
    };
};