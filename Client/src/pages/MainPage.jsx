// MainPage.jsx
import { useState } from 'react';
import EventCreateModal from '../components/EventCreateModal';
import EventJoinModal from '../components/EventJoinModal';
import { Container, Card, Group, Button, Text } from '@mantine/core';
export default function MainPage() {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showJoinModal, setShowJoinModal] = useState(false);

    return (
        <div className="flex flex-col items-center mt-12 space-y-2 p-12">
            {/* Hero 스타일 타이틀 */}
            <Container size="lg" className="font-eastarjet text-center mb-4">
                <h1 className="text-5xl font-bold mb-4 text-white">
                    하이&nbsp;
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                        11기 부울경 2반&nbsp;
                    </span>
                    헬로
                    <span className="mt-4 block">
                        E201, E202, E203, E204, E205, E206
                    </span>
                </h1>
                <Text className="text-lg mb-8 font-light text-gray-400">
                    정정 당당한 승부를 가를 때가 왔습니다.
                </Text>
            </Container>

            {/* 이벤트 생성 및 참여 버튼 */}
            <div className="flex flex-row space-x-8 justify-center w-full">
                <Card withBorder padding="lg" className="rounded-xl w-1/3 h-72 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg flex flex-col justify-center items-center cursor-pointer">
                    <Button
                        onClick={() => setShowCreateModal(true)}
                        variant="white"
                        size="lg"
                        className="text-5xl text-white font-bold"
                    >
                        이벤트<br/>생성하기
                    </Button>
                </Card>

                <Card withBorder padding="lg" className="rounded-xl w-1/3 h-72 bg-gradient-to-r from-cyan-500 to-teal-600 shadow-lg flex flex-col justify-center items-center cursor-pointer">
                    <Button
                        onClick={() => setShowJoinModal(true)}
                        variant="white"
                        size="lg"
                        className="text-5xl text-white font-bold"
                    >
                        이벤트<br/>참여하기
                    </Button>
                </Card>
            </div>

            {/* 모달 */}
            {showCreateModal && <EventCreateModal onClose={() => setShowCreateModal(false)} />}
            {showJoinModal && <EventJoinModal onClose={() => setShowJoinModal(false)} />}
        </div>
    );
}
