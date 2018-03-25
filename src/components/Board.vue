<template>
<div>
<Navbar></Navbar>
<AddNewTask @addTask="addTask"></AddNewTask>
<div class="container">
    <div class="row">
        <div class="col col-sm-3">
            <div class="card">
                <div class="card-header bg-danger">Back log</div>
                <div class="card-body">
                    <div class="card space" v-for="(task, index) in tasks" :key="index" v-if="task.status==0"> 
                        <div class="card-header">{{task.title}}</div>
                        <div class="card-body">
                                {{task.description}}
                        </div> 
                        <div class="card-footer">action</div>
                    </div>
                </div> 
            </div>
        </div>
        <div class="col col-sm-3">
            <div class="card">
                <div class="card-header bg-warning">To do</div>
                <div class="card-body">
                    <div class="card space" v-for="(task, index) in tasks" :key="index" v-if="task.status==1"> 
                        <div class="card-header">{{task.title}}</div>
                        <div class="card-body">
                                {{task.description}}
                        </div> 
                        <div class="card-footer">action</div>
                    </div>
                </div> 
            </div>
        </div>
        <div class="col col-sm-3">
            <div class="card">
                <div class="card-header bg-info">Doing</div>
                <div class="card-body">
                    <div class="card space" v-for="(task, index) in tasks" :key="index" v-if="task.status==2"> 
                        <div class="card-header">{{task.title}}</div>
                        <div class="card-body">
                                {{task.description}}
                        </div> 
                        <div class="card-footer">action</div>
                    </div>
                </div> 
            </div>
        </div>
        <div class="col col-sm-3">
            <div class="card">
                <div class="card-header bg-success">Done</div>
                <div class="card-body">
                    <div class="card space" v-for="(task, index) in tasks" :key="index" v-if="task.status==3"> 
                        <div class="card-header">{{task.title}}</div>
                        <div class="card-body">
                                {{task.description}}
                        </div> 
                        <div class="card-footer">action</div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div>
</div>  
</template>

<script>

import Navbar from '@/components/Navbar'
import AddNewTask from '@/components/AddNewTask'

import {tasksRef} from '../firebase'
export default {
    firebase: {
        tasks: tasksRef
    },
    components:{
        Navbar,
        AddNewTask
    },
    // data(){
    //     return {
    //         newTask: {
    //             title:'',
    //             description: '',
    //             status:0
    //         }
    //     }
    // },
    methods:{
        addTask(data){
            tasksRef.push(data)
        }
    }

}
</script>

<style>
    .space{
        margin-bottom: 10px;
    }
</style>
