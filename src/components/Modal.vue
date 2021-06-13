<template>
    <div class="modal disable" id="modal">
        <div class="container">
            이름 : <input type="text" v-model="form.name" /><br>
            내용 : <input type="text" v-model="form.description" /><br>
            가격 : <input type="number" v-model="form.price" /><br>
            <button @click="submit">전송하기</button><button @click="modalClose" >닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    data() {
      return {
          form: {
              name: '',
              description: '',
              price: '',
          },
      };
    },
    methods: {
        modalClose() {
            document.getElementById('modal').classList.add('disable');
        },
        submit() {
            this.$emit('submit', this.form);
        }
    }
}
</script>

<style scoped>
.modal {
    position: absolute;
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.disable {
    display: none;
}
</style>
