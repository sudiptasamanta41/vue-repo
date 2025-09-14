<template>
    <page-name>Home</page-name>
    <div>
        <ul>
            <li v-for="value in pageText">
                {{ value }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageText: [],
        }
    },
    mounted() {
        this.pageText.push("This app is intended to make use of all features of Vue.js");
        this.pageText.push("*This app uses Vuetify as the UI component library.");
        this.pageText.push("Different features of the app can be access through the 'Navigate To' dropdown.");
    }
}
</script>