<template>
    <div>
        <div class="clock" :key="clock.id" v-for="clock in clocks">
            {{ clock.name }}
            <br>
            {{ clock.price }} 원
            <br>
            <button @click="deleteClock(clock.id)">삭제하기</button>
        </div>

        <div class="create">
            <button @click="modalShow">시계 추가하기</button>
        </div>

        <div class="back">
            <Modal @submit="createClock"></Modal>
        </div>
    </div>
</template>

<script>
import { getClock, createClock, deleteClock } from "@/api/clock";
import Modal from '@/components/Modal';

export default {
    name: "ClockPage",
    components: {
        Modal,
    },
    data() {
        return {
            clocks: [],
        };
    },
    methods: {
        modalShow() {
            document.getElementById('modal').classList.remove('disable')
        },
        async createClock(form) {
            try {
                await createClock(form);
                let { data } = await getClock();
                this.clocks = data;
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        },
        async deleteClock(id) {
            try {
                await deleteClock(id);
                let { data } = await getClock();
                this.clocks = data;
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        },
        /** 구독된 경우 실시간으로 업데이트 된다 ( A클라이언트가 카드를 추가하면 서버 소켓을 통해 B클라이언트에도 카드가 추가된다 */
        async onRealTimeUpdated(update) {
            console.log(update);
            let { data } = await getClock().catch(e => {
                console.log(e);
            });
            this.clocks = data;
        },
    },
    async created() {
        try {
            let { data } = await getClock();
            console.log(data);
            this.clocks = data;
        } catch (e) {
            console.log(e);
        }
        this.$rt.subscribe('/clock/', this.onRealTimeUpdated);
    }
}
</script>

<style scoped>
.clock {
    display: inline-block;
    padding: 10px;
    margin-right: 20px;
    border: 1px solid blue;
}

.create {
    position: fixed;
    right: 100px;
    bottom: 100px;
}

</style>
