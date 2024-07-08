import { lazy } from "react";

const Home = lazy(() => import("../Layout/Home"));
const Hero = lazy(() => import("../Layout/Hero"));

export { Home, Hero };
