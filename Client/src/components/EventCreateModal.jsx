import { useState } from 'react'
import { createEvent } from '../services/eventService'

export default function EventCreateModal({ onClose }) {
    const [eventName, setEventName] = useState('')
    const [date, setDate] = useState('') // 날짜 상태 추가
    const [startTime, setStartTime] = useState('')

    const handleCreateEvent = async () => {
        if (!eventName || !date || !startTime) {
            alert("이벤트 이름, 날짜, 그리고 시작 시간을 입력해주세요.")
            return
        }

        // 날짜와 시간을 결합하여 ISO 8601 형식으로 변환
        const fullDateTime = `${date}T${startTime}:00`

        try {
            const response = await createEvent(eventName, fullDateTime)
            console.log("Event Created:", response)
            alert(response.message) // 성공 메시지 출력
            onClose() // 모달 닫기
        } catch (error) {
            alert("이벤트 생성 중 오류가 발생했습니다.")
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-xl font-semibold mb-4">이벤트 생성</h2>
                <input
                    type="text"
                    placeholder="이벤트 이름"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4"
                />
                <input
                    type="date" // 날짜 입력 필드 추가
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4"
                />
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4"
                />
                <button
                    onClick={handleCreateEvent}
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
