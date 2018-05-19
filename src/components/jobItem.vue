<template>
    <div class="job-item">
        <div class="job-img">
            <img :src="jobInfo.firm.logo" alt="job-item">
        </div>
        <div class="job-detail">
            <div class="left-side">
                <div class="name">{{jobInfo.jobName}}</div>
                <div class="light-color">{{jobInfo.firm.name}}</div>
                <div class="light-color">{{jobInfo.cityName | jobInfo.cityAddress | jobInfo.workYear}} | 5-10年 | 本科</div>
            </div>
            <div class="right-side">
              <div class="salary">
                {{jobInfo.workWage}}K
              </div>
              <div class="date light-color">
                  {{jobInfo.updateTime}}
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'job-item',
    props: {
        jobInfo: {
            type: Object,
            default: function () {
                return {};
            }
        }
    },
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
    height: 120px;
    border-bottom: 1px solid #cccccc;
    padding: 10px;
    display: flex;
    justify-content: center;
    .job-img {
        display: flex;
        flex: 1 1 auto;
        justify-content: center;
        align-items: center;
        img {
            width: 100px;
            height: 100px;
        }
    }
    .job-detail {
        padding: 10px;
        display: flex;
        flex: 4 1 auto;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        .light-color {
            color: #666666;
        }
        .left-side {
            line-height: 34px;
            text-align: left;
            .name {
                color: #000000;
            }
        }
        .right-side {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;
            .salary {
                color: orange;
            }
            .date {
                font-size: 0.8rem;
            }
        }
    }
}

</style>
