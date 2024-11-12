import { useState } from 'react'
import { enterEvent } from '../services/eventService' // enterEvent 함수 import

export default function EventJoinModal({ onClose }) {
    const [eventCode, setEventCode] = useState('')
    const [teamName, setTeamName] = useState('')

    const handleJoinEvent = async () => {
        if (!eventCode || !teamName) {
            alert("이벤트 코드와 팀 이름을 입력해주세요.")
            return
        }

        try {
            const response = await enterEvent(eventCode) // enterEvent API 호출
            console.log("Joining Event:", response)
            alert(response.message) // 성공 메시지 출력
            onClose() // 모달 닫기
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert(error.response.data.message) // "존재하지 않는 이벤트 입니다." 메시지
            } else {
                alert("이벤트 참여 중 오류가 발생했습니다.")
            }
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-xl font-semibold mb-4">이벤트 참여</h2>
                <input
                    type="text"
                    placeholder="이벤트 코드"
                    value={eventCode}
                    onChange={(e) => setEventCode(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4"
                />
                <input
                    type="text"
                    placeholder="팀 이름"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4"
                />
                <button
                    onClick={handleJoinEvent}
                    className="bg-blue-500 text-white py-2 px-4 rounded mb-2 w-full"
                >
                    확인
                </button>
                <button
                    onClick={onClose}
                    className="bg-gray-300 text-black py-2 px-4 rounded w-full"
                >
                    닫기
                </button>
            </div>
        </div>
    )
}
