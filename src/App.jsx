
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Records from "./components/Records";
import Invoice from "./components/Invoice";
import Other from "./components/Other";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Show login screen until the correct password is entered
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <aside className="h-screen shrink-0">
        <Sidebar />
      </aside>

      {/* Only Right Side Scrolls */}
      <main className="min-w-0 flex-1 overflow-y-auto bg-[#080F20] p-4 text-white md:p-8">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/records" element={<Records />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/details" element={<Other />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
