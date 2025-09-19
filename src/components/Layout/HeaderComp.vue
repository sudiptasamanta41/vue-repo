<template>
    <div>
        <span>{{ appName }}</span>
    </div>
</template>

<script>
export default{
    props: [
        'appName'
    ]
}
</script>

<style scoped>
div{
    background-color: rgb(40, 40, 200);
    color: rgb(255, 255, 255);
    padding: 5px;
    border: solid 1px black;
    text-align: center;
}

span{
    font-weight: bold;
    font-size: xx-large;
}
</style>