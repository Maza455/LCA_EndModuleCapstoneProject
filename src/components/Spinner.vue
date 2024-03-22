<template>
    <svg class="loading-spinner">
        <circle :cx="circlePositions[index] && circlePositions[index].x"
            :cy="circlePositions[index] && circlePositions[index].y" :r="item.radius" :fill="item.color"
            v-for="(item, index) in circles" :key="index" />
    </svg>
</template>


<script>
const CENTER_X = 50;
const CENTER_Y = 50;
const RADIUS = 30;

function positionOnCircle(radius, angle, center) {
    return {
        x: center.x + (radius * Math.cos(toRadians(angle))),
        y: center.y + (radius * Math.sin(toRadians(angle)))
    }
}

function toRadians(angle) {
    return angle * Math.PI / 180;
}

function calculatePositions(component) {
    let angleIncrement = 360 / component.circles.length;
    let positions = {};
    component.circles.forEach((circle, index) => {
        positions[index] = positionOnCircle(
            RADIUS,
            angleIncrement * index, {
            x: CENTER_X,
            y: CENTER_Y
        }
        )
    });
    return positions;
}

export default {
    name: 'SpinLoader',
    data() {
        return {
            circles: [{
                color: '#E0F2F1',
                radius: 1
            },
            {
                color: '#B2DFDB',
                radius: 2
            },
            {
                color: '#80CBC4',
                radius: 3
            },
            {
                color: '#4DB6AC',
                radius: 4
            },
            {
                color: '#26A69A',
                radius: 5
            },
            {
                color: '#00897B',
                radius: 6
            },
            {
                color: '#00796B',
                radius: 7
            },
            {
                color: '#00695C',
                radius: 8
            },
            {
                color: '#004D40',
                radius: 9
            },
            ],
            counter: 0,
            interval: null,
            elapsedTime: 0
        }
    },
    computed: {
        circlePositions: calculatePositions
    },
    created() {
        this.interval = setInterval(() => {
            this.elapsedTime += 100; // Increment elapsed time by 100 milliseconds
            if (this.elapsedTime >= 5000) { // 5 seconds in milliseconds
                clearInterval(this.interval); // Stop the spinner
            }
            this.counter++;
            this.circles = this.circles.map((item, index) => ({
                ...item,
                radius: (this.counter + index) % 8
            }));
        }, 100);
    },
    beforeUnmount() {
       clearInterval(this.interval);
     }
}
</script>


<style>
.loading-spinner {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>