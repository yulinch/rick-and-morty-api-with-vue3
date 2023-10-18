<template>
    <div class="mt-20">
        <button class="mr-2 bg-black border-0 text-gray-200 hover:opacity-70 disabled:opacity-100 disabled:bg-gray-900 disabled:text-gray-500" @click="pageChange(-1)" :disabled="currPage === 1">prev</button>
        <button class="border-0 bg-black text-gray-200 hover:opacity-70 disabled:opacity-100  disabled:bg-gray-900 disabled:text-gray-500" @click="pageChange(1)" :disabled="currPage === totalPage">next</button>
    </div>
</template>

<script>
    import{ref, defineProps} from "vue";
    // import axios from "axios";
    const currPage =defineProps("currPage")
    const totalPage =defineProps("totalPage")
    const type =defineProps("type")
    const pageChange = defineEmits(["pageChange"])

    // export default{
    //     name: 'pagition',
    //     setup(){
    //         const pageChange = (num) => {
    //             const numChange = currPage.value+num
    //             axios.get("https://rickandmortyapi.com/api/location/?page=" + numChange).then((res) => {
    //                 contentList.value = res.data.results;
    //                 currPage.value += num;
    //             }).catch((error)=>{
    //                 console.log(error)
    //             })
    //         };
    //     }
    // }
</script>

<style>

</style>


