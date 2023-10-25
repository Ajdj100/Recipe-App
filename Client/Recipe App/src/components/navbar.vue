<template>
    <div class="w-screen h-20 drop-shadow-lg bg-inherit flex items-center justify-between px-[126px]">
        <p class="mx-14">logo</p>
        <div class="flex justify-around w-full">
            <a>Trending</a>
            <a>Recipes</a>
            <a>Meals</a>
            <a>Cuisines</a>
            <a>Dietary</a>
            <a>About Us</a>
        </div>
        <!-- search bar -->
        <div class="w-full">
            <input type="text" v-model="searchText" placeholder="What are you looking for?"
                class="border border-grey-near rounded-md focus:outline-none py-1 px-2 mb-5 w-72">
        </div>
        <!-- profile -->
        <div>
            <div class="h-12 w-12 bg-green-dark rounded-full" @click="profileDropdown = true">

            </div>
            <!-- profile options -->
            <div v-show="profileDropdown">

            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            searchText: '',
            profileDropdown: false,

        }
    }
}

</script>