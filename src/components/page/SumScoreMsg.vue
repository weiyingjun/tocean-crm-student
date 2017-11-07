<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>综合考评分查询</el-breadcrumb-item>

                </el-breadcrumb>
            </div>
        </template>
        <template>

            <div style="float:right">
                <span class="el_span">班级</span>
                <select v-model="class_selected" class="select_class">
                    <option v-for="option in class_options" v-bind:value="option.class">
                        {{ option.text }}
                    </option>
                </select>
                <span class="el_span">学员</span>
                <el-input class="el_input" v-model="name" type="text"
                          style="width: 180px"></el-input>

                <el-button
                    @click="selectStudentPositivity"  style="margin-left: 20px">查询</el-button>
            </div>
        </template>
        <el-collapse v-model="activeNames" style="margin-top: 70px;margin-left: 25px;padding: 20px; ">
            <span style="color: red">红色字体为在班级中名次</span>
                <el-table :data="table"  border style="width: 100%;margin-top: 10px">
                    <el-table-column
                        prop="stuName"
                        label="学员">
                    </el-table-column>
                    <el-table-column
                        prop="class"
                        label="班级" >
                    </el-table-column>
                    <el-table-column
                        prop="attendancePoints"
                        label="考勤扣分" width="95"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="disciplinaryPoints"
                        label="违纪扣分" width="95"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="praise"
                        label="表扬加分" width="95">
                    </el-table-column>
                    <el-table-column
                        prop="classPoints"
                        label="班级考评加分">
                    </el-table-column>
                    <el-table-column
                        prop="originalPionts"
                        label="原始分" width="90">
                    </el-table-column>

                    <el-table-column
                        prop="qualityScore"
                        label="职业素质分">
                    </el-table-column>
                    <el-table-column
                        prop="projectPoints"
                        label="项目分" width="90"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="operatingPoints"
                        label="作业分" width="90">
                    </el-table-column>
                    <el-table-column
                        prop="TabilityScore"
                        label="技术能力分">
                    </el-table-column>
                    <el-table-column
                        prop="CabilityScore"
                        label="沟通能力分">
                    </el-table-column>
                </el-table>


        </el-collapse>

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
                    attendancePoints:'1',
                    disciplinaryPoints:'2',
                    praise:'3',
                    classPoints:'4',
                    originalPionts:'5',
                    qualityScore:'6',
                    projectPoints:'7',
                    operatingPoints:'8',
                    TabilityScore:'9',
                    CabilityScore:'10',

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
            stuMessage:function(val){
                console.log(`当前页`);
                this.$router.push('/sumscoremsg');
            }

        }

    }
</script>
