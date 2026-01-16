import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultInput copy";

export function MainForm() {
    return(
        <form className = 'form' action="">
                    <div className="formRow">
                        <DefaultInput 
                        placeholder='Digite Algo' labelText='Task' 
                        id='meuInput' 
                        type = 'text'
                        />
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="formRow">
                        <Cycles />
                    </div>
                    <div>
                        <DefaultButton icon={<PlayCircleIcon />} color='green' />
                        {/* <DefaultButton icon={<StopCircleIcon />} color='red'/> */}
                    </div>
                </form>
    )
};