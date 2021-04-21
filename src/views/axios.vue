<template>
    <h1>axios</h1>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import axios from "@/utils/axios";
export default defineComponent({
    name: "HelloWorld",
    props: {
        msg: {
            type: String,
            required: true,
        },
    },
    setup: () => {
        const count = ref(0);
        axios
            .get("/users/xPoet")
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        return { count };
    },
});
</script>

<style scoped lang="scss">
h1 {
    background-color: rebeccapurple;
}
</style>
