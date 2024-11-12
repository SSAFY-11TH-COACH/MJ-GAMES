import { useState } from 'react'
import EventCreateModal from '../components/EventCreateModal'
import EventJoinModal from '../components/EventJoinModal'

export default function MainPage() {
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showJoinModal, setShowJoinModal] = useState(false)

    return (
        <div className="flex flex-col items-center space-y-8 p-12">
            <button 
                onClick={() => setShowCreateModal(true)} 
                className="bg-gray-300 text-black text-4xl font-bold py-8 px-16 rounded-xl shadow-2xl w-full max-w-2xl"
            >
                이벤트 생성
            </button>
            <button 
                onClick={() => setShowJoinModal(true)} 
                className="bg-gray-300 text-black text-4xl font-bold py-8 px-16 rounded-xl shadow-2xl w-full max-w-2xl"
            >
                이벤트 참여
            </button>

            {showCreateModal && <EventCreateModal />}
            {showJoinModal && <EventJoinModal />}
        </div>
    )
}
