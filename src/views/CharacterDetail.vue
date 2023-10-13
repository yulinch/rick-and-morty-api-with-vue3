<template>
    <div class="mt-5 text-2xl">{{ content.name }}</div>
    <div class="container">
      <div>{{ content.status }}</div>
      <div>{{ content.gender }}</div>
      <div>{{ content.type }}</div>
      <div>{{ content.species }}</div>
      <!-- <div>First show: {{ content.origin }}</div> -->
        <div class="card-list">
            <div class="card" v-for="item in episode" :key="item.id">
                <img :src="item.image" alt="">
                <div class="text-lg font-bold my-4">{{ item.name }}</div>
                <div>{{ item.air_date }}</div>
                <div>{{ item.created }}</div>
            </div>
        </div>
    </div>

</template>

<script setup>
    import{ref, onMounted} from "vue"
    import axios from "axios";
    import {useRoute} from 'vue-router';
    const content = ref([]);
    const episode = ref([]);
    const route = useRoute();

    const pageTitle = "Character Detail";
    // console.log('history.state', history.state.id);

    // import Data content
    const getAxios = (id) => {
        axios.get("https://rickandmortyapi.com/api/character/" + id).then((res) => {
            content.value = res.data;
            res.data.episode.forEach(element => {
                axios.get(element).then((res) => {
                  episode.value.push(res.data);
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
    .card-list{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .card{
        position: relative;
        width: calc(25% - 2em);
        padding: 0 0 1.5rem;
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
        font-weight: bold;
        text-align: center;
        font-size: 1.5em;
        margin-bottom: 0.2em;
    }
    .btn-outline{
        border: 2px solid darkblue;
        background-color: #fff;
        color: darkblue;
    }
</style>
