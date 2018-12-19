import {http} from "./config"

export default {

    list:() => {
        return http.get('events')
    },

    save:(event) => {
        return http.post('events/', event)
    },

    update:(event) => {

        return http.put('events/' + event.id + '/', event)
    },

    delete:(event) => {
        return http.delete('events/' + event.id + '/', event)
    }

}