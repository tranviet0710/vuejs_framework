<template>
    <div>
       <h1>List of members: </h1>
       <ul>
            <li v-for="member in xomnhala" :key="member.id"> {{member.name}}</li>
       </ul>
    </div>       
</template>


<script>
export default {
    data: function(){
        return{
            "xomnhala":
            [
                {"id": "1", "name":"viet"},
                {"id": "2", "name":"nguyen"},
                {"id": "3", "name":"dong"},
                {"id": "4", "name":"khoa"},
                {"id": "5", "name":"bao"},
                {"id": "6", "name":"a huy"},

            ]
        }
    }  
}
</script>

<style scoped>
h1{
    color: purple;
}
</style>

