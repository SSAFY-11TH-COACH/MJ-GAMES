import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // useNavigate import
import { createEvent } from '../services/eventService'

export default function EventCreateModal({ onClose }) {
    const [eventName, setEventName] = useState('')
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const navigate = useNavigate()

    const handleCreateEvent = async () => {
        if (!eventName || !date || !startTime) {
            alert("이벤트 이름, 날짜, 그리고 시작 시간을 입력해주세요.")
            return
        }

        const fullDateTime = `${date}T${startTime}:00`

        try {
            const response = await createEvent(eventName, fullDateTime)
            console.log("Event Created:", response)
            alert(response.message)

            if (response.enterCode) {
                // 이벤트 생성 후 해당 방으로 이동
                navigate(`/event/${response.enterCode}`, {
                    state: { eventName: response.eventName } // eventName 전달
                })
            }
            onClose()
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
                    type="date"
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
