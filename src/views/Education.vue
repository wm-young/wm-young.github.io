<template>
  <div class="education">
    <h1>Education</h1>
    <h3>BSc. Computer Science</h3>
    <p> Brock University, St.Catharines, Ontario <br/>
        Honors. concentration in Intelligent Systems, Minor in Mathematics
    </p>

    <h2>Comparative Study of Particle Swarm Optimization and Back-Propagation of Artificial Neural Network Training Algorithms</h2>
    <h3>General Information</h3>
    <p>This project was a collaborative project with a partner for one of the courses in Artificial Intelligence. 
        It involved combining two algorithms we learned in the course, Artificial Neural Networks and Particle Swarm Optimization. 
        We wanted to see the effects of using Particle Swarm to adjust the weights of the neural network to train the system 
        to recognize two different pattern sets; Digit (Number) Recognition and Wine classification, using 2 well known data sets. 
        The object is to reduce the error rate - missed classification, and increase the overall validation (how many are correct).
    </p>
    <h3>Abstract</h3>
    <p>Vanilla back-propagation and its variants are both a commonly used and effective way to training artificial neural networks. 
        Vanilla back-propagation however has a tendency to have a long run time as it must do a forward pass through the network to 
        determine the error and then propagate it backwards in order to alter the weights. In this paper we will use another algorithm, 
        namely particle swarm optimization, to train the network on two datasets of varying complexity to determine its applicability 
        as a neural network training algorithm.
    </p>
    <h3>Technologies Used</h3>
    <ul>
        <li>Microsoft Visual Studio 2008</li>
        <li>C#</li>
        <li>LaTeX - Used to write reports</li>
    </ul>

    <h2>Learning Object: Quiz-O-Matic 5000</h2>
    <h3>General Information</h3>
    <p>The overall task of the learning object was to teach and test mathematical concepts at a specific grade level. The grades I aimed 
        to focus were grade 9 and grade 10 at the Academic level. The grade 9 information is more towards the material found at the end
        of the grade 9 course. I found the transition from end of grade 9 into grade 10 to be smooth and flow nicely with the material. The 
        information for teaching material was found in The Ontario Curriculum, Grade 9 and 10: Mathematics.
        This project tested both my understanding of linear algebraic expressions and equations, as well as my ability to program in Visual 
        Basic. The need for this to be a learning tool forced me to take an alternative approach to coming up with an application.  Instead of 
        focusing on the purely technical details, I had to envision the full user experience and design a UI in such a way that it made learning the material easy for anyone. 
    </p>
    <h3>Technologies Used</h3>
    <ul>
        <li>Microsoft Visual Studio 2008</li>
        <li>Visual Basic</li>
    </ul>

    <h2>Space Animation</h2>
    <h3>General Information</h3>
    <p>This space animation project was the final project in my graphics class. We were required to make a short animation from the techniques 
        and tools learned throughout the course. The models were all manually created using Milkshape 3D and exported to an ASCII file which 
        included the coordinates and shape details. The main program parses the ASCII files and build the model in OpenGL in order to render the 
        shapes. It is a 35 second long animation of an alien space ship coming around a planet and shooting another spaceship, causing it to explode. 
    </p>
    <h3>Technologies Used</h3>
    <ul>
        <li>C</li>
        <li>OpenGL, GLUT- Open source library to display graphics</li>
        <li>Milkshape 3D - Create graphic models to use in animations</li>
    </ul>

    <h2>Galaxy Identification Expert System Shell (GIESS)</h2>
    <h3>General Information</h3>
    <p>GIESS is a project developed in Prolog which implemented an expert system to classify galaxies based on appearance. It uses a knowledge base 
        which defines rules and relationships for existing galaxies, and through a series of questions, the user narrows down the selection until one 
        is chosen. Research had to be done on existing galaxies in order to create the knowledge base and ensure it's accuracy. Existing classification 
        techniques were used in constructing the knowledge base. 
    </p>
    <h3>Technologies Used</h3>
    <ul>
        <li>Prolog</li>
        <li>Galaxy Zoo</li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: #8180b9;
  font-size: 36px;
}

h2 {
  color: #8180b9;
  font-size: 32px;
}
</style>