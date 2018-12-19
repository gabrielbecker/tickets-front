<template>
    <div id="app">

        <nav>
            <div class="nav-wrapper blue darken-1">
                <a href="#" class="brand-logo center">Tickets</a>
            </div>
        </nav>

        <div class="container">

            <ul>
                <li v-for="(error, index) of errors" :key="index">
                    {{error}}
                </li>
            </ul>

            <form @submit.prevent="save">

                <label>Nome</label>
                <input type="text" placeholder="Nome" v-model="event.name">

                <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

            </form>

            <table>

                <thead>

                <tr>
                    <th>NOME</th>
                    <th>Criação</th>
                </tr>

                </thead>

                <tbody>

                <tr v-for="event of events" :key="event.id">

                    <td>{{event.name}}</td>
                    <td>{{event.timestamp}}</td>
                    <td>
                        <button @click="update(event)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
                        <button @click="remove(event)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
                    </td>

                </tr>

                </tbody>

            </table>

        </div>

    </div>
</template>

<script>

    import Event from './service/events'

    export default {

        data() {
            return {
                event: {
                    id: '',
                    nome: ''
                },
                events: [],
                errors: []
            }
        },

        mounted() {
            this.list()
        },

        methods:{

            list(){
                Event.list().then(response => {
                    this.events = response.data.results
                })
            },

            save(){

                if(!this.event.id) {

                    Event.save(this.event).then(response => {
                        this.event = {}
                        this.errors = {}
                        alert('Salvo com sucesso!')
                        this.list()
                    }).catch(e => {
                        this.errors = e.response.data.name
                    })

                } else {
                    Event.update(this.event).then(response => {
                        this.event = {}
                        this.errors = {}
                        alert('Atualizado com sucesso!')
                        this.list()
                    }).catch(e => {
                        this.errors = e.response.data.name
                    })
                }

            },

            update(event) {
                this.event = event
            },

            remove(event) {

                if(confirm('Deseja excluir o evento?')) {

                    Event.delete(event).then(response => {
                        this.list()
                        this.errors = {}
                    }).catch(e => {
                        this.errors = e.response.data.name
                    })

                }
            }

        }
    }
</script>

<style>

</style>