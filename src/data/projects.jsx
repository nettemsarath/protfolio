import project1 from "../images/assets/project1.png";
import project2 from "../images/assets/project2.png";
import AiIcon from "../images/assets/AI.png";
import cryptoIcon from "../images/assets/crypto.png";
import meditationIcon from "../images/assets/meditation2.png";

export const ProjectsData = [
    {
        id: 1,
        title: "smartdhyana",
        about: `A Meditation Ring to Measure your Mindfulness and Track Heart Rate variabality (HRV) through Dhyana App. 
                Dhyana identifies your inhale/exhale cycles and trains you to become a breathing champ. `,
        tags: ["ReactJS", "NodeJS", "Mongodb", "Docker", "AWS", "S3", "Paypal", "Instamojo", "nginx", "Socket.IO", "Multer", "AppSignal", "Redis" ],
        demo: "https://www.smartdhyana.com/",
        image: meditationIcon
    },
    {
        id: 2,
        title: "Decs.ai",
        about: `Decs is a Machine Learning Application built for various purposes like humazised chatBots and interactive Holobots , 
                custom audio and video Generation using Different custom Models`,
        tags: ["ReactJS", "Redux-ToolKit", "NodeJS", "Mongodb", "AWS", "Lambda", "S3", "Stripe", "Docker", "nginx", "AppSignal"],
        demo: "https://www.decs.ai/",
        image: AiIcon
    },
    {
        id: 3,
        title: "GX Nitrous",
        about: "GX Nitrous is crypto Application, where one can buy can crypto currency Token along with GX Token and also user can become an affliate. It also has crypto Trading where user can trade any currency",
        tags: ["NodeJS","Socket.IO", "Web3JS", "Mongodb"],
        demo: "https://gxnitrous.com/",
        image: cryptoIcon
    }
];