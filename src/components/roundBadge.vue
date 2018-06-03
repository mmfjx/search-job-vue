<template>
    <div class="round-badge">
        <slot></slot>
    </div>
</template>

<script type="text/javascript">
export default {
    // 不要忘记了 name 属性
    name: 'round-badge'
};
</script>

<style scoped lang="scss">
.round-badge {
    border: solid 1px #ccc;
    border-radius: 20px;
    color: #666;
    min-width: 40px;
    display: inline-block;
    padding: 5px 10px;
    background-color: #ffffff;
    font-size: 0.8rem;
    margin: 5px;
}

</style>
