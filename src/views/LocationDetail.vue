<template>
    <div class="mt-32 mb-12 text-5xl">{{ content.name }}</div>
    <div>
        <div class="flex flex-auto flex-wrap w-full">
            <div class="item w-1/4 border-t-1 border-r-1 border-gray-600 cursor-pointer hover:bg-black transition-all duration-300 hover:transition-all" v-for="item in residents" :key="item.id">
                <img class="w-full" :src="item.image" alt="">
                <div class="text-left p-6">
                    <div class="text-2xl font-bold mb-2">{{ item.name }}</div>
                    <div>{{ item.status }}</div>
                    <div><i class="fa-solid fa-ghost"></i> Species: {{ item.species }}</div>
                    <div>{{ item.type }}</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    import{ref, onMounted} from "vue"
    import axios from "axios";
    import {useRoute} from 'vue-router';
    const content = ref([]);
    const residents = ref([]);
    const route = useRoute();

    const pageTitle = "Location Detail";
    // console.log('history.state', history.state.id);

    // import Data content
    const getAxios = (id) => {
        axios.get("https://rickandmortyapi.com/api/location/" + id).then((res) => {
            content.value = res.data;
            res.data.residents.forEach(element => {
                axios.get(element).then((res) => {
                    residents.value.push(res.data);
                })
            })
        }).catch((error)=>{
            console.log(error)
        })
    };

    onMounted(()=>{
        getAxios(history.state.id);
    });
</script>

<style scoped>
   .item:nth-child(4n){
        @apply border-r-0;
    }
    .item:nth-last-of-type(1),.item:nth-last-of-type(2),.item:nth-last-of-type(3),.item:nth-last-of-type(4){
        @apply border-b-1;
    }
</style>
