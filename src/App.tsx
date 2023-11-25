import { 
  useState,
  useEffect,
  useRef,
  useMemo
} from 'react';
import './App.scss';
import renderDisplay from './functions/renderDisplay';

function App() {
  // 35 character line limit
  const today = new Date();
  const defaultText = useMemo(() => [
    `Welcome to the FORTUNE-9 OS`,
    `          Courtesy of the Company`,
    `Happy ${today.toLocaleString('en-us', {  weekday: 'long' })}.`,
    ``,
    `Type "Help" for a list of commands.`,
    ``,
    ``,
    ``,
  ], [] );
  const [init, setInit] = useState(false);
  const [display, setDisplay] = useState(defaultText);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (!init) {
      setInit(true);
      if (inputRef.current !== null) {
        (inputRef.current as HTMLInputElement).focus();
      }
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          setDisplay(defaultText);
          setInput("");
        }
      })
    }
  }, [init, defaultText, inputRef]);

  return (
    <main>
      <div className="terminal">
        {display.map((line, index) => (
          <div key={index} className="row">{line}</div>
        ))}
        <div className="row input">{input}</div>
        <input
          className="hidden"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value.substring(0, 35))}
          onBlur={(e) => setTimeout(() => {e.target.focus()}, 1)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              renderDisplay(input, setDisplay, () => {setInput("")});
            }
          }}
        />
      </div>
    </main>
  );
}

export default App;
