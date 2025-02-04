import Home from "./pages/Home";
import {ReactElement} from "react";


interface Router {
  element: ReactElement;
  path: string;
  children?: Router[];
}

export const navigations: Router[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];



export const routers: Router[] = navigations.map((navigation) => ({
  path: navigation.path,
  element: navigation.element,
  children: navigation.children,
}))