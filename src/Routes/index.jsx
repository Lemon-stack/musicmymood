import { lazy } from "react";

const Hero = lazy(() => import("../Layout/Hero"));
const Home = lazy(() => import("../Layout/home/home"));

export { Home, Hero };
