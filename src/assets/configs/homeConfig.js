import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {SiSamsung} from "react-icons/si";
import {FcElectronics} from "react-icons/fc";
import {BsPeople} from "react-icons/bs";
import {FaUniversity} from "react-icons/fa";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Gustavo Luz</strong>
        </h1>,
    titles: [
        "Data Scientist",
        "Artificial Intelligence and IoT Researcher",
        "Production Engineer",
        "Brazilian"
    ],
    about: {
        start: "I've been working for over 5 years on data science and internet of things projects. " +
            "I'm excited by applying machine learning and deep learning techniques at data collected by sensors",
        exit: "I have experience with Python, R, Matlab, C++, BI tools, and more skills showed at this portfolio "
    },
    workTimeline: [
        {
            id: "work-5",
            title: "Lab Researcher",
            company: "HIAAC",
            description: "working with self-supervised learning for representation knowledge on human activity recognition for smartphones",
            date: "2024-Present",
            icon: <FaUniversity/>,
            tags: ["python","deep learning", "self-supervised learning"]
        },
        {
            id: "work-4",
            title: " Msc Student Computer Science",
            company: "Universidade Estadual de Campinas - Unicamp",
            description: "developing smart campus solutions with Deep Learning. I am also part of a independent multidisciplinary research group working on the prediction of diabetes using only social determinants of health data. ",
            date: "2023-Present",
            icon: <FaUniversity/>,
            tags: ["python","internet of things", "deep learning", "computer vision"]
        },
        {
            id: "work-3",
            title: "Data Scientist",
            company: "Samsung R&D Institute Brazil",
            description: "Sensor data analysis and prediction on wearables." +
                "Works with data processing pipelines, labeling, feature engineering, model choice and evaluation.",
            date: "2021-2023",
            icon: <SiSamsung/>,
            tags: ["python", "matlab", "c", "machine learning", "deep learning"]
        },
        {
            id: "work-2",
            title: "Lab Researcher",
            company: "UIoT",
            description: "Development of two iot systems: one for smart cities and one envolving computer vision. " +
                "3 international papers published and 1 patent submitted",
            date: "2019-2021",
            icon: <FcElectronics/>,
            tags: ["python", "c++", "docker", "flask", "postgres", "opencv"]
        },
        {
            id: "work-1",
            title: "People Analytics Intern",
            company: "Stefanini",
            description: "HR analysis, such as recruitment and selection numbers" +
                "and glassdoor web scraping analysis for turnover reduction.",
            date: "2021-2021",
            icon: <BsPeople/>,
            tags: ["powerbi", "excel", "python"]
        },
        {
            id: "work-0",
            title: " B.E Production Engineering",
            company: "Universidade de Brasília - UnB",
            description: "Final project envolving Optimizing the Logistic Routes of Selective Collection Trucks using Internet of Things at a course based on PBL (Problem-Based Learning)",
            date: "2015-2021",
            icon: <FaUniversity/>,
            tags: ["operations research", "product development", "optimization","project and risk management","quality tools","process mapping"]
        }
    ]
}


export default homeConfig