import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi,
    SiScikitlearn,
    SiPandas,
    SiNumpy,
    SiTensorflow,
    SiOpencv,
    SiFlask,
    SiR,
    SiMatrix,
    SiCplusplus,
    TfiLinux,
    SiAzurefunctions,
    SiLinux
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "Scikit-learn"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiPandas size={50}/>,
            text: "pandas"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiNumpy size={50}/>,
            text: "numpy"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiTensorflow size={50}/>,
            text: "Tensorflow"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiOpencv size={50}/>,
            text: "OpenCV"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiR size={50}/>,
            text: "R"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiMatrix size={50}/>,
            text: "MATLAB"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiCplusplus size={50}/>,
            text: "C/C++"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Microsoft Power BI"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "Postgres"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiFlask size={50}/>,
            text: "Flask"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiMicrosoftazure size={50}/>,
            text: "Azure AI"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        }
        ,
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        }
        ,
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiLinux size={50}/>,
            text: "Linux"
        }
    ]
}

export default skillsConfig
