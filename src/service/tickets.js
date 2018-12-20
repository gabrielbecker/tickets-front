import {http} from "./config"

export default {

    retrive:(event_id) => {
        return http.get('tickets/?event=' + event_id)
    },

    save:(ticket) => {
        return http.post('tickets/', ticket)
    },

    update:(ticket) => {

        return http.put('tickets/' + ticket.id + '/', ticket)
    },

    delete:(ticket) => {
        return http.delete('tickets/' + ticket.id + '/', ticket)
    }

}