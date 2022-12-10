import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {CgWebsite} from "react-icons/cg";
import {ImBook} from "react-icons/im";

import iris from "../images/iris.png"
import loragsm from "../images/loragsm.png"
import r from "../images/r.png"
import scrapy from "../images/scrapy.png"
import waze from "../images/waze.png"
import ortools from "../images/ortools.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Smart Walking Cane",
        links: [
            {
                name: "repo",
                url: "https://github.com/gustavo-luz/smart-walking-cane",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/gustavo-luz/smart-walking-cane/fork",
                icon: <BiGitRepoForked/>,
            }
        ],
        image: iris,
        description: "Development of a smart walking cane prototype for the visually impaired with TRL 3 made with arduino nano, ultrasonic sensors and buzzer.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "IoT in Selective Collection",
        links: [
            {
                name: "website",
                url: "https://www.sdgchallenge.com.br/",
                icon: <CgWebsite/>,
            }
        ],
        image: loragsm,
        description: "Adapting a circuit from denmark to the Brazilian reality in order to measure trash containers ocupation. data transmission via lora or GSM and display at dashboard",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "R Data Analysis Project",
        links: [
            {
                name: "website",
                url: "https://rpubs.com/gustavoluz/558276",
                icon: <CgWebsite/>
            },
            {
                name:"repo",
                "url":"https://github.com/gustavo-luz/ppg-unb",
                icon: <AiFillGithub/>,
            }
        ],
        image: r,
        description: "Data Science project to explore the graduate program in human nutrition at UnB performing text mining and network analysis",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Web scraping",
        links: [
            {
                name: "repo",
                url: "https://github.com/gustavo-luz/scrapy",
                icon: <AiFillGithub/>
            }
        ],
        image: scrapy,
        description: "Scraping data from the web using requests, Beautiful Soup and scrapy with python. Storing data at sqlite,mysql and mongodb.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Capacitated Vehicle Routing Problem",
        links: [
            {
                name: "repo",
                url: "https://github.com/gustavo-luz/IoT_Waste_Collection",
                icon: <AiFillGithub/>
            }
        ],
        image: ortools,
        description: "Code to optimize the route of a truck that collects weight using Google OR-Tools CVRP model and Distance Matrix API.",
        target: "_blank"
    },
    {
        id: "project-0",
        title: "Haversine Vehicle Routing",
        links: [
            {
                name: "repo",
                url: "https://github.com/gustavo-luz/waze_roteirization",
                icon: <AiFillGithub/>
            }
        ],
        image: waze,
        description: "Routing of logistics trucks paths using the haversine formula and shortests paths with exhibition at Waze",
        target: "_blank"
    }
]

export default projectConfig