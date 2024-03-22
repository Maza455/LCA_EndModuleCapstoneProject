<template>
    <section id="search">
        <div style="background-color: #232F3E!important;padding:40px 80px">
            <h2 style="color:white">Let me help you on finding a Career Course</h2>
            <div style="margin-top: 15px" class="row">
                <div class="col-md-8">
                    <input type="text" class="form-control" placeholder="Search for jobs by its title or keyword">
                </div>
                <div class="col-md-3">
                    <input type="text" class="form-control" placeholder="Location">
                </div>
                <div class="col-md-1">
                    <button @click="searchJobs" type="button" class="btn btn-warning"><i class="fa fa-search"
                            aria-hidden="true"></i></button>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="card">
                <img src="https://i.postimg.cc/J4fSGM2q/1-Ly-Zcwu-LWv2-FAr-Oum-Cxobp-A.png"
                    alt="JavaScript Course Image">
                <h3>JavaScript Full Course</h3>
                <p>Description: Comprehensive JavaScript course covering advanced topics.</p>
                <p>Amount: R2129.90</p>
                <button @click="viewCourse('JavaScript')">View More</button>
            </div>

            <div class="card">
                <img src="https://i.postimg.cc/ncFG25QJ/image-blog-mysql-php.webp" alt="MySQL Course Image">
                <h3>MySQL Full Course</h3>
                <p>Description: In-depth MySQL course for database management.</p>
                <p>Amount: R1579.89</p>
                <button @click="viewCourse('MySQL')">View More</button>
            </div>

            <div class="card">
                <img src="https://i.postimg.cc/Xq0QnYJG/1-UJJ-V7mds-k-Gpta4aq4-BVg.jpg" alt="Course Image">
                <h3>Vue3 Full Course</h3>
                <p>Description: Learn Vue3 framework for building interactive web applications.</p>
                <p>Amount: R1129</p>
                <button @click="viewCourse('Vue3')">View More</button>
            </div>

            <div class="card">
                <img src="https://i.postimg.cc/pdSs6tn7/1-pxw3-Oku9hs-R8-FG6jqlzzbw.jpg" alt="Course Image">
                <h3>CyberSecurity Full Course</h3>
                <p>Description: This course introduces the concepts and understanding of the field of computer security.</p>
                <p>Amount: R3799.99</p>
                <button @click="viewCourse('Cyber')">View More</button>
            </div>

            <div class="card">
                <img src="https://i.postimg.cc/G28TqWkX/AWS-Online-Training.webp" alt="Course Image">
                <h3>AWS Full Course</h3>
                <p>Description: Learn to build on the AWS Management Console.</p>
                <p>Amount: R1949.49</p>
                <button @click="viewCourse('AWS')">View More</button>
            </div>

            <div class="card">
                <img src="https://i.postimg.cc/XYtb9tYj/networking-training-mob-min.jpg" alt="Course Image">
                <h3>Networking Full Course</h3>
                <p>Description: Computer networking courses train students to connect (LAN), (WAN) and wireless.</p>
                <p>Amount: R3449.49</p>
                <button @click="viewCourse('Networking')">View More</button>
            </div>
        </div>

        <div style="background-color: #005276;padding:40px 80px">
            <h1 style="color:white;font-size: 55px">Come build the future with me</h1>
            <p style="color:white;margin-right: 200px;font-size: 18px;margin-top: 40px">My mission is to be Earth's
                most
                customer-centric company. This is what unites Amazonians across teams and geographies as we are all
                striving to delight our customers and make their lives easier, one innovative product, service, and
                idea
                at a time.</p>
            <button @click="learnMore" type="button" class="btn btn-outline-light">Learn about working at Zukiisa
                Maza</button>
            <br><br>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        searchJobs() {
            console.log('Searching for jobs...');
        },
        learnMore() {
            console.log('Learn more about working at Zukiisa Maza');
        },
        viewCourse(course) {
            if (course === 'JavaScript') {
                window.open('https://www.freecodecamp.org/', '_blank');
            } else if (course === 'MySQL') {
                window.open('https://www.udemy.com/', '_blank');
            } else if (course === 'Vue3') {
                window.open('https://www.freecodecamp.org/');
            } else if (course === 'Cyber') {
                window.open('https://medium.com/@academysecurium/cyber-security-certification-course-exploring-the-benefits-of-a-cyber-security-certification-course-2b4ee0da4935', '_blank', '_blank');
            } else if (course === 'AWS') {
                window.open('https://coursedrill.com/aws-training/', '_blank');
            } else if (course === 'Networking') {
                window.open('https://www.udemy.com/', '_blank');
            }
            console.log('View more about ' + course);
        }
    }
};
</script>

<style scoped>
.card-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.card {
    width: 300px;
    padding: 20px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
}

.card button {
    background-color: #005276;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
</style>