<template>
    <div class="container">
        <div class="sort-container">
        <button @click="sortBy('desc')">SortByDesc</button>
        <button @click="sortBy('asc')">SortByAsc</button>
    </div>
    <!-- <input type="text" placeholder="Search hotel" v-model="searchQuery">
        <div class="search-results">
            <div class="hotel-card" v-for="hotel in filteredhotels" :key="hotel.hotelID">
    </div> -->
        <div class="hotel-container">
            <div class="hotel-card" v-for="hotel in hotels" :key="hotel.hotelID">
                
                <div class="image-container">
                    <img :src="hotel.imageURL" alt="hotel Image" class="hotel-image" />
                </div>
                <div class="content">
                    <h4>{{ hotel.hotelName }}</h4>
                    <button @click="viewMore(hotel)">View More</button>
                    <div v-if="hotel.showDetails">
                        <!-- <p>Price: {{ hotel.hotelQuantity }}</p> -->
                        <p>Price: {{ hotel.price }}</p>
                        <p>Description: {{ hotel.hotelDesc }}</p>
                        <button @click="back(hotel)">Back</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    <!-- </div> -->

</template>

<script>
export default {
    computed: {
        hotels() {
            return this.$store.state.hotels
        },
        filteredHotels() {
            return this.hotels.filter(hotel => hotel.hotelName.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    methods: {
        viewMore(hotel) {
            hotel.showDetails = !hotel.showDetails;
        },
        back(hotel) {
            hotel.showDetails = !hotel.showDetails;
        },
        sortBy(sortType) {
            if (sortType === 'desc') {
                this.hotels.sort((a, b) => b.hotelName.localeCompare(a.hotelName))
            } else {
                this.hotels.sort((a, b) => a.hotelName.localeCompare(b.hotelName))
            }
        }
        
    },
    mounted() {
        this.$store.dispatch('fetchHotels')
    }
}
</script>
<style scoped>
.hotel-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
.hotel-card {
    background-color: #F0F0F0;
    padding: 20px;
}
.image-container {
    width: 100%;
    padding-bottom: 100%; /* Maintain aspect ratio (1:1) */
    position: relative;
}
.hotel-card img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the container */
}
.content {
    flex-grow: 1;
}
button {
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    margin-right: 10px;
    border-radius: 20px;
    cursor: pointer;
}
button:last-child {
    margin-right: 0;
}
button:hover {
    background-color: #0056B3;
}
</style>