<template>
    <splitpanes class="default-theme" vertical style="height: 100vh">
        <pane size="20" min-size="15" max-size="25">
            <div style="padding: 30px"><span>Contextual Navigation</span></div>
        </pane>
        <pane size="80">
            <div style="padding: 30px"><span>Editor</span></div>
        </pane>
    </splitpanes>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'

export default defineComponent({
    name: 'SplitPanes',
    components: {
        Splitpanes,
        Pane
    },
    setup() {}
})
</script>

<style lang="scss"></style>
