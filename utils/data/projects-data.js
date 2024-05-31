import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Book Reviews System',
        description: "Web application for the management of book reviews. Features: User registration: readers and administrators. Editing of data user. User login. Registration of authors and books. Registrations of reviews. Gallery of images of books.",
        tools: ['Python', 'Django', 'ORM', 'Postgresql', 'JQuery', 'HTML', 'CSS', 'Bootstrap'],
        role: 'Fullstack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Real Estate System',
        description: "Web application for the management of real estate properties, landlords and tenants. Features: User registration: Tenants and lessors. Editing of tenant and lessor data. User login. Property registration only for tenants. Properties can be hidden. Editing property data. Gallery of images and property information. Landlords may request property approval from the Tenant. The Tenant may accept the Landlord interested in any property.",
        tools: ['Python', 'Django', 'ORM', 'Postgresql', 'JQuery', 'HTML', 'CSS', 'Bootstrap'],
        role: 'Fullstack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Quantum Key Distribution (QKD) Projects',
        description: 'Intercept and Resend Attack strategy in the context of the BB84 protocol to observe the activities of a potential eavesdropper like Eve. This method is based on the premise that any eavesdropping attempt on a quantum channel, such as qubit interception and forwarding, introduces detectable anomalies in the quantum bit error rate (QBER). The BB84 protocol is resistant to these types of attacks due to its quantum structure, which guarantees that any perturbation in the quantum states of the qubits will be evident to the legitimate participants, Alice and Bob. Quantum circuits in Google Colab.',
        tools: ['Python', 'Google Colab'],
        role: 'Software Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'Currency Conversion API',
        description: 'Web app for currency conversion using API. Frontend designed in HTML, CSS and Bootstrap. Backend designed in NodeJS, Express and Handlebars. Async API using axios library.',
        tools: ['Javascript', 'NodeJS', 'Express', 'Handlebars', 'JQuery', 'HTML', 'CSS', 'Bootstrap'],
        code: '',
        role: 'Fullstack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 5,
        name: 'Covid-19 World Situation',
        description: "Web app to show the evolution of covid-19, through graphics in CanvasJS, Frontend designed in HTML, CSS and Bootstrap. Backend designed in NodeJS, Express and Handlebars. Async API using axios library.",
        tools: ['Javascript', 'NodeJS', 'Express', 'Handlebars', 'jsonwebtoken', 'JQuery', 'HTML', 'CSS', 'Bootstrap', 'CanvasJS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },