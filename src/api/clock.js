import { getInstance } from "@/api/index";

const instance = getInstance();

// 시계 리스트
function getClock() {
    return instance.get('clock');
}

// 시계 생성
function createClock(clockData) {
    return instance.post('clock', clockData);
}

// 시계 삭제
function deleteClock(id) {
    return instance.delete(`clock/${id}`)
}

export { getClock, createClock, deleteClock };
