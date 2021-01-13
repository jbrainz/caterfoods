import React, { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)
  const [item, setItem] = useState("")

  return (
    <AppContext.Provider
      value={{
        item,
        setItem,
        selectedIndex,
        setSelectedIndex,
        value,
        setValue,
        open,
        handleClickOpen: () => {
          setOpen(true)
          console.log("pressed!")
        },
        handleClose: () => {
          setOpen(false)
        },
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
