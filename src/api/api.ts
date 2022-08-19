import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '6a186eca-b950-4867-b1d4-cf6c7447fc05',
  },
})

export const userAPI = {
  getUsers: (currentPage: number, pageSize: number) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  follow(userID: number) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
  },
  unFollow(userID: number) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
  },
  getProfile: (userId: number) => {
    return instance.get(`profile/${userId}`)
  },
  setUserData: () => {
    return instance.get(`auth/me`)
  },
}
