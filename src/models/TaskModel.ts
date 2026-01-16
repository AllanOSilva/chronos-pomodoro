export type TaskModel ={
    id:string;
    name:string;
    duration:number;
    StartDate:number;
    completeDate: number | null; //quando a tarefa chegar ao final
    InterruptDate: number | null;//quando a tarefa for interrompida
    type:'workTime'|'shortBreakTime'|'longBreakTime';
};