import { getInstance } from "@/api/index";

const instance = getInstance();

// 인증 정보
function getData() {
    return instance.get('/api/me?uesrId=test');
}

export { getData };
