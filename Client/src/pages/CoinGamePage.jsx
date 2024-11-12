import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function CoinGamePage() {
    const mountRef = useRef(null);

    useEffect(() => {
      // 1. 장면 생성
      const scene = new THREE.Scene();
  
      // 2. 카메라 설정
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
  
      // 3. 렌더러 생성 및 설정
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement); // DOM 요소에 렌더러 추가
  
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext('2d');
      
      // 배경색과 텍스트 설정
      context.fillStyle = '#ffff00'; // 배경색 (예: 노란색)
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#000000'; // 글자색 (예: 검정색)
      context.font = '48px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate(- Math.PI / 2); // 90도 회전 (라디안 단위)
      context.fillText('SSAFY', 0, 0);



      
      // Canvas를 텍스처로 변환
      const frontTexture = new THREE.CanvasTexture(canvas);



      const coinGeometry = new THREE.CylinderGeometry(1, 1, 0.1, 32);
      const frontMaterial = new THREE.MeshBasicMaterial({ map: frontTexture });
    const backMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc }); // 뒷면 (회색)
    const sideMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 }); // 옆면 (어두운 회색)
    const materials = [sideMaterial, frontMaterial, backMaterial];
        const coin = new THREE.Mesh(coinGeometry, materials);
      coin.rotation.x = Math.PI / 2; // 동전을 옆으로 눕힘
      scene.add(coin);
      
      // 애니메이션 함수에서 coin 회전 코드 추가
      const animate = () => {
        requestAnimationFrame(animate);
        //coin.rotation.y += 0.5; // y축으로 회전
        //coin.rotation.x += 0.5; // y축으로 회전
        coin.rotation.z += 0.05; // y축으로 회전
        renderer.render(scene, camera);
      };
      
      animate();
      // 6. 컴포넌트가 언마운트될 때 정리
      return () => {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      };
    }, []);
  
    return <div>
        123
        <div ref={mountRef}></div>
    </div>;
  }

