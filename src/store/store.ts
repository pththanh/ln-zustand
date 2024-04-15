import { create } from "zustand"
import { Action, State } from "./store.types"
import createSelectors from "./selectors"
import { devtools, persist } from 'zustand/middleware'


const defaultState = {
    firstName: "",
    lastName: "",
}


// const useGlobalStore = create<State & Action>()((set) => ({
//     ...defaultState,
//     updateFirstName: (firstName) => set(() => ({firstName: firstName})),
//     updatelastName: (lastName) => set(() => ({lastName: lastName}))
// }))


const useGlobalStore = create<State & Action>()(
    devtools(
    (set) => ({
        ...defaultState,
        updateFirstName: (firstName) => set(() => ({firstName: firstName})),
        updatelastName: (lastName) => set(() => ({lastName: lastName}))
    }
      ),
    ),
  )


export default createSelectors(useGlobalStore)