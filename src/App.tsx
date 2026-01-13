import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react';

export function App(){
    
    return (
        <>
            <Heading>Olá mundo!
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum voluptatibus esse illum provident laboriosam, suscipit deleniti voluptas qui! Magnam beatae labore perspiciatis nulla? Natus, ex error. Saepe, placeat deleniti?</p>
        </>
    );
}

