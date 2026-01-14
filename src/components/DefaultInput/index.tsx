type DefaultInputProps={
    id:string;
    labelText?:string;
}& React.ComponentProps<'input'>;
export function DefaultInput({id,type, labelText, ...rest}:DefaultInputProps){
     return (
        <>
        <label htmlFor={id}>{labelText}</label>
        <input type={type} {...rest} id={id} />
        </>
     );
}