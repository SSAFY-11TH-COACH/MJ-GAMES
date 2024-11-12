import axios from 'axios'

// axios 인스턴스 생성
const api = axios.create({
    baseURL: 'https://t1130.p.ssafy.io/api/v1/event', // API 기본 URL
    withCredentials: true, 
})

// 이벤트 생성 요청
export const createEvent = async (eventName, startTime) => {
    try {
        const response = await api.post('', {
            eventName,
            startTime,
        })
        return response.data
    } catch (error) {
        console.error('Error creating event:', error)
        throw error
    }
}

// 이벤트 참여 요청
export const enterEvent = async (enterCode) => {
    try {
        const response = await api.post('/enter', { 
            enterCode,
        })
        return response.data
    } catch (error) {
        console.error('Error entering event:', error)
        throw error
    }
}

// 이벤트 결과 리스트 조회 요청
export const getEventResults = async (uuid) => {
    try {
        const response = await api.get(`/results/${uuid}`) // GET 요청
        return response.data
    } catch (error) {
        console.error('Error fetching event results:', error)
        throw error
    }
}

// 이벤트 결과 등록 요청
export const registerEventResult = async (teamName, enterCode, gameEndTime) => {
    try {
        const response = await api.post('/result', { 
            teamName,
            enterCode,
            gameEndTime,
        })
        return response.data
    } catch (error) {
        console.error('Error registering event result:', error)
        throw error
    }
}
