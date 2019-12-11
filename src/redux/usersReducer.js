import {userApi} from './../api/api';
import {updateObjectInArray} from './../utils/object-helpers';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS ='users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'users/SET_TOTAL_USERS';
const SET_PRELOADER = 'users/SET_PRELOADER';
const SET_FOLLOW_PROGRESS = 'users/SET_FOLLOW_PROGRESS';

let initialState = {
	users: [],
	totalUsers: 0,
	pageSize: 7,
	portialSize: 17,
	currentPage: 1,
	isFetching: false,
	followProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
			}
		case UNFOLLOW: 
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
			}

		case SET_USERS:
			return {
				...state,
				users: [...action.users]
			}

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}

			case SET_TOTAL_USERS:
				return {
					...state,
					totalUsers: action.totalUsers
				}

			case SET_PRELOADER:
				return {
					...state,
					isFetching: action.isFetching
				}

			case SET_FOLLOW_PROGRESS:
				return {
					...state,
					followProgress: action.isFetching
						? [...state.followProgress, action.userId]
						: state.followProgress.filter(id => id !== action.userId)

				}

		default:
			return state;
	}
}

export const followUser = userId => ({type: FOLLOW, userId});
export const unfollowUser = userId => ({type: UNFOLLOW, userId});
export const setUsers = users => ({type: SET_USERS, users});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsers = totalUsers => ({type: SET_TOTAL_USERS, totalUsers});
export const toggleFetching = isFetching => ({type: SET_PRELOADER, isFetching});
export const toggleFollowProgress = (isFetching, userId) => ({type: SET_FOLLOW_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleFetching(true));
	let data = await userApi.getUsers(currentPage, pageSize);
	  dispatch(toggleFetching(false));
	  dispatch(setUsers(data.items));
	  dispatch(setTotalUsers(data.totalCount));
};


export const unfollow = (userId) => async (dispatch) => {
	dispatch(toggleFollowProgress(true, userId));
	let data = await userApi.delFollowUser(userId);
    if (data.resultCode === 0) {
      	dispatch(unfollowUser(userId))
    };
	dispatch(toggleFollowProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
	dispatch(toggleFollowProgress(true, userId));
	let data = await userApi.postFollowUser(userId);
    if (data.resultCode === 0) {
      	dispatch(followUser(userId))
    };
	dispatch(toggleFollowProgress(false, userId));
};


export default usersReducer