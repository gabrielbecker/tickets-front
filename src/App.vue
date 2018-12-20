<template>
    <div id="app" class="container">

        <nav>
            <div class="container-fluid bg-primary text-white sticky-top">
                <h2 class="center">Tickets</h2>
            </div>
        </nav>

        <div class="footer">

            <ul>
                <li v-for="(error, index) of errors" :key="index">
                    {{error}}
                </li>
            </ul>

            <form>

                <input type="text" placeholder="Nome" v-model="event.name">

                <button type="button" class="btn btn-success" @click="event_save(event)">Salvar Evento</button>

            </form>

            <br>

            <table class="table table-striped table-bordered" style="width:100%">

                <thead>

                    <tr>
                        <th>Eventos</th>
                        <th>Criação</th>
                        <th></th>
                    </tr>

                </thead>

                <tbody>
                <template v-for="event of events">

                    <tr :key="event.id" @click="toggle(event)" class="accordion-toggle"  data-toggle="collapse" data-target="#collapseOne">

                            <td>{{event.name}}</td>
                            <td>{{event.timestamp}}</td>
                            <td>
                                <button @click="event_update(event)" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></button>
                                <button @click="event_remove(event)" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                            </td>

                        </tr>
                        <tr v-if="opened.includes(event.id)" :event="event.name">
                            <td colspan="2">
                                <form>

                                    <input type="text" placeholder="Nome" v-model="ticket.type">

                                    <button type="button" class="btn btn-success" @click="ticket_save(ticket)">Salvar Ingresso</button>

                                </form>
                            </td>
                        </tr>
                        <tr v-if="opened.includes(event.id)" v-for="ticket of tickets">
                            <td>{{ticket.type}}</td>
                            <td>{{ticket.timestamp}}</td>
                            <td>
                                <button @click="ticket_remove(ticket)" class="btn btn-warning btn-xs"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                            </td>
                        </tr>
                </template>

                </tbody>

            </table>

        </div>

    </div>
</template>

<script>

    import Event from './service/events'
    import Ticket from './service/tickets'

    export default {

        data() {
            return {
                event: {
                    id: '',
                    name: ''
                },
                events: [],
                errors: [],
                tickets: [],
                ticket: {
                    event: '',
                    type: ''
                },
                opened: '',
            }
        },

        mounted() {
            this.event_list()
        },

        methods:{

            event_list(){
                Event.list().then(response => {
                    this.events = response.data.results
                })
            },

            ticket_list(event_id){
                Ticket.retrive(event_id).then(response => {
                    this.tickets = response.data.results
                })
            },

            event_save(){

                if(!this.event.id) {

                    Event.save(this.event).then(response => {
                        this.event = {}
                        this.errors = {}
                        alert('Salvo com sucesso!')
                        this.event_list()
                    }).catch(e => {
                        this.errors = e.response.data.name
                    })

                } else {
                    Event.update(this.event).then(response => {
                        this.event = {}
                        this.errors = {}
                        alert('Atualizado com sucesso!')
                        this.event_list()
                    }).catch(e => {
                        this.errors = e.response.data.name
                    })
                }

            },

            event_update(event) {
                this.event = event
            },

            event_remove(event) {

                if(confirm('Deseja excluir o evento?')) {

                    Event.delete(event).then(response => {
                        this.event_list()
                        this.errors = {}
                    }).catch(e => {
                        this.errors = e.response.data.name
                    })

                }
            },

            ticket_update(ticket) {
                this.ticket = ticket
            },

            ticket_remove(ticket) {

                if(confirm('Deseja excluir o ingresso?')) {

                    Ticket.delete(ticket).then(response => {
                        this.ticket_list(this.event.name)
                        this.errors = {}
                    }).catch(e => {
                        this.errors = e.response.data.name
                    })

                }
            },

            ticket_save() {

                this.ticket.event = this.opened

                Ticket.save(this.ticket).then(response => {
                    this.ticket = {}
                    this.errors = {}
                    alert('Salvo com sucesso!')
                    this.ticket_list(this.event.name)
                }).catch(e => {
                    this.errors = e.response.data.name
                })


            },

            toggle(event) {
                if (this.opened === event.id) {
                    this.opened = '';
                } else {
                    this.opened = event.id;
                }

                this.ticket_list(event.name)

            }

        }
    }


</script>

<style>



</style>