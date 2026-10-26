
<script lang="ts">
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import Button from '@/components/ui/button/Button.vue';


</script>

<template>
   
<div class="bg-simpsons-yellow min-h-screen text-center p-4 flex flex-col items-center justify-center">
	
	<LogoSimpsons estilus="w-[24rem] sm:w-[35rem]" />

	
	
	
	<h1 class="text-xl my-1 font-medium">
    	Discover some of the most amazing Quotes from The Simpsons
	</h1>
	<div>
    	<strong>This is an unofficial app (even though it looks so cool!)</strong>
	</div>
	<div className="mt-8 flex gap-5">
		<Button class="bg-white text-base border border-black hover:bg-simpsons-red focus:bg-simpsons-red rounded-none h-7.5 py-0.5 px-5">
      		<RouterLink to="/">Exit</RouterLink>
    	</Button>
    	<Button>
      		<RouterLink to="/simpson/about">Enter</RouterLink>
    	</Button>
		
	</div>
	<div class="flex gap-3">
		<img class="object-contain hidden md:block" src="/imagines/simpsons/bart.png" width="200px"/>
		<img class="object contain hidden md:block" src="/imagines/simpsons/homer.png" width="195px"/>
		<img class="object contain mt-12 md:mt-0" src="/imagines/simpsons/moe.png" width="220px"/>
	</div>
</div>

</template>

