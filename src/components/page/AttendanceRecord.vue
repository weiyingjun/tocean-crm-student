<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>学员考勤信息查询</el-breadcrumb-item>

                </el-breadcrumb>
            </div>
        </template>

        <el-collapse v-model="activeNames" style="margin-top: 20px">
            <el-collapse-item title="学员考勤信息列表 " name="1">
                <el-table :data="table" border >
                    <el-table-column prop="studentName" label="姓名"></el-table-column>
                    <el-table-column prop="class" label="班级"></el-table-column>
                    <el-table-column prop="start_date" label="日期" :formatter="timeDataFormatter"></el-table-column>
                    <el-table-column prop="start_date" label="开始时间" :formatter="timeDataFormatter2"></el-table-column>
                    <el-table-column prop="end_date" label="结束时间" :formatter="timeDataFormatter3"></el-table-column>
                    <el-table-column prop="status" label="状态" width="110"></el-table-column>
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
                activeNames: ['1'],
                table: [],
          //      table2: []


            }
        },
        created(){
            this.getData();
          //  this.getData2();
        },
        methods: {
            timeDataFormatter(row, col){
                return row.start_date.substring(0, 11);
            },
            timeDataFormatter2(row, col){
                return row.start_date.substring(11, 19);
            },
            timeDataFormatter3(row, col){
                return row.end_date.substring(11, 19);
            },

            getData(){
                let self = this;
                if (process.env.NODE_ENV === 'development') {
                    self.url = 'student/api/attendance/list';
                }
                self.$axios.get(self.url).then((res) => {
                    self.table = res.data.result;
                })
            },
            //测试
          /*  getData2(){
                let self = this;
                if (process.env.NODE_ENV === 'development') {
                    self.url = 'student/api/info/list';
                }
                self.$axios.get(self.url).then((res) => {
                    self.table2 = res.data.result;

                    var studentName=[];
                    for (var i = 0; i < self.table.length; i++) {
                        if (self.table2.id = self.table[i].studentId) {
                            studentName.push(self.table2.studentName);
                        }
                    }
                    Array.prototype.push.apply(studentName, self.table);
                    console.log(studentName);

                })
            },*/
            stuMessage: function (val) {
                console.log(`当前页`);
                this.$router.push('/studentmessage');
            }

        }

    }
</script>
