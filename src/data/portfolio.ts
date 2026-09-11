// Central portfolio data for Afrin Shaik — Microsoft Dynamics 365 CRM Developer

export const profile = {
  name: 'Afrin Shaik',
  title: 'Microsoft Dynamics 365 CRM Developer',
  tagline: 'Building smarter CRM experiences with Dynamics 365.',
  summary:
    'Microsoft Dynamics 365 CRM Developer with 2+ years of experience specializing in Dataverse, plug-in development, JavaScript customizations, Power Automate, and enterprise CRM solutions.',
  location: 'Hyderabad, India',
  email: 'afrinshaik847@gmail.com',
  phone: '9381742436',
  linkedin: 'https://www.linkedin.com/in/afrin-shaik-crm',
  github: 'https://github.com/jahangeershaik997-dev/afrin-portfolio',
  yearsExperience: '2+',
};

export const experience = [
  {
    id: 'aptsol',
    company: 'APTSOL GLOBAL TECH PRIVATE LIMITED',
    role: 'Dynamics 365 CRM Developer',
    period: 'August 2026 – Present',
    current: true,
    project: 'Hospital Management System',
    environment: ['Microsoft Dynamics 365 CRM', 'Dataverse', 'Power Apps', 'Power Automate'],
    summary:
      'Leading CRM development for a comprehensive Hospital Management System, covering patient lifecycle, billing, pharmacy, and lab operations on Microsoft Dataverse.',
    categories: {
      customization: [
        'Configured Dataverse tables: Patients, Doctors, Appointments, Prescriptions, Billing, Pharmacy, Inventory, Lab Tests, Hospital Rooms & Beds',
        'Designed Lookup fields, Choice fields, and Calculated fields for relational integrity',
        'Created Business Rules: Emergency contact validation, past appointment prevention, field locking after payment',
        'Designed Business Process Flows: Appointment Booking, Billing & Payment',
      ],
      development: [
        'JavaScript: Contact number validation, appointment overbooking prevention, follow-up date validation, dynamic doctor filtering, auto-filling patient and billing info',
        'Plug-ins: Duplicate appointment prevention, billing amount validation, Prescription ID generation, appointment status updates',
      ],
      automation: [
        'Classic Workflows & Power Automate: Doctor notifications, specialization-based doctor assignment, invoice generation, follow-up appointment creation, pharmacy notifications',
      ],
      security: [
        'Designed and configured Security Roles: Administrator, Doctor, Receptionist, Pharmacist, Billing Staff, Lab Technician',
      ],
      integration: [
        'Ribbon/Command Bar: Reschedule, Cancel, Mark as Completed, Print Prescription, Generate Invoice custom buttons',
      ],
    },
    tech: ['Dynamics 365 CRM', 'Dataverse', 'Power Apps', 'Power Automate', 'JavaScript', 'C# Plug-ins', 'Business Rules', 'BPF', 'Security Roles'],
  },
  {
    id: 'starlite',
    company: 'Starlite Infotech',
    role: 'Dynamics 365 CRM Developer',
    period: 'March 2024 – July 2026',
    current: false,
    projects: [
      {
        name: 'Unilever OPSO HD 0.1 / PPM',
        teamSize: 10,
        environment: ['Microsoft Dynamics 365 CRM'],
        summary:
          'Enterprise CRM customization for Unilever, including plug-in development, Web API integration, FetchXML reporting, Ribbon Workbench customization, and CRM administration.',
        categories: {
          customization: [
            'CRM configuration: Entities, Forms, Views, Business Rules, Dashboards, Reports, Charts',
            'Ribbon Workbench: Enable Rules, Display Rules',
            'Dynamics 365 Web API and FetchXML for data retrieval and reporting',
          ],
          development: [
            'C#/.NET plug-ins with exception handling',
            'JavaScript customizations',
            'SQL queries and Stored Procedures',
          ],
          integration: [
            'Dynamics 365 Web API',
            'FetchXML queries',
          ],
          security: [
            'CRM Administration: User management, Security roles, Solutions',
          ],
        },
        tech: ['Dynamics 365 CRM', 'C#', '.NET', 'JavaScript', 'Web API', 'FetchXML', 'SQL Server', 'Ribbon Workbench', 'Solutions'],
      },
      {
        name: 'SIS K-12 — Product Development',
        teamSize: 8,
        domain: 'School management and administration',
        environment: ['Microsoft Dynamics 365 CRM', 'C#', 'SQL Server'],
        summary:
          'Full product development for a K-12 school management platform, including portal development, multi-location and multi-user support, and CRM customization.',
        categories: {
          customization: [
            'Ribbon Workbench: Custom buttons, Enable Rules, Display Rules, Command Bar, Site Map, Menus',
            'Dashboards, Reports, Charts',
            'Solution import/export',
          ],
          development: [
            'C#/.NET plug-ins',
            'Portal development: Dynamics 365 Portal, Power Apps Portal',
            'APIs, Unit Testing, Debugging',
          ],
          security: [
            'User administration, Security roles',
          ],
        },
        tech: ['Dynamics 365 CRM', 'C#', 'SQL Server', 'Plug-ins', 'Power Apps Portal', 'Dynamics 365 Portal', 'Ribbon Workbench', 'APIs'],
      },
    ],
  },
];

export const projects = [
  {
    id: 'hospital-mgmt',
    title: 'Hospital Management System',
    company: 'APTSOL GLOBAL TECH PRIVATE LIMITED',
    type: 'CRM Platform',
    description:
      'A comprehensive Hospital Management System built on Microsoft Dataverse and Dynamics 365 CRM, managing the complete patient lifecycle from registration to billing, pharmacy, and lab operations.',
    modules: [
      'Patient Registration',
      'Doctor Scheduling',
      'Appointments',
      'Prescriptions',
      'Billing',
      'Lab Tests',
      'Pharmacy',
      'Inventory',
      'Hospital Rooms & Beds',
    ],
    techStack: {
      platform: ['Dynamics 365 CRM', 'Dataverse', 'Power Apps'],
      development: ['JavaScript', 'C# Plug-ins', 'Power Automate'],
      customization: ['Business Rules', 'BPF', 'Workflows', 'Web API'],
      security: ['Security Roles', 'Role-based Access'],
    } as Record<string, string[]>,
    tech: ['Dynamics 365 CRM', 'Dataverse', 'Power Apps', 'Power Automate', 'JavaScript', 'C#', 'Plug-ins', 'BPF', 'Business Rules', 'Web API', 'Security Roles'],
    color: '#C62828',
  },
  {
    id: 'unilever-opso',
    title: 'Unilever OPSO HD 0.1 / PPM',
    company: 'Starlite Infotech',
    type: 'Enterprise CRM',
    description:
      'Enterprise-grade CRM customization for Unilever, involving complex plug-in development, Web API integration, FetchXML reporting, Ribbon customizations, and comprehensive CRM administration.',
    modules: [
      'Requirement Analysis',
      'CRM Customization',
      'Plug-in Development',
      'Reporting',
      'Integration',
      'Administration',
    ],
    techStack: {
      platform: ['Dynamics 365 CRM'],
      development: ['C#', '.NET', 'JavaScript', 'SQL Server'],
      integration: ['Web API', 'FetchXML', 'Stored Procedures'],
      customization: ['Ribbon Workbench', 'Enable/Display Rules', 'Solutions'],
    } as Record<string, string[]>,
    tech: ['Dynamics 365 CRM', 'C#', '.NET', 'JavaScript', 'Web API', 'FetchXML', 'SQL Server', 'Ribbon Workbench'],
    color: '#B71C1C',
  },
  {
    id: 'sis-k12',
    title: 'SIS K-12',
    company: 'Starlite Infotech',
    type: 'Product Development',
    description:
      'Full product development for a K-12 school management platform on Dynamics 365 CRM, covering student/teacher management, attendance, fee tracking, portal development, and multi-location operations.',
    modules: [
      'School Implementation',
      'Teacher Registration',
      'Student Registration',
      'Attendance',
      'Fee Tracking',
      'Multi-location Operations',
      'Portal',
    ],
    techStack: {
      platform: ['Dynamics 365 CRM', 'Power Apps Portal', 'Dynamics 365 Portal'],
      development: ['C#', 'SQL Server', 'Plug-ins', 'APIs'],
      customization: ['Ribbon Workbench', 'Command Bar', 'Site Map'],
      quality: ['Unit Testing', 'Debugging', 'Technical Documentation'],
    } as Record<string, string[]>,
    tech: ['Dynamics 365 CRM', 'C#', 'SQL Server', 'Plug-ins', 'Power Apps Portal', 'Dynamics 365 Portal', 'Ribbon Workbench', 'APIs'],
    color: '#C62828',
  },
];

export const skills = {
  crmPlatform: {
    label: 'CRM Platform',
    items: ['Dynamics 365 CRM', 'Dataverse'],
  },
  development: {
    label: 'Development',
    items: ['C#', '.NET', 'JavaScript', 'Plug-ins'],
  },
  customization: {
    label: 'Customization',
    items: ['Tables / Entities', 'Forms', 'Views', 'Business Rules', 'Workflows', 'Solutions', 'Dashboards'],
  },
  integration: {
    label: 'Integration',
    items: ['Dynamics 365 Web API', 'REST API', 'APIs'],
  },
  data: {
    label: 'Data',
    items: ['SQL Server', 'SQL Queries', 'Stored Procedures', 'FetchXML'],
  },
  administration: {
    label: 'Administration',
    items: ['Security Roles', 'User Administration', 'Solution Import / Export'],
  },
  ui: {
    label: 'UI Customization',
    items: ['Ribbon Workbench', 'Enable Rules', 'Display Rules', 'Site Map', 'Command Bar'],
  },
  portals: {
    label: 'Portals',
    items: ['Dynamics 365 Portal', 'Power Apps Portal'],
  },
  quality: {
    label: 'Quality',
    items: ['Unit Testing', 'Debugging', 'Technical Documentation'],
  },
};

export const marqueeRow1 = [
  'Dynamics 365',
  'Dataverse',
  'C#',
  '.NET',
  'JavaScript',
  'Plug-ins',
  'Web API',
];

export const marqueeRow2 = [
  'Power Automate',
  'Power Apps',
  'SQL Server',
  'FetchXML',
  'Ribbon Workbench',
  'Solutions',
  'Business Rules',
];

export const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'ASN Degree College',
    period: '2021 – 2024',
  },
  {
    degree: 'Intermediate',
    institution: 'Sri Chaitanya Junior College',
    period: '2019 – 2021',
  },
  {
    degree: 'SSC',
    institution: 'Nagarjuna High School',
    period: '2018 – 2019',
  },
];

export const certifications = [
  {
    code: 'PL-400',
    name: 'Microsoft Power Platform Developer Associate',
    status: 'Pursuing',
    color: '#C62828',
  },
  {
    code: 'MB-230',
    name: 'Microsoft Dynamics 365 Customer Service Functional Consultant Associate',
    status: 'Pursuing',
    color: '#B71C1C',
  },
];

export const lifecycle = [
  {
    stage: 'Requirement',
    skills: ['Client Interaction', 'Requirement Analysis'],
    icon: '01',
  },
  {
    stage: 'Design',
    skills: ['Dataverse Modeling', 'Entity Relationships', 'Field Design'],
    icon: '02',
  },
  {
    stage: 'Configuration',
    skills: ['Tables', 'Forms', 'Views', 'Business Rules', 'BPF'],
    icon: '03',
  },
  {
    stage: 'Development',
    skills: ['C# / .NET', 'Plug-ins', 'JavaScript', 'Web API'],
    icon: '04',
  },
  {
    stage: 'Integration',
    skills: ['Web API', 'REST API', 'FetchXML', 'SQL'],
    icon: '05',
  },
  {
    stage: 'Testing',
    skills: ['Unit Testing', 'Debugging', 'UAT Support'],
    icon: '06',
  },
  {
    stage: 'Deployment',
    skills: ['Solutions', 'Import / Export', 'Environment Management'],
    icon: '07',
  },
  {
    stage: 'Support',
    skills: ['Troubleshooting', 'Documentation', 'Administration'],
    icon: '08',
  },
];

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/afrin-shaik-crm',
  github: 'https://github.com/jahangeershaik997-dev/afrin-portfolio',
  email: 'afrinshaik847@gmail.com',
};
