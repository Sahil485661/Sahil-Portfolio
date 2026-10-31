import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import ShortBioJunction from "./sections/ShortBioJunction.jsx";
import SkillsJunction from "./sections/SkillsJunction.jsx";
import WorkJunction from "./sections/WorkJunction.jsx";
import ContactJunction from "./sections/ContactJunction.jsx";


function RootLayout() {
const links = [
  { to: "/", label: "Home" },
{ to: "/skills", label: "Skills" },
{ to: "/work", label: "My Work" },
{ to: "/about", label: "About" },
{ to: "/resume", label: "Resume" },
{ to: "/contact", label: "Contact" },
];


return (
<div className="min-h-screen bg-neutral-950 text-neutral-100">
<Navbar links={links} />
<div className="w-full flex-1">
        <Outlet />
      </div>

<Footer />
</div>
);
}


const router = createBrowserRouter([
{
path: "/",
element: <RootLayout />,
children: [
{ index: true, element: <Home /> },
{ path: "skills", element: <Skills /> },
{ path: "work", element: <Work /> },
{ path: "about", element: <About /> },
{ path: "resume", element: <Resume /> },
{ path: "contact", element: <Contact /> },
],
},
]);


export default function App() {
return <RouterProvider router={router} />;
}