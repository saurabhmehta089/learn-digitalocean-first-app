import "./App.css";
import Header from "./Header"

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
  return (
    <div className="app min-h-screen text-blue-200 flex items-center flex-col p-20">
      <div className="mb-10 grid grid-cols-4 grid-rows-2 w-1/2 mx-auto">
        <Header />
      </div>
    </div>
  );
}

