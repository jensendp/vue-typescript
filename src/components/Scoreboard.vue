<template>
    <div>
        <div class="score-board">
            <div class="team">
                <h4>{{homeTeamName}}</h4>
                <div class="score-box">
                    {{homeTeamScore}}
                </div>
            </div>
            <div class="team">
                <h4>{{awayTeamName}}</h4>
                <div class="score-box">
                    {{awayTeamScore}}
                </div>
            </div>
        </div>
        <div class="button-row">
            <h4>Home</h4>
            <h5 class="team-name">Team Name: <input v-model="homeTeamName" type="text"></h5>
            <br/>
            <button @click="incrementHomeScore(2)" class="scoreboard-button">+2 Home</button>
            <button @click="incrementHomeScore(1)" class="scoreboard-button">+1 Home</button>
            <button @click="incrementHomeScore(-1)" class="scoreboard-button">-1 Home</button>
            <button @click="incrementHomeScore(-2)" class="scoreboard-button">-2 Home</button>
            <button @click="resetHomeScore()" class="scoreboard-button">Reset Home</button>
        </div>
        <div class="button-row">
            <h4>Away</h4>
            <h5 class="team-name">Team Name: <input v-model="awayTeamName" type="text"></h5>
            <br/>
            <button @click="incrementAwayScore(2)" class="scoreboard-button">+2 Away</button>
            <button @click="incrementAwayScore(1)" class="scoreboard-button">+1 Away</button>
            <button @click="incrementAwayScore(-1)" class="scoreboard-button">-1 Away</button>
            <button @click="incrementAwayScore(-2)" class="scoreboard-button">-2 Away</button>
            <button @click="resetAwayScore()" class="scoreboard-button">Reset Away</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            homeTeamName: "Home Team",
            awayTeamName: "Away Team",
            homeTeamScore: 0,
            awayTeamScore: 0
        }
    },
    methods: {
        incrementHomeScore(by: number) { this.homeTeamScore += by; },
        incrementAwayScore(by: number) { this.awayTeamScore += by; },
        resetHomeScore() { this.homeTeamScore = 0; },
        resetAwayScore() { this.awayTeamScore = 0; }
    }

});

</script>

<style>

.score-board {
    text-align: center;
    padding: 15px;
}

.team {
    display: inline-block;
    padding: 15px;
}

.team h4 {
    font-weight: bold;
}

.score-box {
    font-family: Tahoma, Geneva, sans-serif;
    font-size: 50px;
    border: 3px solid black;
    padding: 50px;
}

.button-row {
    text-align: center;
    padding: 15px;
}

.scoreboard-button {
    position: relative;
    height: 50px;
    width: 50px;
    display: inline-block;
}

.team-name {
    magin-bottom: 5px;
}

</style>