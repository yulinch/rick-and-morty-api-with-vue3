<template>
    <h2 class="my-10 text-5xl">{{ pageTitle }}</h2>
    <div class="container">
        <div class="card-list">
            <div class="card" v-for="item in contentList" :key="item.id">
                <div class="item-id">{{ item.id }}</div>
                <div class="item-name text-2xl font-bold">{{ item.name }}</div>
                <div class="item-date">air date:{{ item.air_date }}</div>
                <div class="item-episode">{{ item.episode }}</div>
                <div class="item-created">created: {{ item.created }}</div>
            </div>
        </div>
        <div class="pagination mt-4">
            <button class="page-prev mr-2 disabled:bg-gray-700 border-0 text-gray-400" @click="pageChange(-1)" :disabled="currPage === 1">prev</button>
            <button class="page-next disabled:bg-gray-700 border-0 text-gray-400" @click="pageChange(1)" :disabled="currPage === totalPage">next</button>
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
        }).catch((error)=>{
            console.log(error)
        })
    };
</script>

<style scoped>
    .card-list{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .card{
        position: relative;
        width: calc(25% - 2em);
        padding: 1.5em .5em;
        border: 1px solid #333;
        border-radius: 1em;
        margin: 0.4rem;
        overflow: hidden;
    }
    .card a{
        color:#eee;
    }
    .item-id{
        position: absolute;
        left: 0;
        top: 0;
        width: 2em;
        padding: 0.2em;
        border: 1px solid #333;
        border-radius: .3em;
        text-align: center;
    }
    .item-name{
        /* font-weight: bold; */
        text-align: center;
        /* font-size: 1.5em; */
        margin-bottom: 0.2em;
    }
    .btn-outline{
        border: 2px solid darkblue;
        background-color: #fff;
        color: darkblue;
    }
</style>
