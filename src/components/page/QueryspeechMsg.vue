<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>录入学员演讲信息</el-breadcrumb-item>

                </el-breadcrumb>
            </div>
        </template>
        <template>
            <div style="float:right">
                <el-button
                    @click="selectStudentPositivity" style="margin-left: 20px">返回
                </el-button>
            </div>
        </template>
        <el-collapse v-model="activeNames" style="margin-top: 70px;margin-left: 25px">
            <el-collapse-item title="基本资料 " name="1">
                <table border="1" style="width: 900px;height: 500px">
                    <tr>
                        <th class="left" >
                            <span class="mdiv">学员</span>
                        </th>
                        <th class="right">
                            <div>
                            <select v-model="class_selected" class="select_class">
                                <option v-for="option in class_options" v-bind:value="option.class">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                            <div>
                                <select v-model="class_selected" class="select_class">
                                    <option v-for="option in class_options" v-bind:value="option.class">
                                        {{ option.text }}
                                    </option>
                                </select>
                            </div></th>
                        <th class="left"><span class="mdiv">演讲日期</span></th>
                        <th class="right"><span ></span></th>
                    </tr>
                    <tr>
                        <th class="left" >
                            <span class="mdiv">演讲内容</span>
                        </th>
                        <th class="right"><textarea style="width: 300px">Struts知识回顾</textarea></th>
                    </tr>
                    <tr>
                        <th>Month</th>
                        <th>Savings</th>
                    </tr>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                    </tr>
                </table>




            </el-collapse-item>
        </el-collapse>

    </div>
</template>
<style>
    .mdiv {
        text-align: center;
        font-size: 15px;
    }
    .left{
       height: 50px;width: 80px
    }
    .right{
        height: 50px;width: 300px
    }
</style>
<script>
    export default {
        data() {
            return {
                currentPage1: 1,
                name: '',
                mTime: '',
                bTime: '',
                activeNames: ['1'],

                class_selected: '',
                class_options: [
                    {text: '', class: ''},
                    {text: 'ASD08061', class: '1'},
                    {text: 'ASD08063', class: '2'},
                    {text: 'ASD08062', class: '3'},
                    {text: 'ASD0807', class: '4'},
                ],

                table: [{
                    stuOrder: '1	',
                    stuName: '吴良飞',
                    class: 'SD0806',
                    takeTimes: '1',
                    validityTimes: '1',
                    score: '2'

                }],


            }
        },
        methods: {
            selectStudentPositivity: function (val) {

                this.$router.push('/studentfiles');
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            stuMessage: function (val) {
                console.log(`当前页`);
                this.$router.push('/studentmessage');
            }

        }

    }
</script>
