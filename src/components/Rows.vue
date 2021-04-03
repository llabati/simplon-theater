<template>
    <ul>
        <li v-for="row in rows" :key="row.id">
            <Row :id="id"/>
        </li>
    </ul>
</template>

<script>

import Row from './Row.vue'

export default {
    components: {
        Row
    }
}
</script>

<style>

</style>