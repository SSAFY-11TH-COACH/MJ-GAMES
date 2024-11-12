import { useState } from 'react'

export default function EventCreateModal({ onClose }) {
    const [eventName, setEventName] = useState('')
    const [startTime, setStartTime] = useState('')

    const handleCreateEvent = () => {
        if (eventName && startTime) {
            console.log("Event Created:", { eventName, startTime })
            onClose()
        } else {
            alert("이벤트 이름과 시작 시간을 입력해주세요.")
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
