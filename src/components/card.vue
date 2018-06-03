<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script type="text/javascript">
export default {
    // 不要忘记了 name 属性
    name: 'card'
};
</script>

<style scoped lang="scss">
.card {
    background: #fff;
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    padding: 15px 10px;
    margin-bottom: 10px;
}

</style>
