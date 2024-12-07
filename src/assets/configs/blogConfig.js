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
import bdm from "../images/bdm.png"
import sbrc from "../images/sbrc.png"
import scirep from "../images/scirep.svg"
import iotj from "../images/iotj.jpg"
import bracis from "../images/bracis.png"

const blogConfig = [
    {
        id: "blog-12",
        title: "Smart Parking with Pixel-Wise ROI Selection for Vehicle Detection Using YOLOv8, YOLOv9, YOLOv10, and YOLOv11",
        links: [
            {
                name: "to be published",
                url: "https://arxiv.org/abs/2412.01983",
                icon: <RiArticleFill/>
            }
        ],
        image: bracis,
        description: "Paper under review by Elsevier Internet of Things, already available as a preprint at arxiv. This paper introduces a novel approach that integrates Internet of Things, Edge Computing, and Deep Learning concepts, by using the latest YOLO models for vehicle detection. The proposed system achieved 99.68% balanced accuracy on a custom dataset.",
        target: "_blank"
    },
    {
        id: "blog-11",
        title: "An Evaluation of Temporal Neighborhood Coding Variants in Smartphone-Based Human Activity Recognition",
        links: [
            {
                name: "to be published",
                url: "https://drive.google.com/drive/folders/1qWElWd2abZtFZDUtP7Z1ou-u8w9Rynf9",
                icon: <RiArticleFill/>
            }
        ],
        image: iotj,
        description: "Paper accepted at the 34th Brazilian Conference on Intelligent Systems (BRACIS), the most important event in Brazil for researchers interested in publishing significant and novel results related to Artificial and Computational Intelligence.The focus of this work was to This paper systematically evaluates different variations of a self-supervised learning technique named TNC for HAR, reaching 95% accuracy in the UCI dataset with raw data. The work will be published at Springer in Lecture Notes in Artificial Intelligence (LNAI) series.",
        target: "_blank"
    },
    {
        id: "blog-10",
        title: "Repurposing of TV Boxes for a Circular Economy in Smart Cities Applications",
        links: [
            {
                name: "to be published",
                url: "https://www.researchsquare.com/article/rs-4619533/v1",
                icon: <RiArticleFill/>
            }
        ],
        image: scirep,
        description: "Paper under review by scientific reports, already available as a preprint at research square. This paper explores the feasibility of repurposing TV Boxes for people counting applications at the edge in smart cities, focusing on the circular economy concept. The focus is to perform a stress test to see how these devices behave measuring failures and carbon emissions.",
        target: "_blank"
    },
    {
        id: "blog-9",
        title: "Repurposing of TV Boxes for People Counting Applications at the Edge in Smart Cities",
        links: [
            {
                name: "paper",
                url: "https://sol.sbc.org.br/index.php/courb/article/view/30000",
                icon: <RiArticleFill/>
            }
        ],
        image: sbrc,
        description: "Paper accepted, presented at Workshop de Computação Urbana (Courb), event to discuss urban computing applications held in conjunction with the Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuídos (SBRC). It was invited for an extended version at journal of internet services and applications",
        target: "_blank"
    },
    {
        id: "blog-8",
        title: "Signal Quality Asessment of Photoplethysmogram Signals Using Hybrid Rule and Learning-Based Models",
        links: [
            {
                name: "paper",
                url: "https://jhi.sbis.org.br/index.php/jhi-sbis/article/view/1080",
                icon: <RiArticleFill/>
            }
        ],
        image: jhi,
        description: "Paper accepted, presented at Congresso Brasileiro de Informática em Saúde (CBIS), one of the largest Digital Health Congress in Latin America discussing the application of learning-based models at deep learning architectures to increase battery lifetime on limited resources devices. It was published at journal of health informatics",
        target: "_blank"
    },
    {
        id: "blog-7",
        title: "Optimization of Logistics Routes of Selective Collection Trucks using the Internet of Things: a Case Study",
        links: [
            {
                name: "paper",
                url: "https://bdm.unb.br/handle/10483/34144",
                icon: <RiArticleFill/>
            }
        ],
        image: bdm,
        description: "Graduation Project published at University of Brasília repository.This work deals with the application of a logistic route optimization model in a company in Brasília-DF, using the CRISP-DM data mining methodology and Google OR-Tools software to solve the Capacitated Vehicle Routing Problem. Reduction of 8.5% in the distance spent and 17% in the time spent per route of Selective Collection Trucks.(PT-BR) only.",
        target: "_blank"
    },
    {
        id: "blog-6",
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
        id: "blog-5",
        title: "Internet of Things System for Data Monitoring and Decision Making on the Selective Garbage Collection in Smart Cities",
        links: [
            {
                name: "paper",
                url: "https://www.iadisportal.org/digital-library/sistema-de-internet-das-coisas-para-monitoramento-de-dados-e-tomada-de-decis%C3%B5es-quanto-%C3%A0-coleta-seletiva-de-lixo-em-cidades-inteligentes",
                icon: <RiArticleFill/>
            }
        ],
        image: ciaca,
        description: "Best paper of the IADIS Ibero-American Conferences WWW/Internet and Applied Computing 2021 on the development of an internet of things system for monitoring waste data in selective collection containers in smart cities composed of hardware and software to facilitate the decision-making.(PT-BR) only",
        target: "_blank"
    },
    {
        id: "blog-4",
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
        id: "blog-3",
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
        id: "blog-2",
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