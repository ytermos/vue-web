<script setup lang="ts">

import { getYesNo, type YesNoTipus } from '@/actions/getYesNo.actio';
import { Loader2 } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';


const quaestio = history.state.quaestio as string || 'No hay pregunta';
const router = useRouter();

const yesNo= ref<YesNoTipus>({
    
    answer: '',
    image: '',
 });

 const estLoading= ref<boolean>(true);

onMounted(async () => {
    try { 
    const responsum = await getYesNo();
    yesNo.value = responsum;
    estLoading.value = false;
        
    } catch (error) {
        console.log('Error', error);
        estLoading.value = false;
        
    }
   
})

</script>

<template>
<div class="text-center"> 
    <div v-if="estLoading">
    <img class="h-screen w-screen absolute top-0 left-0 object-cover" src="/imagines/github.jpg" alt="" />
	<div class="absolute w-screen h-screen top-0 left-0 bg-black opacity-40"></div>

    <div class="relative mt-[180px]">
		<p class="text-4xl text-white font-medium mt-14">
        {{ quaestio }}
        </p> 
            <div class="flex justify-center items-center mt-60">
                <Loader2 class="w-18 h-18 animate-spin text-white"/>
            </div>

</div>
    
</div>
<div v-else>
    <img v-if="yesNo.image === ''" class="h-screen w-screen absolute top-0 left-0 object-cover" src="/imagines/github.jpg" alt="" />
    <img v-else class="h-screen w-screen absolute top-0 left-0 object-cover" :src="yesNo.image" alt="" />

        <div class="relative mt-[180px]">
		<p class="text-4xl text-white font-medium mt-14">{{ quaestio }}</p> 
		<p class="text-6xl text-white font-bold mt-60"> 
        {{ yesNo.answer === 'yes' ? 'Sí!!' : 'No!!' }}
         </p> 
		<button 
        class="fixed top-5 right-5 w-12 h-12 bg-gray-700 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-600 transition-colors"
        @click="router.push('/')"
        >
			<span class="text-xl text-gray-300"> ➔ </span>
		</button>
	    </div>

</div>

</div>

</template>



<style scoped>

</style>






<!--
    
    <template>
<div class="w-[800px] h-[800px] border-2 m-4 grid grid-cols-4 grid-rows-3 gap-4">
    <div class="bg-sky-500 col-span-3 p-4 gap-4 flex flex-row-reverse items-end">
    <div class="bg-sky-200 w-18 h-full"></div>
    <div class="bg-white w-18 h-[60%] order-first"></div>
    <div class="bg-sky-200 w-18 h-[30%]"></div>
    <div class="bg-sky-800 w-18 h-full flex-1"></div>
    
    </div>



    <div class="bg-pink-500 row-span-3 flex flex-col justify-between items-center p-4">
    <div class="bg-pink-200 w-[80%] h-16"></div>
    <div class="bg-pink-200 w-full h-[60%]"></div>
    <div class="bg-pink-200 w-[40%] h-16 self-end"></div>
    </div>


    <div class="bg-lime-500 row-span-2 flex flex-col-reverse flex-wrap gap-4 p-4">
    <div class="bg-lime-200 w-12 h-[20%] "></div>
    <div class="bg-lime-200 w-12 h-[20%] "></div>
    <div class="bg-white w-12 h-[20%] order-first"></div>
    <div class="bg-lime-200 w-12 h-[20%] "></div>
    <div class="bg-white w-12 h-[20%] order-first "></div>
    <div class="bg-lime-200 w-12 h-[20%] "></div>
    
    </div>




    <div class="bg-amber-400 col-span-2 grid grid-cols-2 grid-rows-3 p-4 gap-3">
    <div class="bg-amber-100 col-span-2"></div>
    <div class="bg-white row-span-2"></div>
    <div class="bg-amber-100 "></div>
    <div class="bg-amber-100 "></div>

    </div>
    
    <div class="bg-violet-500 flex justify-center items-center">
    <div class="bg-violet-200 w-22 h-22 rounded-full "></div>

    </div>
    
    
    <div class="bg-teal-500 flex flex-wrap content-center gap-3 p-3 ">
        <div class="bg-teal-200 w-10 h-10"></div>
        <div class="bg-teal-200 w-10 h-10"></div>
        <div class="bg-teal-200 w-10 h-10"></div>
        <div class="bg-teal-200 w-10 h-10"></div>
        <div class="bg-teal-200 w-10 h-10"></div>

    </div>
</div>
</template>

-->
