<template>
<div>
    <table width="100%" class="table">
        <caption>
            <h3>
                {{title}}
            </h3>
        </caption>
        <thead>
            <tr>
                <th v-for="(item, index) in head" :key="index">
                    {{item}}
                </th>
            </tr>
        </thead>
        <tr v-for="(item, index) in data" :key="index">
            <td v-for="(cellItem, index) in item" :key="index">
                {{cellItem}}
            </td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: "myTable",
    props:{
        data: Array,
        head: Array
    },
    data(){
        return{
            title: 'New Appointments'
        }
    }
}
</script>

<style scoped>
    table
    {
        border-collapse: collapse;
        margin: 0 auto;
        text-align: center;
    }
    table td, table th
    {
        border: 1px solid #cad9ea;
        color: #666;
        height: 30px;
    }
    table thead th
    {
        background-color: #CCE8EB;
        width: 100px;
    }
    table tr:nth-child(odd)
    {
        background: #fff;
    }
    table tr:nth-child(even)
    {
        background: #F5FAFA;
    }
</style>
