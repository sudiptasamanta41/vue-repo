<template>
    <div>
        <span>
            <slot></slot>
        </span>
    </div>
</template>
<style scoped>
div{
border: solid 2px black;
margin: 2px;
background-image: linear-gradient(lightseagreen, black);
padding: 5px;
text-align: center;
}
span{
color: white;
font-weight: bold;
}
</style>