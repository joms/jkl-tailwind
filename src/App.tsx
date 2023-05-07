import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="p-24 h-104 logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="p-24 h-104 logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="mb-24 jkl-tw-heading-1">Vite + React</h1>
      <div className="p-8">
        <PrimaryButton
          onClick={() => setCount((count) => count + 1)}
          className="mb-32"
        >
          count is {count}
        </PrimaryButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-stein">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
