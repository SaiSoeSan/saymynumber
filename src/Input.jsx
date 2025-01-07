
const Input = ({onInputChange,onKeyDown,name}) => {
    const handleInputChange = (e) => {
        onInputChange(e.target.value,e.target.name);
    }
    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            onKeyDown(e);
        }
    }
    return (
        <>
            <input
                type="number"
                placeholder="Enter value"
                onChange={handleInputChange}
                name={name}
                onKeyDown={handleKeyDown}
            />
        </>
    )
}

export default Input;