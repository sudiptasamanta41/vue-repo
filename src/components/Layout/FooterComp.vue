<template>
    <div>
        Copyright © {{ propData.yearValue }} - {{ propData.name }}
    </div>
</template>

<script>
export default{
    props:{
        propData: {
            type: Object,
            default: () => ({})
        }
    },
    mounted(){
        console.log(this.propData)
    }
}
</script>

<style scoped>
div {
    background-color: rgb(40, 40, 200);
    color: rgb(255, 255, 255);
    padding: 5px;
    border: solid 1px black;
    text-align: center;
}
</style>