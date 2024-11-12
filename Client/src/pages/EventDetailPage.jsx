import { useParams } from 'react-router-dom'

export default function EventDetailPage() {
    const { eventId } = useParams()

    return (
        <div>
            <h1>이벤트 디테일 페이지</h1>
            <p>이벤트 ID: {eventId}</p>
        </div>
    )
}
