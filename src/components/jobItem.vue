<template>
    <div class="job-item">
        <div class="job-img">
            <img src="../assets/logo.png" alt="job-item">
        </div>
        <div class="job-detail">
            <div class="left-side">
                <div class="name">测试经理</div>
                <div>
                  <p>新浪科技</p>
                <p>北京 | 5-10年 | 本科</p>
                </div>
            </div>
            <div class="right-side">
              <div class="salary">
                25K-40K
              </div>
              <div class="date">
                  05月03日
              </div>
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
    height: 5rem;
    border-bottom: 0.1rem solid #cccccc;
    display: flex;
    justify-content: center;
    .job-img {
        display: flex;
        flex: 1 1 auto;
        justify-content: center;
        align-items: center;
        img {
            width: 80%;
            height: 80%;
        }
    }
    .job-detail {
        display: flex;
        flex: 4 1 auto;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        .left-side {
          .name {
            display: inline;
            font-size: 0.8rem;
          }
        }
        .right-side {

        }
    }
}

</style>
