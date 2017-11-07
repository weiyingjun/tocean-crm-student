<template>
    <div>
        <div class="plugins-tips" >
            <span class="Survey-list-management">当前功能：</span>
            调查列表管理
    </div>
        <div class="table-list">
            <div class="list">
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="调查列表( + 单击标题栏展开)" name="1" >
                        <div class="Table_Conent" id="Menu1">
                            <table align="center" cellpadding="100%" cellspacing="5" width="100%"
                                   class="list-table" border="0">
                                <tr>
                                    <td>
                                        序号
                                    </td>
                                    <td>
                                        调查名称
                                    </td>
                                    <td>
                                        调查内容
                                    </td>
                                    <td>
                                        考评对象
                                    </td>
                                    <td>
                                        调查时间
                                    </td>
                                    <td>

                                    </td>
                                </tr>


                            </table>
                        </div>


                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>
</template>
<style>
    .plugins-tips{
        color: #1A43A9;
    }
    .Survey-list-management{
        font-size: small;
        color: #5e7382;
    }
    .list-table{
        background-color: #EEF7FD;
        color: #5e7382;
    }
</style>
<script>
    export default{
        data(){
            return {
                activeNames: ['1']
            }
        },
        methods: {}
    }
</script>
