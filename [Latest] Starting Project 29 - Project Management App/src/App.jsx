import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar addProjectClicked={handleAddProject} />
        {projectState.selectedProjectId === null ? (
          <NewProject />
        ) : (
          <NoProjectSelected createNewProjectClicked={handleAddProject} />
        )}
      </main>
    </>
  );
}

export default App;
