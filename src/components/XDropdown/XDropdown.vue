<template>
    <div class="dropdown" ref="dropRef">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click="toggleOpen">{{
            title
        }}</a>
        <ul class="dropdown-menu" style="display: block" v-if="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'

export default defineComponent({
    name: 'XDropdown',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup() {
        const isOpen = ref(false)
        const dropRef = ref<null | HTMLElement>(null)
        const toggleOpen = () => {
            isOpen.value = !isOpen.value
        }
        const isClickOutside = useClickOutside(dropRef)

        watch(isClickOutside, () => {
            if (isOpen.value && !isClickOutside.value) {
                console.log('watch')

                isOpen.value = false
            }
        })

        return {
            isOpen,
            toggleOpen,
            dropRef
        }
    }
})
</script>
