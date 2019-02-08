import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  downloadResume: string = 'Need to Download Resume'
  flagDR: boolean = true

  src: string = 'assets/img/face/face.jpg'


  name: string = 'Prasad Madusanka'
  nameWithInitials: string = 'W. H. M. Prasad Madusanka Wijepala'
  bornDate: string = '13'
  bornMonthAndYear: string = 'October 1995'
  gender: string = 'Male'
  maritalStatus: string = 'Single'
  homeAddress: string = 'No 14, Hippala rd, Thalatuoya(20200), Kandy'
  mobileNumber: string = '(+94) 777 578 947'
  emailAddress: string = 'prasad.mads@gmail.com / prasad@prasadmadusanka.me'
  freelance: string = 'Available'
  skills: string = 'Mobile, Web & Full-stack development'

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

  round: any = []

  projects: any = []

  extraCurricular: string[] = []
  interests: string[] = []

  constructor() { }

  ngOnInit() {
    this.initUI()
  }

  initUI() {
    this.industrial = [
      {
        'year': '2016',
        'role': 'Worked as a Freelance Developer',
        'company': 'Freelance',
        'duration': 'from 2016 to 2017 June',
        'rolesPlayed': '',
        'technologies': 'Android, Java, C#, Javascript, HTML, CSS, MySQL & SQLite'
      },
      {
        'year': '2017',
        'role': 'Worked as a Junior Software engineer at',
        'company': 'Virtusa Pvt Ltd',
        'duration': 'from 2017 June to 2018 October',
        'rolesPlayed': 'Roles - Junior Software Engineer & Software Engineer',
        'technologies': 'Java Fx, Spring boot, Javascript, Angular Js, Angular 4 & 5, Node Js, MEAN, HTML, CSS, SCSS, Shell Script, Batch Script, OrientDB & MongoDB'
      },
      {
        'year': '2018',
        'role': 'Working as a Freelance Developer',
        'company': 'Freelance',
        'duration': 'from 2018 October',
        'rolesPlayed': '',
        'technologies': 'Spring boot, Javascript, Angular 6, Node Js, MEAN, HTML, CSS, SCSS, Batch Script & MongoDB'
      }
    ]

    this.education = [
      {
        'year': '2019',
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
        icon: "fa-node",
        title: "Node Js",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }, {
        icon: "java",
        title: "Java / Java Fx",
        content: "Tour packages are made to have complete and lovely experiences for you all.",
        style: "icon-warning"
      }, {
        icon: "fa-js",
        title: "Javascript & Typescript",
        content: "We are willingly dedicated to you all to satisfy our clients any time as your requirements.",
        style: "icon-primary"
      }, {
        icon: "fa-html5",
        title: "HTML",
        content: "We are bound to certify to supply assurance and protectiveness during your traveling time.",
        style: "icon-success"
      }, {
        icon: "fa-sass",
        title: "Sass",
        content: "We are bound to certify to supply assurance and protectiveness during your traveling time.",
        style: "icon-success"
      }, {
        icon: "fa-css3",
        title: "CSS",
        content: "We are bound to certify to supply assurance and protectiveness during your traveling time.",
        style: "icon-success"
      }, {
        icon: "fa-whmcs",
        title: "Shell & Batch Script",
        content: "We have accountability on your money that is spending and the time you are. It won’t go in vein.",
        style: "icon-rose"
      }, {
        icon: "",
        title: "C#",
        content: "We are bound to certify to supply assurance and protectiveness during your traveling time.",
        style: "icon-success"
      }, {
        icon: "fa-python",
        title: "Python",
        content: "We are bound to certify to supply assurance and protectiveness during your traveling time.",
        style: "icon-success"
      }
    ]

    this.frameworks = [
      {
        icon: "fab fa-angular",
        title: "Angular",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }, {
        icon: "fab fa-react",
        title: "React",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }, {
        icon: "fas fa-leaf",
        title: "Spring Boot",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }
    ]

    this.databases = [
      {
        icon: "fab fa-angular",
        title: "Mongo DB",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      },
      {
        icon: "fab fa-angular",
        title: "Orient DB",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      },
      {
        icon: "fab fa-angular",
        title: "SQL",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }
    ]

    this.servers = [
      {
        icon: "fab fa-angular",
        title: "Apache Tomcat",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      },
      {
        icon: "fab fa-angular",
        title: "PM2",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      },
      {
        icon: "fab fa-angular",
        title: "Nginx",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }
    ]

    this.packages = [
      {
        icon: "fab fa-npm",
        title: "npm",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      },
      {
        icon: "",
        title: "Maven",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      },
      {
        icon: "",
        title: "Gradle",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }
    ]

    this.environments = [
      {
        icon: "fas fa-globe",
        title: "Web",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      },
      {
        icon: "fab fa-android",
        title: "Android",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      },
      {
        icon: "fas fa-desktop",
        title: "Desktop",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }
    ]

    this.cservices = [{
      icon: "",
      title: "AWS",
      content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
      style: "icon-info"
    },
    {
      icon: "",
      title: "Google Cloud Platform",
      content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
      style: "icon-info"
    },
    {
      icon: "fas fa-desktop",
      title: "Microsoft Azure",
      content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
      style: "icon-info"
    }]

    this.toolsIDEs = [
      {
        icon: "",
        title: "VS Code",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }, {
        icon: "",
        title: "Jet Brains IDE's",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }, {
        icon: "fas fa-desktop",
        title: "Eclipse",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }, {
        icon: "fas fa-desktop",
        title: "NetBeans",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }, {
        icon: "fas fa-desktop",
        title: "MAMP, WAMP & XAMP",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }, {
        icon: "fas fa-desktop",
        title: "Postman & SOAP UI",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }]

    this.operatingSystems = [{
      icon: "",
      title: "Mac OS",
      content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
      style: "icon-info"
    },
    {
      icon: "",
      title: "Linux",
      content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
      style: "icon-info"
    },
    {
      icon: "fas fa-desktop",
      title: "Windows",
      content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
      style: "icon-info"
    }]

    this.round = [
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
        description: "SafeBox app is to store notes and password securely. App uses strong encription and store data only in the device. Google and Facebook sign in availble",
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
        description: "PMS stands for Patient Management System. The system is specifically desinged for a medical doctor for personal use. PMS keeps patient data and generate graphical chart view of the illness status from current state and the begining",
        techonologies: "Angular 4",
        status: "Running",
        category: "Desktop",
        style: "icon-rose"
      }


    ]

    this.extraCurricular =
      [
        'Technical coordinator at Ecurie ‘14 - Annual Science Day of W/Sri Sumangala College Kandy',
        'School rugby player and member of school Rugby Football Association at W/Sri Sumangala College Kandy',
        'Member of school athletic team',
        'Member of Sri Lanka Federation of Youth Clubs',
        'Member of SLBBFF (Sri Lanka Bodybuilding & Fitness Federation)',
        'Technical coordinator & Marketing leader at Zentire ‘16 - Annual Talent Show of National Institiute of Business Management Kandy'
      ]

    this.interests =
      [
        'Technologies - such as Robotics & Autombile',
        'Soft Science - Psychology',
        'Travelling, Hiking & Computer Gaming',
      ]

  }

  changeDownloadResume() {
    this.downloadResume = (this.flagDR) ? 'Yes' : 'Need to Download Resume'
    this.flagDR = !this.flagDR
  }

}
