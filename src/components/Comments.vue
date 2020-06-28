<template>
    <div >
        <div v-bind:key="comment.id" v-for="comment in comments"  >
            <CommentsItem  v-bind:comment="comment"  />
        </div>
    </div>
</template>

<script>
import CommentsItem from "../components/CommentsItem.vue";

export default {
    name: 'comments',
    components: {
        CommentsItem
    },
    props: ["comments"]
}
</script>

<style scoped>


</style>