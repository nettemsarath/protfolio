import mongodbIcon from "../images/assets/mongodb.png";
import nodejsIcon from "../images/assets/nodejs.png";
import nginxIcon from "../images/assets/nginx.png";
import dockerIcon from "../images/assets/docker.png";
import AWSIcon from "../images/assets/aws.png";
import javascriptIcon from "../images/assets/js.png";
import reactJSIcon from "../images/assets/reactjs.png";

const TechStackData = [
    {
        id: 1,
        type: "Frontend",
        list: [
            {
                id: 11,
                name: "ReactJS",
                icon: reactJSIcon
            },
            {
                id: 12,
                name: "Javascript",
                icon: javascriptIcon
            }
        ]
    }
    ,{
        id: 2,
        type: "Backend",
        list: [
            {
                id: 21,
                name: "NodeJS",
                icon: nodejsIcon
            },
            {
                id: 22,
                name: "Mongodb",
                icon: mongodbIcon
            },
            {
                id: 23,
                name: "Docker",
                icon: dockerIcon
            },
            {
                id: 24,
                name: "Nginx",
                icon: nginxIcon
            },
            {
                id: 25,
                name: "AWS",
                icon: AWSIcon
            }
        ]
    }
];

export { TechStackData };
