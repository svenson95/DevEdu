import {
    calendarOutline,
    calendarSharp,
    codeSlashOutline,
    codeSlashSharp, helpCircleOutline, helpCircleSharp, libraryOutline, librarySharp, mailOutline,
    mailSharp, megaphoneOutline, megaphoneSharp, peopleOutline, peopleSharp,
    schoolOutline,
    schoolSharp,
    todayOutline,
    todaySharp
} from "ionicons/icons";

interface appPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

export const subjects: appPage[] = [
    {
        title: 'Lernfeld 1',
        url: '/lf-1',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Lernfeld 2',
        url: '/lf-2',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Lernfeld 3',
        url: '/lf-3',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Lernfeld 4-1',
        url: '/lf-4-1',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Lernfeld 4-2',
        url: '/lf-4-2',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Lernfeld 5',
        url: '/lf-5',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Lernfeld 6',
        url: '/lf-6',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'WiSo',
        url: '/wiso',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Englisch',
        url: '/englisch',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Deutsch',
        url: '/deutsch',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
];

export const internal: appPage[] = [
    {
        title: 'Lehrmaterial',
        url: '/lehrmaterial',
        iosIcon: libraryOutline,
        mdIcon: librarySharp
    },
    {
        title: 'Mitteilungen',
        url: '/mitteilungen',
        iosIcon: mailOutline,
        mdIcon: mailSharp
    },
    {
        title: 'Schuljahresplan',
        url: '/schuljahresplan',
        iosIcon: schoolOutline,
        mdIcon: schoolSharp
    },
    {
        title: 'Vertretungsplan',
        url: '/vertretungsplan',
        iosIcon: todayOutline,
        mdIcon: todaySharp
    },
    {
        title: 'Lehrer',
        url: '/lehrer',
        iosIcon: peopleOutline,
        mdIcon: peopleSharp
    },
    {
        title: 'Feedback',
        url: '/feedback',
        iosIcon: megaphoneOutline,
        mdIcon: megaphoneSharp
    },
];

export const exams: appPage[] = [
    {
        title: 'Termine',
        url: '/termine',
        iosIcon: calendarOutline,
        mdIcon: calendarSharp
    },
    {
        title: 'LF1 - Test Quiz',
        url: '/lf1-testquiz',
        iosIcon: helpCircleOutline,
        mdIcon: helpCircleSharp
    },
    {
        title: 'WiSo - Test Quiz',
        url: '/wiso-testquiz',
        iosIcon: helpCircleOutline,
        mdIcon: helpCircleSharp
    }
];
