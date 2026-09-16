import ProfileSidebar from "./components/layout/ProfileSidebar";
import MainContent from "./components/layout/MainContent";
import ProjectsSidebar from "./components/layout/ProjectsSidebar.tsx";

import "./styles/App.css";

function App() {
  return (
    <div className="portfolio-layout">
      <ProfileSidebar />
      <MainContent />
      <ProjectsSidebar />
    </div>
  );
}

export default App;