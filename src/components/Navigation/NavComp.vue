<template>
    <div>
        <table>
            <tbody>
            <tr>
                <td>
                    <label for="options">Navigate to - </label>
                </td>
                <td>
                    <select id="options" name="options" @change="navigate()" v-model="selectedRoute">
                        <option value="/Home">Home</option>
                        <option value="/Controls">Controls</option>
                        <option value="/Directives">Directives</option>
                        <option value="/CRUD">CRUD</option>
                    </select>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default{
    data(){
        return{
            selectedRoute: '/Home'
        }
    },
    methods:{
        navigate(){
            // console.log(this.selectedRoute);
            this.$router.push(this.selectedRoute);
        }
    }
}
</script>
<style scoped>
div {
    background-color: rgb(0, 0, 0);
    border-top: solid 1px rgb(255, 255, 255);
    color: white;
    padding: 5px 0 5px 10px;
}
</style>