<template>
     <div class="mt-32 mb-12 text-5xl">{{ pageTitle }}</div>
    <div>
        <div class="flex flex-auto flex-wrap w-full">
            <div class="item w-1/4 border-t-1 border-r-1 border-gray-600" v-for="item in contentList" :key="item.id" >
                <div class="text-left p-6">
                    <div>{{ item.episode }}</div>
                    <div class="text-2xl font-bold mb-2">{{ item.name }}</div>
                    <div><i class="fa-solid fa-tower-broadcast"></i> {{ item.air_date }}</div>
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
    const contentList = ref();
    const pageTitle = "Episode"
    const currPage = ref(1);
    const totalPage = ref(0);

    const getAxios = () => {
        axios.get("https://rickandmortyapi.com/api/episode").then((res) => {
            contentList.value = res.data.results;
            totalPage.value = res.data.info.pages;
            contentList.value.forEach(element => {
                element.episode =  element.episode.replace(/(S\d{2})(E\d{2})/, "$1 $2");
            })
        }).catch((error)=>{
            console.log(error)
        })
    };
    getAxios();
    const pageChange = (num) => {
        const numChange = currPage.value+num
        axios.get("https://rickandmortyapi.com/api/episode/?page=" + numChange).then((res) => {
            contentList.value = res.data.results;
            currPage.value += num;
            contentList.value.forEach(element => {
                element.episode =  element.episode.replace(/(S\d{2})(E\d{2})/, "$1 $2");
            })
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
    @apply w-6 text-center;
}
</style>

