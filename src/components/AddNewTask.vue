<template>
  <div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Add New Task</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
          <form v-on:submit.prevent="addTask">
            <div class="form-group row">
                <label for="input-title" class="col-sm-3 col-form-label text-left">Title :</label>
                <div class="col-sm-9">
                <input type="text" class="form-control"  placeholder="Title" v-model="newTask.title">
                </div>
            </div>
            <div class="form-group row">
                <label for="input-description" class="col-sm-3 col-form-label text-left">Description :</label>
                <div class="col-sm-9">
                <textarea type="password" class="form-control" placeholder="Description" v-model="newTask.description"></textarea>
                </div>
            </div>
             <input type="submit" class="btn btn-info" value="Add Task" >           
            </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import {tasksRef} from '../firebase'
export default {
    data(){
        return {
            newTask: {
                title:'',
                description: '',
                status:0
            }
        }
    },
    methods:{
        addTask: function(){
            tasksRef.push(this.newTask)
        }
    }

}
</script>

<style>

</style>
