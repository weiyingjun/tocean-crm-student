<template>
    <div class="nav">
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>学员档案</el-breadcrumb-item>
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


                <span class="el_span">学员</span><el-input class="el_input" v-model="name" type="text"
                                                         style="width: 200px"></el-input>
                <span class="el_span">性别</span>
                <select v-model="sex_selected" class="select_class">
                <option v-for="option in sex_options" v-bind:value="option.sex">
                    {{ option.text }}
                </option>
            </select>

                <span class="el_span">毕业学校</span><el-input class="el_input" v-model="school" type="text"
                                                           style="width: 420px"></el-input>
                <span class="el_span">院系</span><el-input class="el_input" v-model="department"type="text"
                                                         style="width: 210px"></el-input>
                <span class="el_span">专业</span><el-input class="el_input" v-model="collegeMajor"type="text"
                                                         style="width: 340px"></el-input>
                <span class="el_span">学历</span>
                <select v-model="educational_selected" class="select_class">
                    <option v-for="option in educational_options" v-bind:value="option.educational">
                        {{ option.text }}
                    </option>
                </select>
                <span class="el_span">联系电话</span><el-input class="el_input" v-model="phone"type="text"></el-input>
                <span class="el_span">就业薪资</span><el-input class="el_input" v-model="SSalary"type="text"
                                                           style="width: 90px"></el-input>
                <span class="el_span">到</span><el-input class="el_input" v-model="BSalary"type="text"
                                                        style="width: 90px"></el-input>
                <span class="el_span">就业公司</span><el-input class="el_input" v-model="company"type="text"
                                                         style="width: 260px"></el-input>
                <span class="el_span">就业职位</span><el-input class="el_input" v-model="headShip"type="text"
                                                           style="width: 130px"></el-input>
                <el-button type="primary" plain class="el_input" style="width: 80px">查询</el-button>
                <el-button type="primary" plain class="el_input"style="width: 100px">导出EXCEL</el-button>
            </div>
        </template>
        <template>
            <div>
                <el-collapse v-model="activeNames" style="margin-top: 20px">
                    <el-collapse-item title="学员信息列表" name="1">
                        <el-table :data="table" height="500" border style="width: 100%;margin-top: 10px" @cell-click="stuMessage"
                         >
                            <el-table-column
                                prop="stuOrder"
                                label="序号"
                                width="100">
                            </el-table-column>
                            <el-table-column
                                prop="stuName"
                                label="学员名称"
                                width="100"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="stuNum"
                                label="学号">
                            </el-table-column>
                            <el-table-column
                                prop="class"
                                label="班级">
                            </el-table-column>
                            <el-table-column
                                prop="sex"
                                label="性别"
                                width="100">
                            </el-table-column>
                            <el-table-column
                                prop="educational"
                                label="学历"
                                width="100">
                            </el-table-column>
                            <el-table-column
                                prop="schoolPhone"
                                label="入学时联系电话">
                            </el-table-column>
                            <el-table-column
                                prop="graduatePhone"
                                label="毕业时联系电话">
                            </el-table-column>
                        </el-table>
                    </el-collapse-item>
                    <div>
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
                </el-collapse>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentPage1: 1,
                name:'',
                school:'',
                department:'',
                collegeMajor:'',
                phone:'',
                SSalary:'',
                BSalary:'',
                company:'',
                headShip:'',
                activeNames: ['1'],
                table: [{
                    stuOrder: '1	',
                    stuName: '张义增',
                    stuNum: '0200806001',
                    class: 'SD0806',
                    sex: '男',
                    educational: '本科',
                    schoolPhone: '13242826559',
                    graduatePhone: ''
                }, {
                    stuOrder: '2',
                    stuName: '吴良飞',
                    stuNum: '0200806002',
                    class: 'SD0806',
                    sex: '男',
                    educational: '本科',
                    schoolPhone: '13242828660',
                    graduatePhone: ''
                }],
                class_selected: '',
                sex_selected:'',
                educational_selected:'',
                class_options: [
                    { text: '', class: '' },
                    { text: 'ASD08061', class: '1' },
                    { text: 'ASD08063', class: '2' },
                    { text: 'ASD08062', class: '3' },
                    { text: 'ASD0807', class: '4' },
                ],
                sex_options:[
                    { text: '', sex: '' },
                    { text: '男', sex: '1' },
                    { text: '女', sex: '2' },
                ],
                educational_options:[
                    { text: '', educational: '' },
                    { text: '硕士', educational: '1' },
                    { text: '本科', educational: '2' },
                    { text: '大专', educational: '3' },
                    { text: '高中', educational: '4' },
                    { text: '其他', educational: '4' }
                ]



            }
        },
        methods: {
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
<style>
    .el_input{
        width:180px;
        margin-left: 10px;
        margin-top: 20px;
    }
    .el_span{
        margin-left: 10px;
    }
    .select_class{
        margin-left: 10px;
        margin-top: 20px;
        height: 35px;
        width: 100px;
    }
</style>
