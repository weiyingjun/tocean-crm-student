<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>学员表扬信息查询</el-breadcrumb-item>

                </el-breadcrumb>
            </div>
        </template>
        <template>

            <div>
                <span class="el_span">班级</span>
                <select v-model="class_selected" class="select_class">
                    <option v-for="option in class_options" v-bind:value="option.class">
                        {{ option.text }}
                    </option>
                </select>
                <span class="el_span">学员</span>
                <el-input class="el_input" v-model="name" type="text"
                          style="width: 200px"></el-input>
                <span class="el_span">时间</span>
                <el-input class="el_input" v-model="mTime" type="text"
                          style="width: 220px"></el-input>
                <span class="el_span">至</span>
                <el-input class="el_input" v-model="bTime" type="text"
                          style="width: 220px"></el-input>

                <el-button
                    @click="selectStudentLeave"  style="margin-left: 20px">查询</el-button>
            </div>
        </template>
        <el-collapse v-model="activeNames" style="margin-top: 20px">
            <el-collapse-item title="学员表扬信息列表" name="1">
                <el-table
                    :data="table"
                    height="500"
                    border
                    style="width: 100%;margin-top: 10px"

                >
                    <el-table-column
                        prop="stuOrder"
                        label="序号"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="stuName"
                        label="学员"
                        width="150"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="class"
                        label="班级"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="praiseTime"
                        label="表扬时间"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="praiseReasons"
                        label="表扬原因"
                       >
                    </el-table-column>
                    <el-table-column
                        prop="praiseBonus"
                        label="表扬加分"width="150">
                    </el-table-column>

                </el-table>
            </el-collapse-item>

        </el-collapse>
        <template>
            <div>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage1"
                    :page-sizes="[10,20,50]"
                    :page-size="10"
                    layout=" ->,prev,pager,next, jumper,sizes,total,slot"
                    :total="1000">
                </el-pagination>
            </div>
        </template>
    </div>
</template>
<style>
    .el_input {
        width: 180px;
        margin-left: 10px;
        margin-top: 20px;
    }

    .el_span {
        margin-left: 10px;
    }

    .select_class {
        margin-left: 10px;
        margin-top: 20px;
        height: 35px;
        width: 100px;
    }
</style>
<script>
    export default {
        data() {
            return {
                currentPage1: 1,
                name: '',
                mTime:'',
                bTime:'',
                activeNames: ['1'],

                class_selected: '',
                class_leave:'',
                class_options: [
                    {text: '', class: ''},
                    {text: 'ASD08061', class: '1'},
                    {text: 'ASD08063', class: '2'},
                    {text: 'ASD08062', class: '3'},
                    {text: 'ASD0807', class: '4'},
                ],
                table: [{
                    stuOrder: '1	',
                    stuName: '张义增',
                    class: 'SD0806',
                    praiseTime:'2008-12-03',
                    praiseReasons:'积极参与志愿者活动',
                    praiseBonus:'5'
                }],



            }
        },
        methods: {
            selectStudentLeave: function (val) {

                this.$router.push('/studentfiles');
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            stuMessage:function(val){
                console.log(`当前页`);
                this.$router.push('/studentmessage');
            }

        }

    }
</script>
