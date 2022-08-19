type FriendsType = {
  id: number
  name: string
  status: string
}
export type SideBarType = {
  friends: Array<FriendsType>
}

let initialState: SideBarType = {
  friends: [
    { id: 1, name: 'Marusia', status: 'online' },
    { id: 2, name: 'Pablo', status: 'offline' },
    { id: 3, name: 'Alex', status: 'offline' },
  ],
}

const sideBarReducer = (state = initialState, action: any) => {
  return state
}

export default sideBarReducer
