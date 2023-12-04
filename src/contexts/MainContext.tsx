import {createContext, Dispatch, SetStateAction, useState, useContext} from 'react'

interface MainContextProps {
  name: string,
  photo: string,
  setName: Dispatch<SetStateAction<string>>,
  setPhoto: Dispatch<SetStateAction<string>>
}

interface childrenElement {
  children: React.ReactNode
}

const MainContext = createContext<MainContextProps>({
  name: '',
  photo: '',
  setName: (): string => '',
  setPhoto: (): string => '',
})

export function MainContextProvider({children}: childrenElement) {
  const [name, setName] = useState<string>('')
  const [photo, setPhoto] = useState<string>('')

  return (
    <MainContext.Provider value={{name, photo, setName, setPhoto}}>
      {children}
    </MainContext.Provider>
  )
}

export function useMainContext() {
  const mainContext = useContext(MainContext)
  return mainContext
}