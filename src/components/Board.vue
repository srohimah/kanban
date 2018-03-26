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
                        <div class="card-footer">
                            <button @click="remove(task['.key'])"><span class="fa fa-minus"></span></button>
                            <button @click="nextStep(task['.key'], task.status)"><span class="fa fa-caret-right"></span></button>
                        </div>
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
                        <div class="card-footer">
                            <button @click="prevStep(task['.key'], task.status)"><span class="fa fa-caret-left"></span></button>
                            <button @click="remove(task['.key'])"><span class="fa fa-minus"></span></button>
                            <button @click="nextStep(task['.key'], task.status)"><span class="fa fa-caret-right"></span></button>
                        </div>
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
                        <div class="card-footer">
                            <button @click="prevStep(task['.key'], task.status)"><span class="fa fa-caret-left"></span></button>
                            <button @click="remove(task['.key'])"><span class="fa fa-minus"></span></button>
                            <button @click="nextStep(task['.key'], task.status)"><span class="fa fa-caret-right"></span></button>
                        </div>
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
                        <div class="card-footer">
                            <button @click="prevStep(task['.key'], task.status)"><span class="fa fa-caret-left"></span></button>
                            <button @click="remove(task['.key'])"><span class="fa fa-minus"></span></button>
                        </div>
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
        },
        nextStep(index, status){
            swal({
                title: `Mark this task as ${this.getStatus(status+1)}?`,
                icon: "info",
                buttons: true,
                })
                .then((willDelete) => {
                if (willDelete) {
                    if(status===0){
                        tasksRef.child(index).update({status : 1})
                    }else if ( status === 1){
                        tasksRef.child(index).update({status : 2})                
                    }else if ( status === 2){
                        tasksRef.child(index).update({status : 3})                
                    }
                }
                });
        },
        prevStep(index, status){
            swal({
                title: `Mark this task as ${this.getStatus(status-1)}?`,
                icon: "info",
                buttons: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        if(status===1){
                            tasksRef.child(index).update({status : 0})
                        }else if ( status === 2){
                            tasksRef.child(index).update({status : 1})                
                        }else if ( status === 3){
                            tasksRef.child(index).update({status : 2})                
                        }
                    }
                });
        },
        remove(task){
            tasksRef.child(task).remove()
        },
        getStatus(status){
            if(status===0){
                return 'backlog'
            }else if (status===1){
                return 'todo'
            }else if (status===2){
                return 'doing'
            }else if (status===3){
                return 'done'
            }
        }
    }

}
</script>

<style>
    .space{
        margin-bottom: 10px;
    }
</style>
