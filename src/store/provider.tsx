"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <ProgressBar
        height="4px"
        color="#2B55C0"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </Provider>
  );
}

export default Providers;
