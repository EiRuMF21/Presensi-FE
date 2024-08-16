import React, { createContext, useState, useContext } from "react";

interface PopupContextProps {
  isLoginOpen: boolean;
  setIsLoginOpen: (open: boolean) => void;
}

const PopupContext = createContext<PopupContextProps>({
  isLoginOpen: false,
  setIsLoginOpen: () => {},
});

export const usePopup = () => useContext(PopupContext);

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <PopupContext.Provider value={{ isLoginOpen, setIsLoginOpen }}>
      {children}
    </PopupContext.Provider>
  );
};
