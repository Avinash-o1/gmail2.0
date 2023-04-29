import Inbox from "./components/Inbox/Inbox";
import Navbar from "./components/Navbar/Navbar";
import LeftSidebar from "./components/Sidebar/LeftSidebar";

function App() {
  return (
    <div className="app">
      {/* navbar */}
      <Navbar />
      <div className="main">
        {/* left sidebar */}
        <LeftSidebar />
        {/* inbox */}
        <Inbox />
      </div>
    </div>
  );
}

export default App;
