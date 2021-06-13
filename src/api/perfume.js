import { getInstance } from "@/api/index";

const instance = getInstance();

// 향수 리스트
function getPerfume() {
    return instance.get('perfume');
}

// 향수 생성
function createPerfume(clockData) {
    return instance.post('perfume', clockData);
}

// 향수 삭제
function deletePerfume(id) {
    return instance.delete(`perfume/${id}`)
}

export { getPerfume, createPerfume, deletePerfume };
