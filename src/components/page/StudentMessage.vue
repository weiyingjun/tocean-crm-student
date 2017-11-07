<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>学员信息</el-breadcrumb-item>
                    <el-button
                        @click="returnStudentFiles"
                        style="position: absolute;
                                        right: 50px;
                                        top:80px;
                                        height: 30px;
                                        text-align: center">返回
                    </el-button>
                </el-breadcrumb>
            </div>
        </template>
        <template>
            <div class="stuMessage">
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="基本资料" name="1">
                        <el-form ref="form" :model="form" label-width="100px" :inline="true">
                            <el-form-item label="账号">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="姓名">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="学号" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="班级">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <br/>
                            <el-form-item label="性别">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="出生日期" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="籍贯">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="婚姻状况" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="毕业学校">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="院系" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="专业">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="学历" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="毕业时间">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="学籍变更" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="学生类型">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="考勤号" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="备注">
                                <el-input type="textarea" v-model="form.desc" style="width: 500px;"></el-input>
                            </el-form-item>

                        </el-form>


                    </el-collapse-item>

                </el-collapse>
            </div>
        </template>
        <template>
            <div class="stuMessage">
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="联系方式" name="2">
                        <el-form ref="form" :model="form" label-width="120px" :inline="true">
                            <el-form-item label="入学时联系电话">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="毕业时联系电话" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="邮箱">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="QQ" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="MSN">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="家庭电话" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="家庭地址">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="证件号码" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="监护人">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="监护人电话" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="与本人关系">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="紧急联系人" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="紧急联系人电话">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                        </el-form>


                    </el-collapse-item>

                </el-collapse>
            </div>
        </template>
        <template>
            <div class="stuMessage">
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="后期信息" name="3">
                        <el-form ref="form" :model="form" label-width="140px" :inline="true">
                            <el-form-item label="职业素质基础分">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="技术能力基础分" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="第一次考试成绩">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="第二次考试成绩" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="第三次考试成绩">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="SCJP考试成绩" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="第一次项目考核成绩">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="第二次项目考核成绩" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="第三次项目考核成绩">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <br/>
                            <el-form-item label="职务">
                                <select v-model="work_selected" class="select_class" style="width: 250px;height:40px">
                                    <option v-for="option in work_options">
                                        {{ option.text }}
                                    </option>
                                </select>
                            </el-form-item>
                            <el-form-item label="达内毕业时间" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="是否还清贷款">
                                <template>
                                    <el-radio v-model="radio" label="1">是</el-radio>
                                    <el-radio v-model="radio" label="2">否</el-radio>
                                </template>
                            </el-form-item>
                            <el-form-item label="就业公司" style="margin-left: 210px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="就业职位">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="就业薪水" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="班主任评价">
                                <el-input type="textarea" v-model="form.desc" style="width: 500px;"></el-input>
                            </el-form-item>
                            <el-form-item label="项目经理评价">
                                <el-input type="textarea" v-model="form.desc" style="width: 500px;"></el-input>
                            </el-form-item>
                            <el-form-item label="就业感言">
                                <el-input type="textarea" v-model="form.desc" style="width: 500px;"></el-input>
                            </el-form-item>
                            <br/>
                            <el-form-item label="照片">
                                <el-upload
                                    class="upload-demo"
                                    drag
                                    action="/api/posts/"
                                    multiple>
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                                </el-upload>
                            </el-form-item>
                            <br/>
                            <el-form-item label="简历">

                                <el-upload
                                    class="upload-demo"
                                    drag
                                    action="/api/posts/"
                                    multiple>
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                    <div class="el-upload__tip" slot="tip">只能上传word文件</div>
                                </el-upload>

                            </el-form-item>
                            <br/>


                            <el-form-item label="回访记录">
                                <el-input type="textarea" v-model="form.desc" style="width: 500px;"></el-input>
                            </el-form-item>
                        </el-form>


                    </el-collapse-item>

                </el-collapse>
            </div>
        </template>
        <template>
            <div class="stuMessage">
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="附加信息" name="1">
                        <el-form ref="form" :model="form" label-width="160px" :inline="true">
                            <el-form-item label="原参加培训的公司">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="培训时间" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="培训内容">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="原工作单位" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="原单位职位">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>
                            <el-form-item label="原单位薪水" style="margin-left: 50px">
                                <el-input v-model="form.name" style="width: 250px"></el-input>
                            </el-form-item>

                            <el-form-item label="家庭背景">
                                <el-input type="textarea" v-model="form.desc" style="width: 300px;"></el-input>
                            </el-form-item>
                            <el-form-item label="父母状况">
                                <el-input type="textarea" v-model="form.desc" style="width: 300px;"></el-input>
                            </el-form-item>
                            <el-form-item label="职业规划">
                                <el-input type="textarea" v-model="form.desc" style="width: 300px;"></el-input>
                            </el-form-item>
                            <el-form-item label="期望目标">
                                <el-input type="textarea" v-model="form.desc" style="width: 300px;"></el-input>
                            </el-form-item>
                            <el-form-item label="爱好">
                                <el-input type="textarea" v-model="form.desc" style="width: 300px;"></el-input>
                            </el-form-item>
                            <el-form-item label="经济能力">
                                <el-input type="textarea" v-model="form.desc" style="width: 300px;"></el-input>
                            </el-form-item>

                        </el-form>


                    </el-collapse-item>

                </el-collapse>
            </div>
        </template>
    </div>
</template>
<script>
    import VueCoreImageUpload  from 'vue-core-image-upload';
    export default {
        data() {
            return {
                fileList: [],
                radio: '1',
                activeNames: ['1'],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''

                },
                work_selected: '',
                work_options: [
                    {text: ''},
                    {text: '班长'},
                    {text: '副班长'},
                    {text: '学习委员'},
                    {text: '生活委员'},
                    {text: '体育委员'}
                ]
            }

        },
        components: {
            VueCoreImageUpload
        },
        methods: {
            returnStudentFiles: function (val) {

                this.$router.push('/studentfiles');
            },
            imageuploaded(res) {
                console.log(res)
            },
            handleError(){
                this.$notify.error({
                    title: '上传失败',
                    message: '图片上传接口上传失败，可更改为自己的服务器接口'
                });
            }
        }
    }

</script>
<style>
    .stuMessage {
        margin-top: 20px;
    }

    .content-title {
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }

    .pre-img {
        width: 250px;
        height: 250px;
        margin-bottom: 20px;
    }
</style>
