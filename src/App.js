import React, { Suspense } from "react";

// ** Router Import
import Router from "./router/Router";
import Loading from "@src/layouts/components/loading/Delay/Delay";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Loading/>
      <Router />
    </Suspense>
  );
};

export default App;
