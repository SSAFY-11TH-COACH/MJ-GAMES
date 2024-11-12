import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { getEventResults, registerEventResult } from '../services/eventService'

export default function EventDetailPage() {
    const { eventId } = useParams()
    const location = useLocation()
    const [eventName, setEventName] = useState(location.state?.eventName || "이벤트 이름") // 전달된 eventName 사용
    const [teamName, setTeamName] = useState("e204")
    const [isEditing, setIsEditing] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
    const [eventResults, setEventResults] = useState([])
    const [loading, setLoading] = useState(true)

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value)
    }

    const handleSaveTeamName = () => {
        setIsEditing(false)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        const fetchEventResults = async () => {
            try {
                setLoading(true)
                const data = await getEventResults(eventId)
                setEventResults(data.eventResults)
            } catch (error) {
                console.error("Error fetching event results:", error)
                alert("이벤트 결과를 불러오는 중 오류가 발생했습니다.")
            } finally {
                setLoading(false)
            }
        }
        fetchEventResults()
    }, [eventId])

    const handleRegisterEventResult = async () => {
        try {
            const response = await registerEventResult(teamName, eventId, new Date().toISOString())
            alert(response.message)
            const updatedResults = await getEventResults(eventId)
            setEventResults(updatedResults.eventResults)
        } catch (error) {
            console.error("Error registering event result:", error)
            alert("이벤트 결과 등록 중 오류가 발생했습니다.")
        }
    }

    return (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen w-screen">
            <div className="w-full bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                    <div className="text-xl font-semibold">
                        {eventName} / 초대 코드: {eventId}
                    </div>
                    <div className="flex items-center space-x-2">
                        {isEditing ? (
                            <input
                                type="text"
                                value={teamName}
                                onChange={handleTeamNameChange}
                                className="border border-gray-300 p-2 rounded"
                            />
                        ) : (
                            <span className="text-lg font-semibold">{teamName}</span>
                        )}
                        <button
                            onClick={isEditing ? handleSaveTeamName : handleEditClick}
                            className="text-blue-500"
                        >
                            {isEditing ? "저장" : "수정"}
                        </button>
                    </div>
                </div>
                
                <button
                    onClick={handleRegisterEventResult}
                    className="w-full bg-gray-300 text-xl font-semibold py-4 rounded-lg shadow-md mb-4"
                >
                    버튼
                </button>

                <div className="text-center text-gray-600 mb-4">현재 시간: {currentTime}</div>

                <div className="w-full bg-gray-300 text-2xl font-bold py-8 rounded-lg text-center mb-4">
                    등수
                </div>

                <div className="w-full bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">이벤트 결과 리스트</h3>
                    {loading ? (
                        <p>로딩 중...</p>
                    ) : (
                        <ul>
                            {eventResults.map((result, index) => (
                                <li key={index} className="border-b p-2">
                                    {index + 1}. {result.teamName} - {new Date(result.createdAt).toLocaleString()}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
