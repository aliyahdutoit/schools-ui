<template>
    <div>
  
      <H2>Teachers Available</H2>
<h5>Here you can view all teachers in Cape Town and the subjects they teach!</h5>
      <AddTeacher/>
      
      <table class="table">
        <thead>
          <tr>
            <th>#id</th>
            <th>name</th>
            <th>surname</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="teacher in teachers" :key="teacher.id">
            <td>{{ teacher.id }}</td>
            <td>{{ teacher.first_name }}</td>
            <td>{{ teacher.last_name }}</td>
            <td>{{ teacher.email }}</td>
            <td>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-dark float-end"
                data-bs-toggle="modal"
                :data-bs-target="'#modal-' + teacher.id"
              >
                VIEW MORE
              </button>
  
              <!-- Modal -->
              <div
                class="modal fade"
                :id="'modal-' + teacher.id"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                data-bs-backdrop="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">{{ teacher.first_name }} {{teacher.last_name}}</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        
                      <SingleTeacherView :teacher="teacher" />
  
  
  
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-danger" v-on:click="deleteTeacher">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  import SingleTeacherView from "../views/SingleTeacherView.vue";
  import AddTeacher from "../components/AddTeacher.vue";
  
  export default {
    components: {
    SingleTeacherView,
    AddTeacher,
  },
  
    data() {
      return {
        teachers: []
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('http://localhost:3000/api/teacher')
          .then(response => {
            this.teachers = response.data;
            console.log(this.teachers)
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  