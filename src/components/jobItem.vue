<template>
    <div class="job-item">
        <div class="job-img">
            <img src="../assets/logo.png" alt="job-item">
        </div>
        <div class="job-detail">
            <div class="info">
                <p>测试经理</p>
                <p>新浪科技</p>
                <p>北京 | 5-10年 | 本科</p>
            </div>
            <div class="salary">
                25K-40K
            </div>
            <div class="date">
                05月03日
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'job-item',
    data () {
        return {

        };
    },
    components: {

    }
};
</script>

<style lang="scss" scoped>
.job-item {
    display: flex;
    justify-content: center;
    .job-img {
        display: flex;
        flex: 1 1 auto;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .job-detail {
        display: flex;
        flex: 3 1 auto;
        justify-content: flex-start;
        .info {

        }
        .date {

        }
    }
}

</style>
