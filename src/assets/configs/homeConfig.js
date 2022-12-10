import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {SiSamsung} from "react-icons/si";
import {FcElectronics} from "react-icons/fc"
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
        start: "I've been working for over 3 years on data science and internet of things projects. " +
            "I'm excited by applying machine learning and deep learning techniques at data collected by sensors",
        exit: "I have experience with Python, R, Matlab, C++, BI tools, and more skills showed at this portfolio "
    },
    workTimeline: [
        {
            id: "work-3",
            title: "Jr Data Scientist",
            company: "Samsung R&D Institute Brazil",
            description: "Sensor data analysis and prediction on wearables." +
                "Works with data pre-processing, labeling, feature engineering, model choice and evaluation.",
            date: "2021-present",
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
            title: "CRM Analytics Coordinator",
            company: "Avianca",
            description: "Tech leader of a BI, Data Science and DBA team. " +
                "Build forecast models, data warehouse and Power BI dashboards.",
            date: "2018-2019",
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        },
        {
            id: "work-0",
            title: "BI Analyst",
            company: "Onelink BPO",
            description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
            date: "2016-2018",
            icon: <BsClipboardData/>,
            tags: ["python", "mssql", "pbi", "excel"]
        }
    ]
}


export default homeConfig