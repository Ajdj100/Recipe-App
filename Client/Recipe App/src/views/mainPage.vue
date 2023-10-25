<template>
    <div class="bg-green-light h-screen overflow-clip">
        <navbar></navbar>
        <!-- content -->
        <div class="h-full bg-inherit px-[126px]">
            <RouterView />
        </div>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue';

export default {
    components: {
        navbar
    }
}
</script>