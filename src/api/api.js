import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {'API-KEY': '5ce70457-1b41-403c-bc3e-870004ef40a4'}
})

export const userApi = {
	getAuthData () {
		return instance.get('auth/me').then(response => response.data);
	},

	getProfileUser (userId) {
		return instance.get('profile/' + userId).then(response => response.data);
	},

	getUsers (page, pageSize) {
		return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data);
	},

	delFollowUser (userId) {
		return instance.delete(`follow/${userId}`).then(response => response.data);
	},

	postFollowUser (userId) {
		return instance.post(`follow/${userId}`).then(response => response.data);
	}
}