<template>
<div>             
    <div style="width:100%; margin-top:30px;margin-bottom:20px;">
    <input type="text" id="com" class="my-comment" v-model="myComment" placeholder="leave a comment..." @input="enableButton">
    </div>

    <button style="margin-bottom:10px;" id="comment-button" disabled @click="$emit('add-comment', myComment); myComment=null;disableButton()" >Comment</button>
</div>
</template>

<script>
export default {
    name: 'add-comment',

    data() {
        return {
            myComment: null
        }
    },

    methods: {
    enableButton() { document.getElementById("comment-button").disabled = false; },
    disableButton() { document.getElementById("comment-button").disabled = true;}

    }
}
</script>

<style >
.my-comment{
    background: white;
    font-family: Roboto, sans-serif;
    filter: none;
    width: 90%;
    max-width: 100vw;
    height: auto;
    padding: 10px 10px;
    font-size: 14px;
    color: #2c2c2c;
    margin: none;
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color:#aaa ;
    border-radius: 0px;
    align: left;
}
</style>