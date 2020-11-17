<template>
    <div class="education">

        <div class="image-txt-container">
            <img src="../assets/brock_university.png" width="266" height="295" alt="brock_university"/>
            <div>
                <h3>BSc. Computer Science</h3>
                <p class="no-indent"> Brock University, St.Catharines, Ontario <br/>
                    Honors. concentration in Intelligent Systems, Minor in Mathematics
                </p>
            </div>
        </div>

        <hr/>

        <div class="quick-links">
            <h4>Quick Links:</h4>
            <ul>
                <li><a class="sub-nav" href="#research_project">Undergrand Thesis - Research Project</a></li>
                <li><a class="sub-nav" href="#pso_ann">Comparative Study of PSO and Back-Propagation of ANN Training Algorithms</a></li>
                <li><a class="sub-nav" href="#quiz_o_matic">Learning Object: Quiz-O-Matic 5000</a></li>
                <li><a class="sub-nav" href="#space_animation">Space Animation</a></li>
                <li><a class="sub-nav" href="#giess">Galaxy Identification Expert System Shell</a></li>
            </ul>
        </div>

        <hr/>

        <h2 id="research_project">Undergraduate Thesis - Research Project</h2>
        <h4>General Information</h4>
        <p>This research project was 1 year project that was worked on individually, under the supervision of a professor. It aimed to enhance my 
            understanding of Intelligent algorithms, and focus more on the academic learning and research. A large portion of the time was spent 
            researching and understanding the problems, while also trying to find the right tools and perform the analysis.  After collecting copious 
            amounts of data, it had to be processed and structured in such a way that made it easy to analyze and depict the results.
        </p>

        <h4>Abstract</h4>
        <p>This project aims in exploring the nature of Vector Evaluated Particle Swarm Optimization(VEPSO) with Multi-objective problems(MOPs) and 
            the application of local search methods on various parts of the algorithm. Local search has been shown to be quite effective at exploiting 
            search areas, which in combination of PSO, should lead to better resulting solutions. The overall goal of this paper is to show that 
            combining local search with VEPSO yields a better set of solutions than simply using the regular VEPSO algorithm. The hill-climbing local 
            search algorithm is applied using two different methods, one method focuses on applying local search to all non-dominated solutions. The 
            other method involves having local search applied on all dominated solutions. By using the hyper-volume indicator performance measure it 
            will be possible to determine the effects these two methods have compared to the regular VEPSO algorithm. The results found indicate there 
            is a significant increase in solution quality for applying local search using both methods, however applying local search with Method A on 
            non-dominated solutions yields a better set of solutions compared to Method B and vanilla VEPSO.
        </p>

        <h4>Technologies Used</h4>
        <ul>
            <li>Java</li>
            <li>XML - Configure build settings for Cilib simulations</li>
            <li>Cilib - Library of computational intelligence algorithms</li>
            <li>CilibParser - Parser I wrote to translate Cilib output information into a format more suited for my needs</li>
            <li>Hyper volume indicator - java application used to determine the area of measured space covered by a set</li>
            <li>LaTeX - Used to write reports</li>
        </ul>

        <basic-splide 
            :slidesList="slides.undergrad_thesis_research_project">
        </basic-splide>

        <hr/>

        <h2 id="pso_ann">Comparative Study of Particle Swarm Optimization and Back-Propagation of Artificial Neural Network Training Algorithms</h2>
        <h4>General Information</h4>
        <p>This project was a collaborative project with a partner for one of the courses in Artificial Intelligence. 
            It involved combining two algorithms we learned in the course, Artificial Neural Networks and Particle Swarm Optimization. 
            We wanted to see the effects of using Particle Swarm to adjust the weights of the neural network to train the system 
            to recognize two different pattern sets; Digit (Number) Recognition and Wine classification, using 2 well known data sets. 
            The object is to reduce the error rate - missed classification, and increase the overall validation (how many are correct).
        </p>

        <h4>Abstract</h4>
        <p>Vanilla back-propagation and its variants are both a commonly used and effective way to training artificial neural networks. 
            Vanilla back-propagation however has a tendency to have a long run time as it must do a forward pass through the network to 
            determine the error and then propagate it backwards in order to alter the weights. In this paper we will use another algorithm, 
            namely particle swarm optimization, to train the network on two datasets of varying complexity to determine its applicability 
            as a neural network training algorithm.
        </p>

        <h4>Technologies Used</h4>
        <ul>
            <li>Microsoft Visual Studio 2008</li>
            <li>C#</li>
            <li>LaTeX - Used to write reports</li>
        </ul>

        <basic-splide 
            :slidesList="slides.pso_ann">
        </basic-splide>

        <hr/>

        <h2 id="quiz_o_matic">Learning Object: Quiz-O-Matic 5000</h2>
        <h4>General Information</h4>
        <p>The overall task of the learning object was to teach and test mathematical concepts at a specific grade level. The grades I aimed 
            to focus were grade 9 and grade 10 at the Academic level. The grade 9 information is more towards the material found at the end
            of the grade 9 course. I found the transition from end of grade 9 into grade 10 to be smooth and flow nicely with the material. The 
            information for teaching material was found in The Ontario Curriculum, Grade 9 and 10: Mathematics.
            This project tested both my understanding of linear algebraic expressions and equations, as well as my ability to program in Visual 
            Basic. The need for this to be a learning tool forced me to take an alternative approach to coming up with an application.  Instead of 
            focusing on the purely technical details, I had to envision the full user experience and design a UI in such a way that it made learning the material easy for anyone. 
        </p>

        <h4>Technologies Used</h4>
        <ul>
            <li>Microsoft Visual Studio 2008</li>
            <li>Visual Basic</li>
        </ul>

        <basic-splide 
            :slidesList="slides.quiz_o_matic">
        </basic-splide>

        <hr/>

        <h2 id="space_animation">Space Animation</h2>
        <h4>General Information</h4>
        <p>This space animation project was the final project in my graphics class. We were required to make a short animation from the techniques 
            and tools learned throughout the course. The models were all manually created using Milkshape 3D and exported to an ASCII file which 
            included the coordinates and shape details. The main program parses the ASCII files and build the model in OpenGL in order to render the 
            shapes. It is a 35 second long animation of an alien space ship coming around a planet and shooting another spaceship, causing it to explode. 
        </p>

        <h4>Technologies Used</h4>
        <ul>
            <li>C</li>
            <li>OpenGL, GLUT- Open source library to display graphics</li>
            <li>Milkshape 3D - Create graphic models to use in animations</li>
        </ul>

        <basic-splide 
            :slidesList="slides.space_animation">
        </basic-splide>

        <hr/>

        <h2 id="giess">Galaxy Identification Expert System Shell (GIESS)</h2>
        <h4>General Information</h4>
        <p>GIESS is a project developed in Prolog which implemented an expert system to classify galaxies based on appearance. It uses a knowledge base 
            which defines rules and relationships for existing galaxies, and through a series of questions, the user narrows down the selection until one 
            is chosen. Research had to be done on existing galaxies in order to create the knowledge base and ensure it's accuracy. Existing classification 
            techniques were used in constructing the knowledge base. 
        </p>

        <h4>Technologies Used</h4>
        <ul>
            <li>Prolog</li>
            <li>Galaxy Zoo</li>
        </ul>

        <basic-splide 
            :slidesList="slides.giess">
        </basic-splide>
    </div>
</template>

<style scoped>
@import '../../node_modules/@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
.quick-links {
    margin-top: 30px;
    margin-bottom: 30px;
}

h2 {
  color: #8180b9;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

<script>
    import BasicSplide from '../components/BasicSplide'

    export default {
        components: {
            BasicSplide
        },
        data() {
            return {
                modalOpen: false,
                slidePath: ["../assets/slides/education/undergrad_thesis_research_project/birds_over_mountain.jpg"],
                slides:{
                    'undergrad_thesis_research_project': [
                        {src: require("../assets/slides/education/undergrad_thesis_research_project/birds_over_mountain.jpg")},
                        {src: require("../assets/slides/education/undergrad_thesis_research_project/pareto_front.png")},
                        {src: require("../assets/slides/education/undergrad_thesis_research_project/build_xml.png")},
                        {src: require("../assets/slides/education/undergrad_thesis_research_project/modified_hill_climbing_algorithm.png")},
                        {src: require("../assets/slides/education/undergrad_thesis_research_project/hill_climbing_algo.png")},
                    ],    
                    'pso_ann': [
                        {src: require("../assets/slides/education/pso_ann/ANN_report.png")},
                        {src: require("../assets/slides/education/pso_ann/swarm_prop_report.png")},
                        {src: require("../assets/slides/education/pso_ann/iterate_swarm_code.png")},
                        {src: require("../assets/slides/education/pso_ann/output.png")},
                        {src: require("../assets/slides/education/pso_ann/pso_opt_code.png")},
                        {src: require("../assets/slides/education/pso_ann/validation_rate_BP_report.png")},
                        {src: require("../assets/slides/education/pso_ann/validation_rate_PSO_report.png")},
                    ],
                    'quiz_o_matic': [
                        {src: require("../assets/slides/education/quiz_o_matic/main.png")},
                        {src: require("../assets/slides/education/quiz_o_matic/lessons.png")},
                        {src: require("../assets/slides/education/quiz_o_matic/lesson1.png")},
                        {src: require("../assets/slides/education/quiz_o_matic/question1.png")},
                        {src: require("../assets/slides/education/quiz_o_matic/function_fun.png")},
                        {src: require("../assets/slides/education/quiz_o_matic/function_fun_code.png")},
                    ],
                    'space_animation': [
                        {src: require("../assets/slides/education/space_animation/explosion_screenshot.png")},
                        {src: require("../assets/slides/education/space_animation/alienShipInit_code.png")},
                        {src: require("../assets/slides/education/space_animation/explosionInit_code.png")},
                        {src: require("../assets/slides/education/space_animation/main_code.png")},
                        {src: require("../assets/slides/education/space_animation/shootLaser_drawExplosion_code.png")},
                    ],
                    'giess': [
                        {src: require("../assets/slides/education/giess/milky_way.jpg")},
                        {src: require("../assets/slides/education/giess/galaxy_morphology.jpg")},
                        {src: require("../assets/slides/education/giess/hubble_tuning_fork.jpg")},
                        {src: require("../assets/slides/education/giess/main_code.png")},
                        {src: require("../assets/slides/education/giess/knowledge_base.png")},
                        {src: require("../assets/slides/education/giess/knowledge_base2.png")},
                    ],
                }
            }
        }
    }
</script>