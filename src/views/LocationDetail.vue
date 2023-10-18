<template>
    <div class="mt-32 mb-12 text-5xl">{{ content.name }}</div>
    <div>
        <div class="flex flex-auto flex-wrap w-full">
            <div class="item w-1/4 border-t-1 border-r-1 border-gray-600 cursor-pointer hover:bg-black transition-all duration-300 hover:transition-all" v-for="item in residents" :key="item.id">
                <img class="w-full" :src="item.image" alt="">
                <div class="text-left p-6">
                    <div class="text-2xl font-bold mb-2">{{ item.name }}</div>
                    <div><i class="fa-solid fa-ghost"></i> {{ item.species }}</div>
                    <div><i class="fa-solid fa-venus-mars"></i> {{ item.gender }}</div>
                    <div :class="getStatus(item.status)"><i class="fa-solid fa-star-of-life"></i> {{ item.status }}</div>
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
    // console.log(route.params);

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

    const getStatus = (event) => {
        if(event == "Alive"){
            return "text-green-500";
        }else if(event == "Dead"){
            return "text-red-600";
        } else {
            return "text-gray-400";
        }
    }

    onMounted(()=>{
        // getAxios(history.state.id);
        getAxios(route.params.id);
    });
</script>

<style scoped2>
 .item:nth-child(4n){
    @apply border-r-0;
}
.item:nth-last-of-type(1),.item:nth-last-of-type(2),.item:nth-last-of-type(3),.item:nth-last-of-type(4){
    @apply border-b-1;
}
.fa-solid{
    @apply w-6 text-center;
}
</style>
