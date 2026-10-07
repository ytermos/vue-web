<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

 

</script>




<template>
    <div class="fondo-home">

        <h1>
            <span>Diseño </span>Web y
            <br/>
            Apps <span>Interactivas</span>
        </h1>

    <div class="botones">
        <Button variant="default">
        <RouterLink to="/Indecision">Sí o No</RouterLink>
        </Button>
        
        <Button variant="default">
        <RouterLink to="/Batman">Batman</RouterLink>
        </Button>
        
        <Button variant="default">
        <RouterLink to="/Simpson">Simpson</RouterLink>
        </Button>

        <Button variant="default">
        <a href="https://www.upv.es/">UPV</a>
        </Button>
    
    </div>
    </div>
</template>

<style scoped>
.fondo-home {
    background-color: rgb(21, 25, 52);
    height: 100vh;
    color: rgb(24, 182, 246)

}

.botones > button {
    background-color: rgb(24, 182, 246);
    margin-right: 0.5rem;

}

.botones > button:hover {
    background-color: rgba(24, 182, 246, 0.7);
    
}
</style>