import {userApi} from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS ='SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_PRELOADER = 'SET_PRELOADER';
const SET_FOLLOW_PROGRESS = 'SET_FOLLOW_PROGRESS';

let initialState = {
	users: [],
	totalUsers: 0,
	pageSize: 5,
	currentPage: 1,
	isFetching: false,
	followProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, followed: true}
					}
					return user;
				})
			}
		case UNFOLLOW: 
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, followed: false}
					}
					return user;
				})
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

export const getUsers = (currentPage, pageSize) => (dispatch) => {
	dispatch(toggleFetching(true));
	userApi.getUsers(currentPage, pageSize)
	.then(data => {
	  dispatch(toggleFetching(false));
	  dispatch(setUsers(data.items));
	  dispatch(setTotalUsers(data.totalCount));
	})
};

export const unfollow = (userId) => (dispatch) => {
	dispatch(toggleFollowProgress(true, userId));
	 userApi.delFollowUser(userId).then(data => {
	    if (data.resultCode === 0) {
	      	dispatch(unfollowUser(userId))
	    }
	});
	dispatch(toggleFollowProgress(false, userId));
};

export const follow = (userId) => (dispatch) => {
	dispatch(toggleFollowProgress(true, userId));
	 userApi.postFollowUser(userId).then(data => {
	    if (data.resultCode === 0) {
	      	dispatch(followUser(userId))
	    }
	});
	dispatch(toggleFollowProgress(false, userId));
};


export default usersReducer