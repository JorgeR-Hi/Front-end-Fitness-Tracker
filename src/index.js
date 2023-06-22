import {createRoot} from "react-dom/client";
import App from "./components/app";
import { BrowserRouter } from "react-router-dom";


const root = createRoot(document.querySelector("#app"));


root.render(
<BrowserRouter>
<App/>
</BrowserRouter>);