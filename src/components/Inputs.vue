<template>
<p><strong>Choisissez votre rangée</strong></p>
<button v-for="i in [ 1, 2, 3, 4, 5, 6, 7, 8 ]" :key="i" value="i" @click="chooseRow(i)"> {{ i }}</button>
<p><strong>Indiquez le nombre de places souhaitées</strong></p>
<input type="number" value="0" id="input" @blur="askForPlaces"/>      
</template>

<script>

export default {
    methods: {
        chooseRow(i){
            console.log(i)
            this.$emit('row-is-chosen', i)
        },
        askForPlaces(){
            let val = document.querySelector('#input').value
            console.log(val)
            this.$emit('number-of-places', val)
        }
    }
}
</script>

<style>

</style>