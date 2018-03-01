import Vue from "vue";
import ScoreboardComponent from './components/Scoreboard.vue';

let app = new Vue({
    el: "#application",
    template: `
    <div>
        <scoreboard-component />
    </div>`,
    components: {
        ScoreboardComponent
    }
});