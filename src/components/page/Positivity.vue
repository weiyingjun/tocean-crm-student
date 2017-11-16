<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>班级考评积极性查询</el-breadcrumb-item>

                </el-breadcrumb>
            </div>
        </template>

        <el-collapse v-model="activeNames" style="margin-top: 20px">
            <el-collapse-item title="班级考评积极性列表 " name="1">
                <el-table :data="table" border >
                    <el-table-column prop="stuName" label="学员"></el-table-column>
                    <el-table-column prop="class" label="班级" ></el-table-column>
                    <el-table-column prop="takeTimes" label="参与考评次数"></el-table-column>
                    <el-table-column prop="validityTimes" label="有效次数"></el-table-column>
                    <el-table-column prop="score" label="得分"></el-table-column>

                </el-table>
            </el-collapse-item>

        </el-collapse>

    </div>
</template>
<style>

</style>
<script>
    export default {
        data() {
            return {
                currentPage1: 1,
                name: '',
                activeNames: ['1'],


                table: [],



            }
        },
        created(){
            this.getData();
        },
        methods: {
            getData(){
                let self = this;
                if (process.env.NODE_ENV === 'development') {
                    self.url = 'student/api/parise/list';
                }
                self.$axios.get(self.url).then((res) => {
                    self.table = res.data.result;

                })

            },
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
                this.$router.push('/studentmessage');
            }

        }

    }
</script>
