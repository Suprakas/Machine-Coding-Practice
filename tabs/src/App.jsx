import "./App.css";
import Tabs from "./components/Tabs";

function App() {
  const tabs = [
    {
      id: 0,
      name: "Profile",
      info: "This is my profile.",
    },
    {
      id: 1,
      name: "Settings",
      info: "This is my profile settings.",
    },
    {
      id: 2,
      name: "Posts",
      info: "This is my posts.",
    },
  ];

  return (
    <>
      <Tabs tabs={tabs} />
    </>
  );
}

export default App;
