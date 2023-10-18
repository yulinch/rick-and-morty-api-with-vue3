<template>
    <div class="mt-32 mb-12 text-5xl">{{ pageTitle }}</div>
    <div>
        <div class="flex flex-auto flex-wrap w-full">
            <div class="item w-1/4 border-t-1 border-r-1 border-gray-600 cursor-pointer hover:bg-black transition-all duration-300 hover:transition-all" v-for="item in characterList" :key="item.id" @click="gotoDetail(item.id)" >
                <img class="w-full" :src="item.image" alt="">
                <div class="text-left p-6">
                    <div class="text-2xl font-bold mb-2">{{ item.name }}</div>
                    <div><i class="fa-solid fa-ghost"></i> {{ item.species }}</div>
                    <div><i class="fa-solid fa-venus-mars"></i> {{ item.gender }}</div>
                    <div :class="getStatus(item.status)"><i class="fa-solid fa-star-of-life"></i> {{ item.status }}</div>
                </div>
            </div>
        </div>
        <div class="mt-20">
            <button class="mr-2 bg-black border-0 text-gray-200 hover:opacity-70 disabled:opacity-100 disabled:bg-gray-900 disabled:text-gray-500" @click="pageChange(-1)" :disabled="currPage === 1">prev</button>
            <button class="border-0 bg-black text-gray-200 hover:opacity-70 disabled:opacity-100  disabled:bg-gray-900 disabled:text-gray-500" @click="pageChange(1)" :disabled="currPage === totalPage">next</button>
        </div>
    </div>
</template>

<script setup>
    import{ref} from "vue"
    import axios from "axios";
    import {useRouter} from "vue-router";
    const route = useRouter();
    const characterList = ref();
    const pageTitle = "Character";
    const currPage = ref(1);
    const totalPage = ref(0);

    const getAxios = () => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
            characterList.value = res.data.results;
        }).catch((error)=>{
            console.log(error)
        })
    };
    getAxios();

    const getStatus = (event) => {
        if(event == "Alive"){
            return "text-green-500";
        }else if(event == "Dead"){
            return "text-red-600";
        } else {
            return "text-gray-400";
        }
    }

    // Go to Detail Page
    const gotoDetail = (event) => {
        route.push({name: "Character Detail", state:{id: event}});
        // console.log(event);
    }

    // pagition
    const pageChange = (num) => {
        currPage.value +=num;
        const pageNum = currPage.value;
        axios.get("https://rickandmortyapi.com/api/character/?page=" + pageNum).then((res) => {
          characterList.value = res.data.results;
        }).catch((error)=>{
            console.log(error)
        })
    };



</script>

<style scoped>
.item:nth-child(4n){
    @apply border-r-0;
}
.item:nth-last-of-type(1),.item:nth-last-of-type(2),.item:nth-last-of-type(3),.item:nth-last-of-type(4){
    @apply border-b-1;
}
.fa-solid{
    @apply w-6 text-center
}
</style>
