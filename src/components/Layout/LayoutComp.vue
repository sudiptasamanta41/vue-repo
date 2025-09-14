<script>
import NavComp from '../Navigation/NavComp.vue';
import BodyComp from './BodyComp.vue';
import FooterComp from './FooterComp.vue';
import HeaderComp from './HeaderComp.vue';
export default {
    components: {
        "HeaderComp": HeaderComp,
        "BodyComp": BodyComp,
        "FooterComp": FooterComp
    },
    data() {
        return {
            objValue: {
                name: "Sudipta",
                yearValue: Number
            }
        }
    },
    methods: {

    },
    mounted() {
        this.objValue.yearValue = new Date().getFullYear()
    }
}
</script>
<template>
    <div>
        <HeaderComp app-name="Vue Practice App - Javascript"></HeaderComp>
        <NavComp></NavComp>
        <BodyComp></BodyComp>
        <FooterComp :prop-data="objValue"></FooterComp>
    </div>
</template>