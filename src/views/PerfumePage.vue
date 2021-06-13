<template>
    <div>
        <div class="clock" :key="perfume.id" v-for="perfume in perfumes">
            {{ perfume.name }}
            <br>
            {{ perfume.price }} 원
            <br>
            <button @click="deletePerfume(perfume.id)">삭제하기</button>
        </div>

        <div class="create">
            <button @click="modalShow">향수 추가하기</button>
        </div>

        <div class="back">
            <Modal @submit="createPerfume"></Modal>
        </div>
    </div>
</template>

<script>
import { getPerfume, deletePerfume, createPerfume } from "@/api/perfume";
import Modal from '@/components/Modal';

export default {
    name: "PerfumePage",
    components: {
        Modal,
    },
    data() {
        return {
            perfumes: [],
        };
    },
    async created() {
        try {
            let { data } = await getPerfume();
            console.log(data);
            this.perfumes = data;
        } catch (e) {
            console.log(e);
        }
    },
    methods: {
        modalShow() {
            document.getElementById('modal').classList.remove('disable')
        },
        async createPerfume(form) {
            try {
                await createPerfume(form);
                let { data } = await getPerfume();
                this.perfumes = data;
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        },
        async deletePerfume(id) {
            try {
                await deletePerfume(id);
                let { data } = await getPerfume();
                this.perfumes = data;
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        }
    },
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
