<template>
    <page-name>CRUD Component using .Net API</page-name>
    <div>
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>User Age</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in userlist">
                    <td>{{ user.USERID }}</td>
                    <td>{{ user.USERNAME }}</td>
                    <td>{{ user.USERAGE }}</td>
                    <td style="text-align: center;">
                        <button type="button">Edit</button>
                        <button type="button">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            base_url: "https://localhost:44375/",
            userlist: []
        }
    },
    mounted() {
        axios.get(this.base_url + 'api/GetAllUsers')
            .then(response => {
                this.userlist = response.data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}
</script>
<style scoped>
table{
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
}
td{
    border: black solid 1px;
}
th{
    background-color: rgb(255, 235, 52);
    border: black solid 1px;
}
button{
    min-width: 80px;
    background-color: rgb(0, 0, 0);
    color: white;
    border-radius: 0;
    cursor: pointer;
    border: solid 1px rgb(0, 0, 0);
    margin: 2px;
}
button:hover{
    background-color: rgb(200, 0, 0);
}
</style>