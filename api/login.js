import request from '@/utils/request.js'

const enroll = (data) => {
	return request({
		url: "/reg",
		method: "POST",
		data
	})
}

const Login = (data) => {
	return request({
		url: '/login',
		method: "POST",
		data
	})
}

const getCode = (data) => {
	return request({
		url: '/get_captcha',
		method: "POST",
		data
	})
}

const binding = (data) => {
	return request({
		url: '/bind_mobile',
		method: "POST",
		data
	})
}

export default {
	enroll,
	Login,
	getCode,
	binding
}
