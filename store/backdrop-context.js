import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { createContext, useState } from "react";

const BackdropContext = createContext({
  show: false,
  hideBackdrop: ()=>{},
  showBackdrop: ()=>{}
});

export function BackdropContextProvider(props) {
  const [showBackdrop, setShowBackdrop] = useState();

  function showBackdropHandler(){
    setShowBackdrop(true)
  }
  function hideBackdropHandler(){
    setShowBackdrop(false)
  }

  const context = {
      show: showBackdrop,
      hideBackdrop: hideBackdropHandler,
      showBackdrop: showBackdropHandler
  };
  return (
    <BackdropContext.Provider value={context}>
      {props.children}
    </BackdropContext.Provider>
  );
}

export default BackdropContext;
