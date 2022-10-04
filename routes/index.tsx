import Header from "../components/Header.tsx";
import Sidebar from "../components/Sidebar.tsx";
import { Page } from "../components/Page.tsx";

export default function Home() { 
  return (
    <>
      <div class="flex flex-col min-h-screen">
        <Header />
        <Main />
      </div>
    </>
  );
}

function Main() {
  return (
    <div class="flex-1">
      <div class="mx-auto max-w-screen-lg px-4 flex gap-6">
        <Sidebar />
        <Page doc="# Home" />
      </div>
    </div>
    );
}

