<template>
    <div>Profile</div>
    <XDropdown :title="`hello `">
        <x-dropdown-item>
            <router-link :to="`/home`" class="dropdown-item">新建文章</router-link>
        </x-dropdown-item>
    </XDropdown>
</template>

<script>
import { defineComponent } from 'vue'
import XDropdown from '@/components/XDropdown/XDropdown.vue'
import XDropdownItem from '@/components/XDropdown/XDropdownItem.vue'

export default defineComponent({
    name: 'Profiles',
    components: { XDropdown, XDropdownItem },
    setup() {}
})
</script>

<style></style>
