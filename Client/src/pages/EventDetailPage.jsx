import { useState, useEffect } from 'react'

export default function EventDetailPage() {
    const [teamName, setTeamName] = useState("e204")
    const [isEditing, setIsEditing] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

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

    return (
        <div className="flex flex-col items-center  bg-gray-100 min-h-screen w-screen">
            <div className="w-full bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                    <div className="text-xl font-semibold">이벤트 이름 / 초대 코드</div>
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
                    className="w-full bg-gray-300 text-xl font-semibold py-4 rounded-lg shadow-md mb-4"
                >
                    버튼
                </button>

                <div className="text-center text-gray-600 mb-4">현재 시간: {currentTime}</div>

                <div className="w-full bg-gray-300 text-2xl font-bold py-8 rounded-lg text-center">
                    등수
                </div>
            </div>
        </div>
    )
}
