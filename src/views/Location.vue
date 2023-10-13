<template>
    <div class="mt-32 mb-12 text-5xl">{{ pageTitle }}</div>
    <div>
        <div class="flex flex-auto flex-wrap w-full">
            <div class="item w-1/4 border-t-1 border-r-1 border-gray-600 cursor-pointer hover:bg-black transition-all duration-300 hover:transition-all" v-for="item in contentList" :key="item.id" @click="gotoDetail(item.id)" >
                <div class="text-left p-6">
                    <div class="text-2xl font-bold mb-2">{{ item.name }}</div>
                    <div>type: {{ item.type }}</div>
                    <div>Dimension: {{ item.dimension }}</div>
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
    import {useRouter} from 'vue-router';
    import pagition from '../components/elements/pagition.vue';
    const contentList = ref([]);
    const router = useRouter();
    const pageTitle = "Location";
    const currPage = ref(1);
    const totalPage = ref(0);

    // import Data content
    const getAxios = () => {
        axios.get("https://rickandmortyapi.com/api/location").then((res) => {
            contentList.value = res.data.results;
            totalPage.value = res.data.info.pages;
        }).catch((error)=>{
            console.log(error)
        })
    };
    getAxios();

    const gotoDetail= (event)=> {
        router.push({name: 'Location Detail', state:{id:event}});
    }

    // pagition
    const pageChange = (num) => {
        const numChange = currPage.value+num
        axios.get("https://rickandmortyapi.com/api/location/?page=" + numChange).then((res) => {
            contentList.value = res.data.results;
            currPage.value += num;
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
</style>
