import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  downloadResume: string = 'Download Resume'
  flagDR: boolean = true

  src: string = 'assets/img/face/face1.jpg'
  resume: string = "assets/img/resume/Prasad's Resume.pdf"

  setn1: string = ''
  setn2: string = ''
  setn3: string = ''
  blink: string = ''

  name: string = 'Prasad Madusanka'
  selfDescription1: string = 'I’m a Full Stack Developer with more than 1 year industrial experience and around 2 year experience in freelance development.'
  selfDescription2: string = 'And I’m an undergraduate joiner with strong and well developed industrial skills in Web development. Also i have freelance experience in Mobile apps & Standalone application development including design, delivering and maintenance.'
  nameWithInitials: string = 'W. H. M. Prasad Madusanka Wijepala'
  bornDate: string = '13'
  bornMonthAndYear: string = 'October 1995'
  gender: string = 'Male'
  maritalStatus: string = 'Single'
  homeAddress: string = 'No 14, Hippala rd, Thalatuoya(20200), Kandy'
  mobileNumber: string = '(+94) 777 578 947'
  emailAddress: string = 'prasad.mads@gmail.com / prasad@prasadmadusanka.me'
  freelance: string = 'Available'
  nic:string = '952873563V'
  skills: string = 'Web, Mobile & Microservice development'

  linkedin: string = 'https://www.linkedin.com/in/prasad-madusanka'
  bitbucket: string = 'https://bitbucket.org/prasadMadusanka/'
  gmail: string = 'mailto:prasad.mads@gmail.com'
  repoAccessMail: string = 'prasad.mads@gmail.com'
  mail: string = 'mailto:hello@prasadmadusanka.me'

  industrial: any = []
  education: any = []

  scripts: any = []
  programmingAndWeb: any = []
  frameworks: any = []
  databases: any = []
  servers: any = []
  packages: any = []
  environments: any = []
  cservices: any = []
  toolsIDEs: any = []
  operatingSystems: any = []

  softSkills: any = []

  projects: any = []

  extraCurricular: string[] = []
  interests: string[] = []

  constructor() { }

  ngOnInit() {
    this.initUI()

    var skills = [
      { 'sk1': "Web", 'sk2': "Designer & Developer" },
      { 'sk1': "Mobile", 'sk2': "Developer" },
      { 'sk1': "Full Stack", 'sk2': "Developer" }
    ]

    this.setn1 = skills[2].sk1
    this.setn2 = skills[2].sk2

    var flag = true
    setInterval(() => {
      this.blink = (flag) ? '_' : ''
      flag = !flag
    }, 700)


    // this.setn1 = skills[0].sk1
    // this.setn3 = skills[0].sk2
    // this.setn2 = ''
    // this.onModelChange(this.setn3)


    // var index = 1

    // setInterval(() => {

    //   this.setn1 = skills[index].sk1
    //   this.setn3 = skills[index].sk2
    //   this.setn2 = ''
    //   this.onModelChange(this.setn3)
    //   index++

    //   if(index == skills.length)
    //   index = 0
    // },4000)



  }

  onModelChange(word) {
    var index = 0
    setInterval(() => {
      this.setn2 += word.charAt(index)
      index++
    }, 100)
  }

  initUI() {
    this.industrial = [
      {
        'year': '2018',
        'role': 'Working as a Freelance Developer',
        'company': 'Freelance',
        'duration': 'from 2018 October',
        'rolesPlayed': '',
        'technologies': 'Spring boot, Javascript, Angular 6, Node Js, MEAN, HTML, CSS, SCSS, Batch Script & MongoDB'
      },
      {
        'year': '2017',
        'role': 'Worked as a Junior Software engineer',
        'company': 'Virtusa Pvt Ltd',
        'duration': 'from 2017 June to 2018 October',
        'rolesPlayed': 'Roles - Junior Software Engineer & Software Engineer',
        'technologies': 'Java Fx, Spring boot, Javascript, Angular Js, Angular 4 & 5, Node Js, MEAN, HTML, CSS, SCSS, Shell Script, Batch Script, OrientDB & MongoDB'
      },
      {
        'year': '2016',
        'role': 'Worked as a Freelance Developer',
        'company': 'Freelance',
        'duration': 'from 2016 to 2017 June',
        'rolesPlayed': '',
        'technologies': 'Android, Java, C#, Javascript, HTML, CSS, MySQL & SQLite'
      }
    ]

    this.education = [
      {
        'year': 'Present',
        'university': 'National School of Business Management',
        'duration': 'From 2017 to 2019',
        'qualification': 'BSc (Hons.) in Computer Science',
        'achievement1': 'Expecting to complete the degree offered by',
        'achievement2': '',
        'gpa': 'University College Dublin - Ireland'
      },
      {
        'year': '2017',
        'university': 'National Institute of Business Management',
        'duration': 'From 2016 to 2017',
        'qualification': 'Higher Diploma in Computer Based Information Systems',
        'achievement1': 'Successfully completed with a GPA of',
        'achievement2': 'in the Second Year of the degree',
        'gpa': '3.61'
      },
      {
        'year': '2016',
        'university': 'National Institute of Business Management',
        'duration': 'From 2015 to 2016',
        'qualification': 'Diploma in Computer System Design',
        'achievement1': 'Successfully completed with a GPA of',
        'achievement2': 'in the First year of the degree',
        'gpa': '3.71'
      },
      {
        'year': '2013',
        'university': 'Java Institute for Advance Technology Sri Lanka',
        'duration': 'From 2012 to 2013',
        'qualification': 'Oracle Certified Professional Java Programmer',
        'achievement1': 'Completed the course',
        'achievement2': '',
        'gpa': ''
      },
      {
        'year': '2012',
        'university': 'Java Institute for Advance Technology Sri Lanka',
        'duration': 'From 2012 to 2013',
        'qualification': 'Java Standalone Application Development (JSAD)',
        'achievement1': 'Completed the foundation course',
        'achievement2': '',
        'gpa': ''
      }
    ]

    this.programmingAndWeb = [

      {
        icon: "fa-node nodejs",
        title: "Node Js",
        content: "Proficient in backend service development with Node Js & Express Js.",
        style: "icon-info"
      }, {
        icon: "java",
        title: "Java",
        content: "Good knowledge in application & service development with Java programming language.",
        style: "icon-warning"
      }, {
        icon: "fa-js js",
        title: "Javascript & Typescript",
        content: "Good Experience in web development with Javascript.",
        style: "icon-primary"
      }, {
        icon: "fa-html5 html ",
        title: "HTML",
        content: "Proficient in web front end development with HTML5.",
        style: "icon-success"
      }, {
        icon: "fa-sass scss",
        title: "Sass",
        content: "Good experience in SCSS.",
        style: "icon-success"
      }, {
        icon: "fa-css3 css3",
        title: "CSS",
        content: "Good experience in CSS3.",
        style: "icon-success"
      }, {
        icon: "fa-whmcs shell",
        title: "Shell & Batch Script",
        content: "Good knowledge & experience in Shell scripting & Batch scripting.",
        style: "icon-rose"
      }, {
        icon: "",
        title: "C#",
        content: "Experience in standalone application development with C#.",
        style: "icon-success"
      }
    ]

    this.frameworks = [
      {
        icon: "fab fa-angular angular",
        title: "Angular",
        content: "Proficient with Angular & sharp web development experience with Angular 4, 5, & 6 releases.",
        style: "icon-info"
      }, {
        icon: "fab fa-react react",
        title: "React",
        content: "Basic knowledge in web development with React framework.",
        style: "icon-info"
      }, {
        icon: "fas fa-leaf",
        title: "Spring Boot",
        content: "Good experience in Spring Boot Microservice development.",
        style: "icon-info"
      }
    ]

    this.databases = [
      {
        icon: "fab fa-angular",
        title: "Mongo DB",
        content: "Sharp & good experience in MongoDB.",
        style: "icon-info"
      },
      {
        icon: "fab fa-angular",
        title: "Orient DB",
        content: "Familiar with Orient DB.",
        style: "icon-info"
      },
      {
        icon: "fab fa-angular",
        title: "SQL",
        content: "Have good experience with SQL databases.",
        style: "icon-info"
      }
    ]

    this.servers = [
      {
        icon: "fab fa-angular",
        title: "Apache Tomcat",
        content: "Good experience in Apache Tomcat server.",
        style: "icon-info"
      },
      {
        icon: "fab fa-angular",
        title: "PM2",
        content: "Well experienced in PM2 server",
        style: "icon-info"
      },
      {
        icon: "fab fa-angular",
        title: "Nginx",
        content: "Basic knowledge in Nginx server",
        style: "icon-info"
      }
    ]

    this.packages = [
      {
        icon: "fab fa-npm npm",
        title: "npm",
        content: "Have good knowlege & experice in npm packages",
        style: "icon-info"
      },
      {
        icon: "",
        title: "Maven",
        content: "Good experience in Maven projects",
        style: "icon-info"
      },
      {
        icon: "",
        title: "Gradle",
        content: "Good experience in Gradle projects",
        style: "icon-info"
      }
    ]

    this.environments = [
      {
        icon: "fas fa-globe",
        title: "Web",
        content: "Proficient in MEAN Stack development, Static, Dynamic web application with backend services development & familiar with Microservice development.",
        style: "icon-info"
      },
      {
        icon: "fab fa-android",
        title: "Mobile",
        content: "Around 1 year experience in Android mobile application development & basic knowledge in cross platform application develoment with Nativescript.",
        style: "icon-info"
      },
      {
        icon: "fas fa-desktop",
        title: "Standalone",
        content: "Good expirience in standalone application development with Java Fx, C# WPF & basic knowledge in cross platform application development with Electron.",
        style: "icon-info"
      }
    ]

    this.cservices = [{
      icon: "",
      title: "AWS",
      content: "Good experience in AWS services.",
      style: "icon-info"
    }, {
      icon: "",
      title: "Google Cloud Platform",
      content: "Sharp kowledge & experience in Google Cloud Platform.",
      style: "icon-info"
    }, {
      icon: "",
      title: "Microsoft Azure",
      content: "Familiar with Azure services, such as Face API",
      style: "icon-info"
    }, {
      icon: "",
      title: "Google Analytics",
      content: "Experienced with Google Analytics",
      style: "icon-info"
    }, {
      icon: "",
      title: "Google Tag Manager",
      content: "Basic knowledge about GTM",
      style: "icon-info"
    }, {
      icon: "",
      title: "Google Search Console",
      content: "Experienced with Google Search Console",
      style: "icon-info"
    }]

    this.toolsIDEs = [
      {
        icon: "",
        title: "VS Code",
        content: "Proficient with the tool & very famillear in development with VSCode",
        style: "icon-info"
      }, {
        icon: "",
        title: "Jet Brains IDE's",
        content: "Have good developement experience with JetBrains IDE's, such as Android Studio, IntelliJ, CLion, PHP Storm & DataGrip",
        style: "icon-info"
      }, {
        icon: "fas fa-desktop",
        title: "Eclipse",
        content: "Have good development experience with the Eclipse IDE",
        style: "icon-info"
      }, {
        icon: "fas fa-desktop",
        title: "NetBeans",
        content: "Have good development experience with the Apache Netebans IDE",
        style: "icon-info"
      }, {
        icon: "fas fa-desktop",
        title: "MAMP, WAMP & XAMP",
        content: "Good experience with MAMP, WAMP & XAMP local server environments",
        style: "icon-info"
      }, {
        icon: "fas fa-desktop",
        title: "Postman & SOAP UI",
        content: "Deep knowledge & experience in Postman & experiences SOAP UI",
        style: "icon-info"
      }]

    this.operatingSystems = [{
      icon: "",
      title: "MacOS",
      content: "Sharp knowledge & experience in MacOS operating system.",
      style: "icon-info"
    },
    {
      icon: "",
      title: "Linux",
      content: "Experience with linux operating system & its command line.",
      style: "icon-info"
    },
    {
      icon: "fas fa-desktop",
      title: "Windows",
      content: "Sharp knowledge & experience in Windows operating system.",
      style: "icon-info"
    }]

    this.softSkills = [
      {
        "value": 95,
        "c1": '#808080',
        "c2": '#e7e8ea',
        "title": "Teamwork",
        "maxPercent": 100
      }, {
        "value": 80,
        "c1": '#808080',
        "c2": '#e7e8ea',
        "title": "Critical Thinking",
        "maxPercent": 100
      }, {
        "value": 95,
        "c1": '#808080',
        "c2": '#e7e8ea',
        "title": "Social Skills",
        "maxPercent": 100
      }]

    this.projects = [

      {
        icon: "assets/img/apps/web/tamarind_journeys.jpg",
        url: "https://tamarindjourneys.com",
        title: "Tamarind Journeys",
        description: "Tamarind Journeys is a kandy based tour agency which operates around Sri Lanka",
        techonologies: "Angular 5, HTML & SCSS",
        status: "Online",
        category: "Web",
        style: "icon-info"
      }, {
        icon: "assets/img/apps/web/tamarind_journeys.jpg",
        url: "",
        title: "Tamarind Journeys - Coming this Fall",
        description: "Single page website that deployed before Tamarind Journeys current website realease",
        techonologies: "Angular 5, HTML & SCSS",
        status: "Offline",
        category: "Web",
        style: "icon-warning"
      }, {
        icon: "assets/img/apps/web/tamarind_journeys.jpg",
        url: "",
        title: "Kandy Esala Perahera Seat Organizers",
        description: "Single page website that reserve seats to watch Kandy Esala Perahera. Subdiary of Tamaridn Journeys, esalaperahera.tamarindjourneys.com",
        techonologies: "React, HTML, SCSS",
        status: "Under Development",
        category: "Web",
        style: "icon-primary"
      }, {
        icon: "assets/img/apps/mobile/tick.png",
        url: "",
        title: "TICK",
        description: "TICK Stands for 'Tourist Information Center Kandy'. This mobile app design to guide tourists. App provide quick access to shops, ATMs, Places, Free WiFi hotspots & etc via maps",
        techonologies: "Android, & AWS EC2",
        status: "Under Development",
        category: "Mobile - Android",
        style: "icon-info"
      }, {
        icon: "assets/img/apps/mobile/tick_lite.png",
        url: "https://play.google.com/store/apps/details?id=tick.prasad.tick_lite",
        title: "TICK - Lite",
        description: "Light weight app derived from TICK. This app contains places to visit & package details",
        techonologies: "Android & AWS EC2",
        status: "Online",
        category: "Mobile - Android",
        style: "icon-warning"
      }, {
        icon: "assets/img/apps/mobile/gpa_calculator_open.png",
        url: "https://play.google.com/store/apps/details?id=com.prasadmad.collegegpa",
        title: "GPA Calculator",
        description: "Dynamic GPA calculator. User can add the numbers of modules, credit amount and calculate their GPA",
        techonologies: "Android",
        status: "Online",
        category: "Mobile - Android",
        style: "icon-success"
      }, {
        icon: "assets/img/apps/mobile/nibm_gpa_calculator.png",
        url: "https://play.google.com/store/apps/details?id=com.prasadmad.nibmgpa",
        title: "NIBM GPA Calculator",
        description: "Desing & Developed for NIBM Sri Lanka to peform their students GPA Calculations. App contains fixed modules and credits + Dynamic GPA calculation features",
        techonologies: "Android",
        status: "Online",
        category: "Mobile - Android",
        style: "icon-rose"
      }, {
        icon: "assets/img/apps/mobile/safebox.png",
        url: "",
        title: "SafeBox",
        description: "The app is developed to store notes and password securely. App uses strong encription and store data only in the device. Google and Facebook sign in available",
        techonologies: "Android & Firebase",
        status: "Offline",
        category: "Mobile - Android",
        style: "icon-success"
      }, {
        icon: "assets/img/apps/mobile/prolife.png",
        title: "ProLife",
        description: "A productivity app desinged for keep quick notes, reminders, smart alarms, store passwords and notes securely",
        techonologies: "Android & Firebase",
        status: "Offline - Demo",
        category: "Mobile - Android",
        style: "icon-rose"
      }, {
        icon: "assets/img/apps/desktop/excel.png",
        url: "",
        title: "Excel",
        description: "Excel is a school, pre-schoool & daycare center based in kandy. The system is desinged for manage their financial operations",
        techonologies: "Angular 5, HTML & SCSS",
        status: "Running",
        category: "Web",
        style: "icon-rose"
      }, {
        icon: "assets/img/apps/desktop/excel.png",
        url: "",
        title: "Excel - Service",
        description: "Excel - Service desinged for manage financial transactions performed from Excel UI",
        techonologies: "Node Js, Express Js, MongoDB & PM2",
        status: "Running",
        category: "Web Services",
        style: "icon-rose"
      }, {
        icon: "assets/img/apps/desktop/PMS.png",
        url: "",
        title: "PMS",
        description: "PMS stands for Patient Management System. The system is specifically desinged & developing for a medical doctor for personal use. PMS keeps patient data & generate graphical chart view of the illness status from current state & the begining",
        techonologies: "Angular 4",
        status: "Under Development",
        category: "Desktop",
        style: "icon-rose"
      }


    ]

    this.extraCurricular =
      [
        'Technical coordinator at ‘Ecurie 14’ - Annual Science Day of W/Sri Sumangala College Kandy',
        'School rugby player & member of school Rugby Football Association at W/Sri Sumangala College Kandy',
        'Member of Sri Lanka Federation of Youth Clubs',
        'Member of SLBBFF (Sri Lanka Bodybuilding & Fitness Federation)',
        'Technical coordinator & Marketing leader at ‘Zentire 16’ - Annual Talent Show of National Institiute of Business Management Kandy'
      ]

    this.interests =
      [
        'Technologies - such as Robotics & Autombile',
        'Soft Science - Psychology',
        'Travelling, Hiking & Computer Gaming',
      ]

  }

  changeDownloadResume() {
    this.downloadResume = (this.flagDR) ? 'Click' : 'Download Resume'
    this.flagDR = !this.flagDR
  }


  copyToClickboard(params) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (params));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

}
