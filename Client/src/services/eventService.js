import axios from 'axios'

const API_BASE_URL = 'https://t1130.p.ssafy.io/api/v1/event'

// 이벤트 생성 요청
export const createEvent = async (eventName, startTime) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, {
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
        const response = await axios.post(`${API_BASE_URL}/enter`, {
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
        const response = await axios.get(`${API_BASE_URL}/results/${uuid}`)
        return response.data
    } catch (error) {
        console.error('Error fetching event results:', error)
        throw error
    }
}

// 이벤트 결과 등록 요청
export const registerEventResult = async (teamName, enterCode, gameEndTime) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/result`, {
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
