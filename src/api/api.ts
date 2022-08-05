import axios from 'axios'
import React from 'react'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6a186eca-b950-4867-b1d4-cf6c7447fc05"
    }
})

export const userAPI = {
    getUsers:(currentPage: number, pageSize: number)=> {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}