<template>
    <div>
        <div class="">
            <div class="plugins-tips" >
                <span class="Survey-list-management">当前功能：</span>
                上传简历信息
            </div>
            <div class="Menu">
                <button class="Menu-btn"  style="width:50px;height: 30px" @click="open()">提交</button>
            </div>
        </div>
        <div class="list"  >
            <div class="list-table">
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="基本资料( + 单击标题栏展开)" name="1" >
                        <div class="list-info">
                            <table align="center" cellpadding="100%" cellspacing="5" width="100%"
                                   class="info-item" border="0">
                                <tr>
                                    <td align="right">简历:</td>
                                    <td class="" colspan="4">
                                        <div class="info-con">
                                            <form action="" method="get">
                                                <input id="text" type="file" name="img" multiple="multiple"/>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </el-collapse-item>
                </el-collapse>
            </div>

        </div>
        <div class="btn-table" >
            <button class="btn" @click="sub()">确认提交</button>
            <button class="btn"  @click="clean()">重新输入</button>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {

                activeNames: ['1']
            };
        },
        methods: {
            open(){
                alert("系统异常，该功能不可用!");
            },
            sub(){
                alert("系统异常，该功能不可用!");
            },
            clean(){

                document.getElementById('text').value = "";

            }
        }
    }

</script>

<style scoped>

    .plugins-tips{
        color: #1A43A9;
        height: 5px;
    }
    .Survey-list-management{
        font-size: small;
        color: #5e7382;

    }
    .Menu{
        background-color: #EEF1F6;
        height: 50px;
        width: 100%;
        text-align: right;
        margin-bottom: 15px;
    }
    .Menu-btn{
        background-color: #E3E3E3;
        color:#000000;
        margin: 8px;
    }

    .list-info{
        height: 50px;
        background-color: #ffffff;
    }
    .info-item{
        background-color: #EEF7FD;
        color: #5e7382;
    }
    .info-con{
        background-color: #ffffff;
        border:1px solid #89B2DA;
        border-bottom: 1px;
        padding: 3px;
    }
    .btn-table{
        height: 40px;
        width: 100%;
        background-color:#EEF7FD;
        text-align: center;

    }
    .btn{
        border-bottom: 5px ;
        margin: 10px;
    }
</style>


