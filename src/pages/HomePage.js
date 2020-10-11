import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import InfoSection from '../components/InfoSection';

import R3LogoBlack from '../assets/R3LogoBlack.jpg';
import roverPlotDemo from '../assets/roverPlotDemo.gif';
import rover3 from '../assets/rover3.jpg';
import utah1 from '../assets/utah1.jpg';
import flutter2 from '../assets/flutter2.png';
import flutter_logo from '../assets/flutter_logo.png';
import AppDemo from '../assets/AppDemo.gif';
import AStudioSC1 from '../assets/AStudioSC1.png';
import PCB1 from '../assets/pcb1.jpg';
import eagle_black1 from '../assets/eagle_black1.png';
import PCBschematic from '../assets/PCBschematic.png';
import IEEE from '../assets/ieee.jpeg';
import circuit3 from '../assets/circuit3.jpg'
import fpgaSch1 from '../assets/fpgaSch1.png';
import FPGA from '../assets/FPGA.jpg';
import q2 from '../assets/q2.jpg'
import BankCode2 from '../assets/BankCode2.png';
import BankDemo1 from '../assets/BankDemo1.png';
import Java from '../assets/java.jpeg';
import JavaBG from '../assets/javabg.jpg';
import iot1 from '../assets/iot1.jpg';
import iotbg from '../assets/iotbg.jpg';

function HomePage(props) {

    return(
        <div className="bg-colour">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Carousel />
            <div>

            </div>
            <InfoSection 
            bgImg={utah1} 
            img1={R3LogoBlack} 
            txt1p1="As the leader of the autonomous functions and GPS teams for the Ryerson Rams Robotics, I've had the chance to collaborate with some very driven people to create intelligent systems and spark a passion for robotics."
            txt1p2="The challenges we have faced in designing and adapting to new situations have been tough and rewarding, giving us the opportunity to innovate new solutions and work together more cohesively."
            img2={roverPlotDemo} 
            txt2p1="Due to the arrival of COVID-19, we have had to adapt our plans going forward on the fly. In order to compensate for the lost access to our rover, we created multiple simulations to reproduce the movements and data outputs needed to perform testing."
            txt2p2="We created data generators that mimiced realistic rover movements and sensor data to develop our pathfinding algorithms (the one to the left is one of our first iterations, using a cartesian plane and a lower sensor poll rate). Having to manually account for all possible situations gave us a deeper understanding of what was needed and in turn helped us create more efficient pathfinding algorithms."
            img3={rover3}
            txt3p1="The work I've done on this team has given me the opportunity to learn new languages, platforms and libraries. Some of my favourite takeaways have been Linux development, robust usage of Python libraries like pandas and Matplotlib, and more experience with communication protocols (UDP, TCP/IP, Ethernet)."
            txt3p2="My team and I have been working very hard towards creating the best algorithms we can to ensure success at the competition. I'm extremely excited to be leading these teams and can't wait to compete at CIRC 2021!"
            link=""
            linkText=""
            />
            <InfoSection 
            bgImg={flutter2} 
            img1={flutter_logo} 
            txt1p1="In my committment to becoming more organized, I found there to be a lack of resources that truly gave me the control I wanted from my note taking apps. I decided to create <Insert App Name Here> because I wanted to cater to users like me — people who want a clean UI combined with ultimate customizability."
            txt1p2="<Insert Name Here> puts the power back into the hands of the user. After first focusing on maintaining an easy-to-use design scheme, my ultimate goals are to enable fully customizable notifications, reminders, calendar integrations and more. After all, who knows how you stay organized better than yourself?"
            img2={AStudioSC1} 
            txt2p1="Although I'm most comfortable with Java, I decided to push myself and explore other avenues for the development of this app. I settled on using Flutter, Google's open-source SDK built for Dart. I appreciate the flexibility it gives me to experiement with Material UI and different backend solutions."
            txt2p2="I'm using the Flutter package SQflite — a SQLite plugin — to manage the database for storing notes. I hope to use Firebase or some other online solution to enable cloud sync and saving down the line, but my first focus is to provide a strong local experience before expanding further."
            img3={AppDemo}
            txt3p1="Being one of my first real forays in front-end development, I have learned a lot of valuable lessons in working on this project. It helped me realize the importance of fluid design that works intuitively for the user. Alongside customizability, I am committed to providing options to improve the accessibility of the app, from visual contrast to design overhauls. I appreciate all feedback so that I can make <Name Here> an organizational tool for everyone."
            txt3p2="This app is still a work in progress. I have some more development to do before deployment and lots of ideas for new features post-release! I hope you'll follow along its development as I continue to improve the design and experience. You can view the source code for the project "
            link="https://github.com/aimhus/Note-Taking-App"
            linkText="here."
            />
            <InfoSection 
            bgImg={eagle_black1} 
            img1={IEEE} 
            txt1p1="Back in 2019, I created an audio amplifier PCB alongside the IEEE Ryerson Chapter. This was my first foray into circuit board design, which helped me understand the importance of clean labelling and efficient use of components."
            txt1p2="I loved spending time at these workshops, as I made a ton of new friends and met lots of knowledgeable people. I always appreciated coming in to work on our projects and receiving guidance from our mentors, who created a super welcoming environment where we could learn at our own pace."
            img2={PCB1} 
            txt2p1="This board receives input from either a 3.5mm audio jack or the built-in microphone, with a switch to toggle between sources. The signal is reproduced at a user variable volume through another 3.5mm aux cable."
            txt2p2="A potentiometer is used to modify the resistance and and act as a volume knob, with a network of coloured LEDs to indicate the current level. The board also features expandibility by allowing me to add a speaker down the line."
            img3={PCBschematic}
            txt3p1="The bulk of this project was learning the fundamentals of circuit design and implementing it using Eagle CAD. I really enjoyed this process because it was the first real application of the course material I had been learning in class."
            txt3p2="Here's a picture of the schematics (type of file name). explain it"
            //link="https://github.com/aimhus/Portfolio-Website"
            //linkText="here. (Change link)"
            />
            <InfoSection 
            bgImg={circuit3} 
            img1={q2} 
            txt1p1="Last year, for the final project of my Digital Systems class, I designed a General Processor to perform different arithmetic and logical operations on user inputs, then implemented it on an Altera Cyclone II FPGA using VHDL on Quartus II."
            txt1p2="At the heart of the processor is an Arithmetic Logic Unit, which is controlled by a Finite State Machine and a 4x16 decoder unit. The ALU would cycle through a list of coded numeric and logical operations performed on two 8-bit unsigned integer values. The order of these operations would be managed by a Control Unit composed of a 4x16 decoder and a FSM. The FSM goes through its order of states and the 4x16 decoder converts these states into commands that the ALU can recognize. There are 9 operations coded into the ALU. The ALU can be further modified to perform a separate set of operations."
            img2={fpgaSch1} 
            txt2p1="Here is an overhead view of the entire block diagram. In the top left, you can see Latches A and B that store the 8-bit numbers on which the operations will be performed. On the rising edge of the clock signal, these numbers are passed to the ALU as inputs. Other inputs include the Clock signal and the OP-code from a 4-to-16 decoder that selects which operation will be performed."
            txt2p2="Once the ALU has performed the correct operation, it outputs the answer to two Seven Segment Displays. A separate output tells us whether the final answer is negative — if it is, the SSEG will display the appropriate sign before the answer."
            img3={FPGA}
            txt3p1="One of the biggest reasons I chose to pursue Computer Engineering was my fascination with processor design. Ever since I started designing custom PCs in high school, I've had a desire to know more about how the tech products we take for granted do what they do. This curiosity sparked an interest in understanding chip design and architecture, a passion I still pursue to this day."
            txt3p2="Needless to say, this project was super exciting for me. Although the processor shown here is very basic compared to what powers our devices today, it gave me understanding of the fundamentals and hands-on experience. I love being able to apply what I learn in class and achieve tangible results, so I'm very grateful for this opportunity. You can view the full details of the processor in "
            link="https://github.com/aimhus/Portfolio-Website"
            linkText="this report."
            />
            <InfoSection 
            bgImg={JavaBG} 
            img1={BankCode2} 
            txt1p1="To showcase what we had learned in our Object Oriented Analysis and Design course, I wrote a Banking Management simulation in Java. The app features a login system, which authenticates the customer's username and password by comparing string values to the ones in local storage."
            txt1p2="This project implemented the State Design Pattern to manage the user's current membership tier (explained below). It also placed an emphasis on Abstraction, with functions implemented to verify it and the Rep Invariant. I created UML Use Case and Class Diagrams to visually represent the full systems. JavaFX was implemented to create the GUI."
            img2={BankDemo1} 
            txt2p1="There are two separate types of account management, each only available to a specific type of user. If you log in as the administrator, you have the ability to register or delete new account holders. A list on the side updates in real time to show which users are currently registered with you, while protecting their password and account balance."
            txt2p2="If you instead log in a customer, you gain access to your personal account. On this screen, you can see your current balance, and are assigned a membership level based on the amount. Tiers include Silver, Gold and Platinum, which sequentially offer more benefits, such as lower surcharges on purchases. Each account also has the ability to deposit, withdraw and make purchases, with the current balance and membership level displaying in real time."
            img3={Java}
            txt3p1="Java is my favourite programming language at the moment, because I like the way it handles Object Oriented Programming and the clear memory management. I have always enjoyed backend design, so coming up with solutions on how to manage all the possible user functions was really enjoyable. This was also my first time designing a GUI with JavaFX, so being able to play with the layout and connect it to the backend I had written was a fun experience."
            txt3p2="Check out the source code for this project on my "
            link="https://github.com/aimhus/BankApp"
            linkText="Github Repository."
            />
            <InfoSection 
            bgImg={iotbg} 
            img1={iot1} 
            txt1p1="Some Current Project? Maybe BS the hockey website lol"
            txt1p2="<Insert Name Here> puts the power back into the hands of the user. After first focusing on maintaining an easy-to-use design scheme, my ultimate goals are to enable fully customizable notifications, reminders, calendar integrations and more. After all, who knows how you stay organized better than yourself?"
            img2={roverPlotDemo} 
            txt2p1="Although I'm most comfortable with Java, I decided to push myself and explore other avenues for the development of this app. I settled on using Flutter, Google's open-source SDK built for Dart. I appreciate the flexibility it gives me to experiement with Material UI and different backend solutions."
            txt2p2="Something about SQLite and technical things here."
            img3={roverPlotDemo}
            txt3p1="Being one of my first real forays in front-end development, I have learned a lot of valuable lessons in working on this project. It helped me realize the importance of fluid design that works intuitively for the user. Alongside customizability, I am committed to providing options to improve the accessibility of the app, from visual contrast to design overhauls. I appreciate all feedback so that I can make <Name Here> an organizational tool for everyone."
            txt3p2="This app is still a work in progress. I have some more development to do before deployment and lots of ideas for new features post-release! I hope you'll follow along its development as I continue to improve the design and experience. You can view the source code for the project "
            link="https://github.com/aimhus/Portfolio-Website"
            linkText="here. (Change link)"
            />
        </div>
    );

}

export default HomePage;