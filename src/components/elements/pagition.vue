<template>
    <div class="mt-10">
        <button class="mr-2 disabled:bg-gray-700 border-0 text-gray-400" @click="pageChange(-1)" :disabled="currPage === 1">prev</button>
        <button class=" disabled:bg-gray-700 border-0 text-gray-400" @click="pageChange(1)" :disabled="currPage === totalPage">next</button>
    </div>
</template>

<script>
    import{ref} from "vue";
    import axios from "axios";
    export default{
        // name: 'pagition',
        setup(){
            const currPage = ref(1);
            const totalPage = ref(0);
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
            return {
                currPage, totalPage,pageChange
            }
        }
    }
</script>

<style>

</style>


