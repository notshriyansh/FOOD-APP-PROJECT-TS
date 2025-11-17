import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const resList: any[] = [];

const AppLayout: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(<AppLayout />);
