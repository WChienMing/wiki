<template>
    <div class="dropdown-content">
        <!-- Table Bar -->
        <div class="table-bar">
            <img src="../assets/icon/arrow_left.png" alt="Table 1 Icon" @click="changeTable(-1)"/>
            <span class="table-title">{{ getCurrentTableTitle() }}</span>
            <img src="../assets/icon/arrow_right.png" alt="Table 2 Icon" @click="changeTable(1)" />
        </div>

        <!-- Tables Content -->
        <div v-if="currentTable === 1" id="tiles-container">
            <table>
                <tr class="blue-header">
                    <th>Tiles Name</th>
                    <th>Tiles Value</th>
                </tr>
                <tr v-for="item in tiles" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.unlock_condition }}</td>
                </tr>
            </table>
        </div>

        <div v-if="currentTable === 2" id="vote-container">
            <table>
                <tr class="blue-header">
                    <th>Vote Number</th>
                    <th>Energy Cost</th>
                </tr>
                <tr v-for="item in vote" :key="item.vote_number">
                    <td>{{ item.vote_number }}</td>
                    <td>{{ item.energy_cost }}</td>
                </tr>
            </table>
        </div>

        <div v-if="currentTable === 3" id="quarterly-container">
            <table>
                <tr class="blue-header">
                    <th>Level</th>
                    <th>Rank</th>
                    <th>Quantity</th>
                    <th>Percentage</th>
                </tr>
                <tr v-for="item in quarterly_points" :key="item.level">
                    <td>{{ item.level }}</td>
                    <td>{{ item.rank }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.percentage }}</td>
                </tr>
            </table>
        </div>

        <div v-if="currentTable === 4" id="portal-level-container">
            <table>
                <tr class="blue-header">
                    <th>Level</th>
                    <th>Energy to Level Up</th>
                    <th>Upgrade Time</th>
                    <th>Portal Capacity</th>
                    <th>Total Energy Increase</th>
                    <th>Energy Supply</th>
                    <th>Upgrade Condition</th>
                </tr>
                <tr v-for="item in portal_level" :key="item.level">
                    <td>{{ item.level }}</td>
                    <td>{{ item.energy_to_level_up }}</td>
                    <td>{{ item.upgrade_time }}</td>
                    <td>{{ item.portal_capacity }}</td>
                    <td>{{ item.total_energy_increase }}</td>
                    <td>{{ item.energy_supply }}</td>
                    <td>{{ item.upgrade_condition }}</td>
                </tr>
            </table>
        </div>

        <div v-if="currentTable === 5" id="decorations-container">
            <table>
                <tr class="blue-header">
                    <th>Item Name</th>
                    <th>Unlock Condition</th>
                </tr>
                <tr v-for="item in object" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.unlock_condition }}</td>
                </tr>
            </table>
        </div>
        
        <!-- ... (the rest of the tables remain the same) -->

    </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from '../main.js';

export default {
    name: 'NftPage',
    data() {
        return {
            currentTable: 1,
            tiles: [],
            vote: [],
            quarterly_points: [],
            portal_level: [],
            object: [],
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios.all([
                axios.get(`${API_URL}tiles`),
                axios.get(`${API_URL}vote`),
                axios.get(`${API_URL}quarterly_points`),
                axios.get(`${API_URL}portal_level`),
                axios.get(`${API_URL}object`)
            ]).then(axios.spread((tiles, vote, quarterly_points, portal_level, object) => {
                this.tiles = tiles.data;
                this.vote = vote.data;
                this.quarterly_points = quarterly_points.data;
                this.portal_level = portal_level.data;
                this.object = object.data;
            })).catch(error => {
                console.error(error);
            });
        },
        changeTable(direction) {
            this.currentTable += direction;
            if (this.currentTable < 1) this.currentTable = 5;
            if (this.currentTable > 5) this.currentTable = 1;
        },
        getCurrentTableTitle() {
            switch (this.currentTable) {
                case 1: return "Tiles";
                case 2: return "Vote";
                case 3: return "Quarterly Points";
                case 4: return "Portal Level";
                case 5: return "Decorations";
                default: return "";
            }
        }
    }
};
</script>

<style scoped>
.dropdown-content {
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 300px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    border: 1px solid #ddd;
    right: 40px;
    max-height: 700px;
    overflow-y: auto; 
    top: 55px;
}

.table-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #007BFF;
    color: white;
    padding: 10px;
    height: 70px;
}

.table-title {
    flex-grow: 1;
    text-align: center;
    color: white;
    font-size: 18px;
    font-weight: 600;
}

.blue-header  {
    background: #0983F1;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 16px;
    height: 44px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: none;
    padding: 10px;
    text-align: center;
}
th {
    background-color: #0983F1!important;
}

td{
    color: black;
}

</style>