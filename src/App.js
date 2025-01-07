import {useState} from "react";
import Input from "./Input";

function App() {
  const [value1,setValue1] = useState("");
  const [value2,setValue2] = useState("");
  const [operation,setOperation] = useState("1");
  const [result,setResult] = useState(0);
  const [isSubmitted,setIsSubmitted] = useState(false);

  const handleInput = (value,name) => {
     if(name === "value1"){
         setValue1(value);
     }else{
         setValue2(value)
     }
  }

  const handleKeyDown = (e) => {
      handleOnSubmit(e);
  }

  const handleOperation = (e) => {
      setOperation(e.target.value)
  }

  const handleOnSubmit = (e) => {
      e.preventDefault();
      if(!value1 || !value2){
        alert("Please enter your value to calculate");
      }else{
          setIsSubmitted(true);
          switch (operation){
              case "1" : setResult(Number(value1) * Number(value2));break;
              case "2" : setResult(Number(value1) + Number(value2));break;
              case "3" : setResult(Number(value1) - Number(value2));break;
              case "4" : setResult(Number(value1) / Number(value2));break;
              default : setResult(0)
          }
          //call API to convert number to word
          numberToWord();
      }
  }
  const numberToWord = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
          method : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
          }),
      });
      console.log(response);
  }
  return (
      <div>
          <form onSubmit={handleOnSubmit}>
              <Input
                  name={'value1'}
                  value={value1}
                  onInputChange={handleInput}
                  onKeyDown={handleKeyDown}
              />
              <select name="operation" id="" defaultValue="1" onChange={handleOperation}>
                  <option value="1">multiply</option>
                  <option value="2">add</option>
                  <option value="3">minus</option>
                  <option value="4">divide</option>
              </select>
              <Input
                  name={'value2'}
                  value={value2}
                  onInputChange={handleInput}
                  onKeyDown={handleKeyDown}
              />
              <input type="submit" value="="/>
              <br/><br/>
              <div>
              {
                  isSubmitted &&
                  <div>
                      <div>The result is <b>{result}</b></div>
                      <div>In English : one hundred</div>
                      <div>In Burmese : တစ်ရာ</div>
                  </div>
              }
              </div>
          </form>
      </div>
  );
}

export default App;
