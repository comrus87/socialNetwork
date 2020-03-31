import {userApi} from './../api/api';
import {updateObjectInArray} from './../utils/object-helpers';
import {UsersType} from './../types/types';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS ='users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'users/SET_TOTAL_USERS';
const SET_PRELOADER = 'users/SET_PRELOADER';
const SET_FOLLOW_PROGRESS = 'users/SET_FOLLOW_PROGRESS';



let initialState = {
	users: [] as Array<UsersType>,
	totalUsers: 0,
	pageSize: 7,
	portialSize: 17,
	currentPage: 1,
	isFetching: false,
	followProgress: [] as Array<number> // Array of index id
}

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
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

type FollowUserType = {
	type: typeof FOLLOW,
	userId: number
}

type UnfollowUserType = {
	type: typeof UNFOLLOW,
	userId: number
}

type SetUsersType = {
	type: typeof SET_USERS,
	users: UsersType
}

type SetCurrentPageType = {
	type: typeof SET_CURRENT_PAGE,
	currentPage: number
}

type SetTotalUsersType = {
	type: typeof SET_TOTAL_USERS,
	totalUsers: number
}

type ToggleFetchingType = {
	type: typeof SET_PRELOADER, 
	isFetching: boolean
}

type ToggleFollowProgressType = {
	type: typeof SET_FOLLOW_PROGRESS, 
	isFetching: boolean,
	userId: number
}

export const followUser = (userId: number): FollowUserType => ({type: FOLLOW, userId});
export const unfollowUser = (userId: number): UnfollowUserType => ({type: UNFOLLOW, userId});
export const setUsers = (users: UsersType): SetUsersType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsers = (totalUsers: number): SetTotalUsersType => ({type: SET_TOTAL_USERS, totalUsers});
export const toggleFetching = (isFetching: boolean): ToggleFetchingType => ({type: SET_PRELOADER, isFetching});
export const toggleFollowProgress = (isFetching: boolean, userId: number): ToggleFollowProgressType => ({type: SET_FOLLOW_PROGRESS, isFetching, userId});

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
	dispatch(toggleFetching(true));
	let data = await userApi.getUsers(currentPage, pageSize);
	  dispatch(toggleFetching(false));
	  dispatch(setUsers(data.items));
	  dispatch(setTotalUsers(data.totalCount));
};


export const unfollow = (userId: number) => async (dispatch: any) => {
	dispatch(toggleFollowProgress(true, userId));
	let data = await userApi.delFollowUser(userId);
    if (data.resultCode === 0) {
      	dispatch(unfollowUser(userId))
    };
	dispatch(toggleFollowProgress(false, userId));
};

export const follow = (userId: number) => async (dispatch: any) => {
	dispatch(toggleFollowProgress(true, userId));
	let data = await userApi.postFollowUser(userId);
    if (data.resultCode === 0) {
      	dispatch(followUser(userId))
    };
	dispatch(toggleFollowProgress(false, userId));
};


export default usersReducer