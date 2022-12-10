import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiMedium} from "react-icons/si";
import {RiArticleFill} from "react-icons/ri";
import ciaca from "../images/ciaca.png"
import gcaiot from "../images/gcaiot.png"
import enegep from "../images/enegep.png"
import simpep from "../images/simpep.png"
import wcnps from "../images/wcnps.png"
import jhi from "../images/jhi.png"

const blogConfig = [
    {
        id: "blog-8",
        title: "Signal Quality Asessment of Photoplethysmogram Signals Using Hybrid Rule and Learning-Based Models",
        links: [
            {
                name: "to be published",
                url: "https://jhi.sbis.org.br/index.php/jhi-sbis",
                icon: <RiArticleFill/>
            }
        ],
        image: jhi,
        description: "Paper accepted and to be published at CBIS, one of the largest Digital Health Congress in Latin America discussing the application of learning-based models at deep learning architectures to increase battery lifetime on limited resources devices.",
        target: "_blank"
    },
    {
        id: "blog-7",
        title: "Solid waste management and monitoring system for smart cities: development of a low-cost sustainable IoT architecture using GPRS/GSM",
        links: [
            {
                name: "paper",
                url: "https://ieeexplore.ieee.org/document/9626317",
                icon: <RiArticleFill/>
            }
        ],
        image: wcnps,
        description: "Paper published in the Workshop on Communication Networks and Power Systems (WCNPS) on the development of a low-cost and sustainable waste monitoring system in smart cities using GPRS/GSM, focused on battery saving.",
        target: "_blank"
    },
    {
        id: "blog-6",
        title: "Internet of Things System for Data Monitoring and Decision Making on the Selective Garbage Collection in Smart Cities",
        links: [
            {
                name: "paper",
                url: "https://ciawi-conf.org/wp-content/uploads/2021/11/19.2-02.pdf",
                icon: <RiArticleFill/>
            }
        ],
        image: ciaca,
        description: "Best paper of the IADIS Ibero-American Conferences WWW/Internet and Applied Computing 2021 on the development of an internet of things system for monitoring waste data in selective collection containers in smart cities composed of hardware and software to facilitate the decision-making.(PT-BR) only",
        target: "_blank"
    },
    {
        id: "blog-5",
        title: "Technological Solution Development During the COVID-19 Pandemic: a Case Study in an IoT Lab",
        links: [
            {
                name: "paper",
                url: "https://ieeexplore.ieee.org/document/9345864",
                icon: <RiArticleFill/>
            }
        ],
        image: gcaiot,
        description: "Paper published at the 2020 IEEE Global Conference on Artificial Intelligence and Internet of Things (GCAIoT) in Dubai, United Arab Emirates on the development of a technological solution during a pandemic to help combat it in the environment of an IoT laboratory.",
        target: "_blank"
    },
    {
        id: "blog-4",
        title: "Applying demand forecast and stock management methods at a traditional japanese restaurant at Brasília-DF",
        links: [
            {
                name: "paper",
                url: "https://abepro.org.br/biblioteca/TN_STO_000_1635_38059.pdf",
                icon: <RiArticleFill/>
            }
        ],
        image: enegep,
        description: "Paper published at the 2019 National Meeting Of Production Engineering (ENEGEP) in Santos, São Paulo, Brasil about demand forecasting and stock management using the ABC analysis and multiple methods of forecasting.(PT-BR) only.",
        target: "_blank"
    },
    {
        id: "blog-3",
        title: "Application Of Quality Tools in a Chocolate Factory",
        links: [
            {
                name: "paper",
                url: "https://simpep.feb.unesp.br/abrir_arquivo_pdf.php?tipo=artigo&evento=14&art=913&cad=36109&opcao=com_id",
                icon: <RiArticleFill/>
            }
        ],
        image: simpep,
        description: "Paper published at the XXVI Production Engineering Symposium (SIMPEP) in Bauru, São Paulo, Brasil about applying quality methodologys within a chocolate factory with a bean to bar concept. The pareto and ishikawa diagrams were applied and improvements were made to mitigate these problems.(PT-BR) only.",
        target: "_blank"
    }
]

export default blogConfig