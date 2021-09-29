import { parse } from "papaparse";

const csv = `image,fullName,year,whyInterested,csInterest,experience,roles
hamzah,Hamzah Punjabi,Fourth Year,I've been involved with the society for too long to not be a part of it. ,"I've been doing CS for 5 years. At first, I wanted to do CS cuz I thought I was good at it. Now it has become my passion and future. ",,Representative At-large
dewan,DEWAN MAKSUDUL ISLAM MUKTO,Second Year,"I wish to purge my previous misdeeds by contributing to the MUNCSS with my utmost efforts. No worries! I always try to be innovative and cook up novel ideas - no matter how lame or exciting. I also believe that someone else deserves my position to be a better executive. But, all in all, I wish to offer my gratitude to any ""opportunity costs"" that would result in me getting selected for a role.

As a bonus fact, I think having me as an executive would open up a new dimension of being able to understand how and why certain things would go wrong. (Kind of like ""reverse psychology"" I guess)","Well, I had been interested in and involved in work and activities related to CS since 2014, as a hobby. And of course, at MUN I had only been studying here since September 2020.","I had volunteering experience in the Duke of Edinburgh Awards 2018-19. I had taught a class of primary schoolchildren at a government school back in my home town. And my teaching method was effective enough to maximize their attendance rate as well as their overall sense of obedience. I also ran group projects of my own, e.g. a hobbyist-run anime studio.","Social Representative, International Student Representative, Technology Officer"
mohammed-balfaqih,Mohammed Balfaqih,Second Year,"I was introduced to MUN Computer Science Society when I started my first semester at Memorial University. The executives and members were helpful. They guided me to select my courses and answered any questions regarding the university, computer science courses, or life in St. John's. I am looking to help new and current students with what I got. I believe I can be helpful to a lot of students that are now in the same situation I was in the past. I am a good listener and understanding. I can relate to most issues students have because I had them before.","Fall 2021 is my third-semester studying Computer Science at MUN. I want to major in computer science because I always have been interested in and enjoying programming. I started game development as well as web development when I was 16. I have participated in multiple projects, and the most recent one is COREmenus. In the future, I look forward to studying more about cyber security because it's the most subject that interests me in computer science.","Yes I do. I am one of the three organizers of Game Development Qatar (GDQ). GDQ is a game development community and soon to be non profit organization located in Qatar. We held several game development events in Qatar with the help of some locale businesses and universities. I helped with organizing the first Game Jam in Qatar, GameQode. ","International Student Representative, Technology Officer, Event Coordinator"
gizem,Gizem Ensari,Second Year,"I am very passionate about learning about computer science and math. I would really enjoy being involved as an executive in the computer science society. I enjoy working hard, and am aware of my responsibilities to accomplish them on time with a positive attitude.","I started to take a computer science class when I was in grade 12, and since then I have really enjoyed it. (I am a second year student now.) Coding with math and logic involved is so much fun for me. 
I also have done some small projects on my own, such as creating an integral solver/area finder of a quadratic where you put the values of “a”, “b” and “c” of a quadratic, and two x points, (x1 which is the upper bound and x2 which is the lower bound) then my program solves for the quadratic equation’s integral, and the area of the equation from the lower bound to the upper bound. 
I also created a back end of an e-diary app where you can create your password and username to log in later and write something on your e-diary/see what you have on your diary so far. This gets saved in a file for each user with the file name being the username of the user which means a new file will be automatically created for each user, and their data will be saved there.
","In my high school ( Leo Hayes High School in Fredericton/New Brunswick/Canada) I had been the Global Minds Club leader for 2 years, and have won the Cultural Diversity of New Brunswick 2019 award in the youth section, and also had volunteered to be a math tutor for three semesters. ",International Student Representative
,Ripudaman Singh,Second Year,"I am a fairly active member of the Discord server, and I'm passionate about Computer Science. Being part of the exec would let me connect with more people and participate in making decisions that matter.","I'm doing second year courses right now, and coding/learning new languages interests me. I also love the social aspect of being part of the society, as it is such a welcoming place.","I haven't held any managerial positions before, but I feel I am confident and capable enough to handle whatever the positions entail.","Treasurer, Event Coordinator, International Student Representative"
abdullah,Abdullah Aqeel,Second Year,I have held multiple leadership positions and my ever growing interest in CS makes me want to apply for an executive location ,"2 years, being able to build stuff myself. The thrill of problem solving. ","Yes, I was the president of CS Society at my hugh school ","Treasurer, International Student Representative, Technology Officer"
abdulrahman,Abdulrahman Marwan Mahmood,First Year,"I am interested in becoming an executive because I thought my skill set would be a great fit for the position I enjoy organizing, joining meetings and aiding those who need my help. I also knew that I could learn many different new things by becoming an executive for the computer science society, I would be a good executive because I naturally love to listen to people's opinions and concerns about things, and this could be a great trait that can help me in speaking to computer science students about their concerns and issues with the society and the department, I also consider myself a neat organized person so I can also greatly help in finding solutions for the issues and concerns brought up by students.","I am in my first year and first semester actually (fall) but I have had a love for CS since I was really young (still young :p) and this is mostly due to video games which gave me the passion for computers and software in general, many things interest me in CS like the problem solving aspect which could be really rewarding when I figure out a problem and be able to fix it without too many bumps in the road, and generally CS could never get boring because there is always a problem to solve so it never really gets boring to me because of the constant activity I would be doing.","yes, in high-school I was an organizer for our local debate team I had very similar responsibilities to the ones I would have here at the CS society, like listening to concerns and fixing issues brought up by students as well as joining day to day activities and meetings.","First Year Representative, Representative At-large"
girish,Girish Verma,First Year,I like to help people and I stay up do date with the computer sceince academics and events .,"I am a first year student, I like to work on projects and make new things in different ways. Thats why I like cs",I have studied python for 2 years so I can be of help academically too.,First Year Representative
mohammad-tanvir,Mohammad Tanvir Azam Rizvie,First Year,I can help people with tech stuff.,I'm on my first year first semester. Been in love with tech for so long.,"No I didn't. But I'll try my best
","International Student Representative, First Year Representative, Representative At-large"
anas,Anas Mohammad Rashid,Second Year,"because I want a role that would allow me to have a great impact on the group, and they reason why I would be a good executive is that I enjoy organising events and assisting with event monitoring",i've been in CS for 2 years and the fact that the whole future is leading to technology and the demand for CS students will be exceptionally high and It's a whole different sensation to use technology to solve difficulties!,"yes, i have managed a weight loss competition event in my high school with prize pool for 3 months and i organized it with couple other teammates with having the data hand written as well.  ","Event Coordinator, Social Representative, International Student Representative"
zachary,Zach Vaters,Fourth Year,"Being on the executive would allow me to provide some consistency to the technology officer role. As a senior computer science student, I have experience with our computer science society before and during the pandemic. I have high-level experience in all of the requirements necessary for an effective technology officer and I have the drive to be a strong leader. I feel I could transition easily into this position and be a strong contributor to our society. 

One of the ways I've contributed to society already is through contributing to our discord bot Automata, I built a plugin that provided a utility for students known as TodayAtMun. Allowing students to query their exam times, significant dates in the MUN calendar, and an automated channel providing the next date on the calendar. I developed this plugin in my free time because of my passion to help students as they navigate through their program, If elected technology officer I would like to escalate aspects of not only remote(discord, society website, etc) but in-person events like lans, talks, and other activities for the society.

I've been an active member of society for all of my studies, albeit the last two years mostly being online, but I'm always providing advice to all students when needed.","I'm a fourth-year Computer Science student.

Computer Science interests me as it is always evolving. There are many aspects to Computer Science that it's always fascinating to study. My interests in computer science right now are, Machine Learning, Web development, and Algorithms.","For the role of a technology officer, 

I've worked with React and React Native, JS, back-end experience with Golang, C#, NodeJS, and Python flask. Experience with AWS, SAM, Lambda, Cognito, and various other AWS services.

Experience with many languages through studies, personal hobbies, and work experience.

Experience hosting and managing servers. Most computer science students are aware there is a server that the society hosts for MC. I would like to get this revamped and active again.",Technology Officer
trishir,Trishir Kumar Singh,First Year,"I have always had interest in actively participating in decision making bodies. This may be because of my love to manage, to organize and to solve problems. To this end, I have accumulated experience in many such positions in the past where I would have the authority to exercise power. At the expense of praising myself, I have had a number of successful terms in varying executive positions.","CS has fascinated me since I was first acquainted with QBasic in Fifth grade. Since then, it has been like a boulder down a hill. My interests in CS grew in numerous ways. Whether it was getting addicted to video games or trying out HTML for the first time. I had many a wonderful firsts, some quiet frustrating too, and still continue to experience a lot more. ","The primary reason which makes me a great executive for any of these positions is my past experience with such roles. I have been the President of my High School's Student Council in my 12th grade and the Vice-President in 11th grade. Before that, I held a couple of other executive positions on the Council. Besides the Student Council, I have also been the Founder Vice-President of the Computer Science club at my high school, which sadly did not exist before. Other than this, I have considerable experience in volunteering as well. Initially being just a volunteer, I eventually became Bhumi's (one of India’s largest independent youth volunteer non-profit organizations) campus catalyst and organized several campaigns of my own.","Social Representative, International Student Representative, First Year Representative"
colton,Colton Fridgen,First Year,"I am interested in becoming an executive because I want to get to know and help other computer science students like me, that are new to comp sci who need help and guidance to achieve their academic and personal goals. I think I would be a good executive because I am always able to find quick and easy, yet impactful solutions to any obstacle that may come about.  ","This is my first year studying comp sci at MUN however, I have been teaching myself the basics of computer programming for at least a couple years now through online codecademy courses. I've always had a liking towards technology and video games. since I was a kid I wanted to learn how computers really worked as well as design video games, all of which are dreams I still hold. recently I've gained a large interest in AI programming and neural networks, things I hope to study in the upcoming years.",I am very reliable as I've been working for staples as a technician and sales associate for the last 3 years,Representative At-large
somaditya,Somaditya Sinha,First Year,"Because, the MUN CS Society has always been of special importance to me.

Last year, when I was confused about whether I should apply to MUN or not, while browsing Memorial's website I found out about the MUN CS Discord Server. I immediately joined and after spending a week on the chat, asking questions and just feeling the vibe of the group I knew I had to join MUN. 

So, basically this Society is what actually made me take the leap and come to this uni. 

The atmosphere created by Madison Emshey, Mudkip, David Chicas, and all the other execs is almost unbelievably welcoming. They answer every single question no matter what it it is and they answer fast. I haven't seen a server as active as this.

Having such a deep connection with this society and CS in general, I have a lot of dreams for the future of this society. I want to contribute to the best of my capabilities so that MUN CS can become even more grand and open. I want students from all over Canada to wish to join this society because it is so much more enticing, valuable and straight up Cooler than the rest of the CS groups. This society is already thriving with liveliness and enthusiasm but I still wish to help encourage innovation and creativity here. I want to give capable, passionate students all the resources they need to make their ideas come to reality. Maybe the next Uber or GitHub gets developed here! 

I will strive to get close to these dreams every single second I am an executive here. I've always dreamed of contributing at this scale but couldn't because my high school didn't have a CS club. But now, I feel like this is a wonderful opportunity to make that wish of mine come true.","Although, I've been tinkering with computers since 2nd grade, I've fully committed myself to CS since 8th grade (when I was 13). 

There are two things about CS that interest me the most: 

1. The versatility. While studying most subjects, the deeper you go into their study, the more restricted you become in terms of what you can do outside your specific field. CS, on the other hand, broadens your reach the more you learn about it. What I mean is, if a person masters making efficient, scalable and user-friendly software or developing new innovative algorithms, they have the ability to apply that knowledge to any field they want! You can make an app for the Medical industry and save lives! or you can make a data analysis program for a finance-related company (hedge funds) and make millions! The world is truly your oyster once you master CS.

2. The New-ness. Now, one might argue that CS is quite an old field but not as old as most of the other STEM subjects. It's still evolving, new developments are being made every day! CS keeps me on my toes all the time as there is always something new to learn or discover, that's what keeps me from getting bored with it and stay driven.","During my high-school I have led web-development teams for 4 projects. We made websites for school events and also the school magazine.

I self-studied through Harvard's CS50x course on Edx and have also worked read a lot of CS-related books in my spare time. 

I am currently the community youth and communications manager for Earth2.0 at UC San Diego and also the community lead at OASIS, a project under Earth2.0

I can work in GitHub, Linux and Vim.
I have experience programming in HTML, CSS, JavaScript, PHP, MySQL, Python, C/C++ and QBASIC.
I have used Mac OS, Windows and Linux-distros as my operating systems and can operate comfortably in any of them.
","Event Coordinator, Technology Officer, Representative At-large"
abhinav,Abhinav Salgania,Second Year,"Ambitious, Enthusiastic and Inquisitive. These are the adjectives that define me and would help me be your best representative in the Computer Science Society. As an executive, I would make sure that your voice and your concerns are well heard by the administration. I would put in the effort to organize more game nights, lunches, dinners, pub-crawls, industry talks so that you have more fun, study better and make more meaningful relationships during the time that you spend here. I would be dedicated to breaking down barriers between the students and the professors and would take measures to eliminate all algorithmic remote invigilation softwares.","I've loved computers and have found myself getting involved with computers long before I realized it would help me get a job with a salary of 100k dollars. The ability to spend hours on a problem, getting frustrated, and then suddenly getting a EUREKA moment realizing that the solution was right there in front of me is what interests me about Computer Science. The wide array of problems that we deal with today; social media taking over our lives and breaking down the fabric of society and how to prevent that (or if I work at Facebook later, how to continue that, jk I won't, it's too unethical ), Elon Musk setting up a colony on Mars and me getting excited when my crush sends me a message - all of this can be understood better by studying Computer Science. It's fun : )",,"International Student Representative, Science Society Representative, Representative At-large"
kanika,Kanika Mathur,Second Year,"I have contributed to impacting outcomes throughout my life through effective organization, prioritization, and execution of critical projects. My skills are an ideal match to the position requirements and will bring immediate value to the Memorial University Computer Science Society.
I have always exercised a calculated and methodical approach to problem-solving. I am independently motivated, yet I appreciate team efforts and collaborate productively within groups. I believe my communication; interpersonal and problem-solving abilities will help me perform my duties for the Computer Science Society.
","I am a second-year undergraduate student and have declared my Major in Computer Science. Having been in love with computers since a very young age, it was probably my passion for sci-fi movies soaked in computers, which finally determined my choice of Computer Science. Computer Science interests me at multiple levels. Learning, along with the problem-solving aspect, seems rewarding to me. I find it to be a science of abstractions. How we perceive, understand and interact with the world is mediated by computers which I find exciting! I am particularly interested in the aspect of knowing how things work, and thus networks and applications interest me the most.","As a result-driven and dedicated individual with excellent verbal and communication skills, I am currently the Communications Executive of the Indian Youth Association, Memorial University of Newfoundland. My role in this position consists of planning and promoting the organization's overall communication strategies, including social media communications and designing infographics.
I have also held the position of Research Assistant at the Sleep, Health and Wellness Lab in the Department of Psychology, Memorial University of Newfoundland. In this capacity, apart from other responsibilities, I also prepared infographics for various social media platforms to create awareness on Breast cancer treatment and its recurrence. 
I am currently engaged as a volunteer with MUN Shinerama, Memorial University of Newfoundland. Through various social activities and promotions on social media platforms, I raise funds for patients suffering from cystic fibrosis.
I hope to contribute to the Computer Science society by working at multiple levels and raising awareness amongst students about various events.
","Social Representative, Science Society Representative, Representative At-large"
,Leah Murphy,First Year,"When I joined the society about a year ago, I found a lot of people I connected with. I have wanted to be elective since the beginning because I want to bring my ideas and skills to the table.","As a kid, I always dreamed of being the stereotypical *types aggressively* “I’m in.” hackerman. When I started CS last year, I would be lying if I said I didn't still believe in that (just a little bit). What I discovered is that I could be creative and build things. Make things people would use (or absolutely despise); It’s up to you!","Even if I am not the most skilled in the technical side of things, I think bringing in people with new perspectives and skills can greatly benefit the society. My creative skills would definitely be an asset. I have been freelance writing for around five years, and I have several years of experience in drawing and graphic design. I have been looking to apply my skills to a more professional outlet, and this is the perfect opportunity!","Social Representative, Representative At-large"`

const shuffle = (array) => array.sort(() => Math.random() - 0.5);
export const data = shuffle(parse(csv, { header: true }).data);