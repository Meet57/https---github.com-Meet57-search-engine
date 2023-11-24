import React, { useState } from "react";
import {
  Button,
  Drawer,
  Space,
  Pagination,
  Card,
  Descriptions,
  Divider,
} from "antd";
import JobCardComponent from "./JobCardComponent";
import Title from "antd/es/typography/Title";

const JobWidgetsComponent = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Number of jobs to display per page
  const [drawerData, setDrawerData] = useState([]);

  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const showLargeDrawer = (props) => {
    console.log("props", props);
    setDrawerData(props);
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Full-stack developer",
      company: "Experfy",
      location: "Toronto, Ontario, Canada",
      description:
        "Our client is looking for a Full-stack developer (front-end & back-end) to join our digital team for designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. The primary responsibility of a Full Stack Developer includes designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. Responsibilities Design overall architecture of the web application Developing front end website architecture Translate Wireframe responsive HTML/CSS Build interactive web pages Integrate with App backend Designing user interactions on web pages Developing back-end website applications Implement authentication and authorization Set-up backend storage (DynamoDB, RDS) to store user settings Design and implement API requests to Data science models Ensuring cross-platform optimization for mobile phones Working alongside graphic designers for web design features Ensuring responsiveness of applications Experience working with graphic designers and converting designs to visual elements Understanding and implementation of security and data protection | Website",
      link: "https://ca.linkedin.com/jobs/view/full-stack-developer-at-experfy-3590300623",
    },
    {
      id: 2,
      title: "Senior Software & PLC Engineer",
      company: "I.B.C. International Bar Coding Systems & Consulting Inc.",
      location: "Penticton, BC",
      description:
        "IBC is a seeking a senior software and PLC programming Engineer with experience to develop, manage and support its current inventory management software suite for mobile devices and the Windows PC as well as maintaining and developing automated equipment, electrical control systems, and vision systems. Initial focus will be customer support for both software and IT hardware, including Android mobile computers, printers, and programming support. Programming experience with either Android or Qt is essential. There is a need for candidates to get up to speed with the development and target platforms quickly, and being able to develop software and diagnose issues with minimal supervision. Electronics and PLC experience would be a valuable asset. General Summary: IBC is a comprehensive technology solution partner for SMB’s, Enterprises, and Public Agencies. With 20+ years’ experience in bar coding, labeling solutions, enterprise computing, inventory management, and Point of Sale (POS) IBC’s customers span a broad range of industries across the world. Helping us grow is our proprietary software solutions built and designed in house. IBC is looking for a software engineer interested in being part of a team providing custom software solutions to customers. Requirements: Industrial programming experience in C and C++ Minimum 3 years' experience controlling/integrating machinery/equipment Working knowledge of automated equipment, electrical control systems and ethernet communication network. Experience with Visual Studio Good system knowledge of Windows and Android The ability to design and test platform independent software Good knowledge of electronics and PLC programming Capable of quickly learning new technology and adopt new methodologies Excellent problem solving and troubleshooting skills Good record keeping skills Proven ability to deliver high quality products and on time Canadian citizen, permanent resident of Canada, person granted refugee status in Canada Legally entitled to work according to British Columbia legislation and regulations Nice to have: PLC and process control experience Qt platform experience (Qt Creator) Experience in C#, VB script and Javascript MySQL, SQLite or SQL Server experience Experience with creating static and dynamic link libraries Experience with Microsoft MFC Exposure to TCP and UDP networking code (high level) Hands on experience with installing computer hardware such as printers and Point Of Sale (POS) equipment Experience: 2 to 5 years Responsibilities: Develop, design and test new software Troubleshoot and fix any issues with current software Maintain, evaluate, and support new and existing software implementations Design new features and provide estimates according to customer requests Install and configure software remotely or at customer’s site Expectations: Willing to sign 36 month non-disclosure agreement Willing to travel when needed (no more than ten percent) Able to follow detailed instructions Able to work unsupervised Able to work 40 hours per week or more when required Job Types: Permanent, Full-time Salary: $85,000.00-$120,000.00 per year Benefits: Dental care RRSP match Schedule: 8 hour shift",
      link: "https://ca.indeed.com/viewjob?jk=70ff4f153f5970a8",
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Design Match",
      location: "Ontario, Canada",
      description:
        "Design Match is searching for a skilled Web Developer to join our team. As a Web Developer, you will play a crucial role in designing, developing, and maintaining our web presence, ensuring a seamless user experience and delivering high-quality web solutions. Responsibilities Collaborate with cross-functional teams to gather requirements and understand project objectives. Design and implement user interfaces with a focus on aesthetics and functionality. Develop and maintain web applications with a strong emphasis on responsiveness and compatibility. Conduct rigorous testing to ensure optimal performance and identify areas for improvement. Stay updated with the latest web development trends and technologies. Requirements Proven experience as a Web Developer or related role. Proficiency in web development technologies such as HTML, CSS, JavaScript, and front-end frameworks. Understanding of back-end technologies and server-side development (e.g., Node.js, PHP, ASP.NET). Familiarity with content management systems (CMS) is a plus. Excellent problem-solving and communication skills. If you are enthusiastic about creating visually appealing and functional web experiences, we'd love to have you on our team!",
      link: "https://ca.linkedin.com/jobs/view/web-developer-at-design-match-3686442002",
    },
    {
      id: 4,
      title: "React Developer",
      company: "MindPal",
      location: "Toronto, Ontario, Canada",
      description:
        "Our client is looking for a Full-stack developer (front-end & back-end) to join our digital team for designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. The primary responsibility of a Full Stack Developer includes designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. Responsibilities Design overall architecture of the web application Developing front end website architecture Translate Wireframe responsive HTML/CSS Build interactive web pages Integrate with App backend Designing user interactions on web pages Developing back-end website applications Implement authentication and authorization Set-up backend storage (DynamoDB, RDS) to store user settings Design and implement API requests to Data science models Ensuring cross-platform optimization for mobile phones Working alongside graphic designers for web design features Ensuring responsiveness of applications Experience working with graphic designers and converting designs to visual elements Understanding and implementation of security and data protection | Website",
      link: "https://ca.linkedin.com/jobs/view/react-developer-at-mindpal-3764783102",
    },
    {
      id: 5,
      title: "Jr Full Stack Engineer",
      company: "Affinity",
      location: "Greater Vancouver Metropolitan Area",
      description:
        "Our client is looking for a Full-stack developer (front-end & back-end) to join our digital team for designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. The primary responsibility of a Full Stack Developer includes designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. Responsibilities Design overall architecture of the web application Developing front end website architecture Translate Wireframe responsive HTML/CSS Build interactive web pages Integrate with App backend Designing user interactions on web pages Developing back-end website applications Implement authentication and authorization Set-up backend storage (DynamoDB, RDS) to store user settings Design and implement API requests to Data science models Ensuring cross-platform optimization for mobile phones Working alongside graphic designers for web design features Ensuring responsiveness of applications Experience working with graphic designers and converting designs to visual elements Understanding and implementation of security and data protection | Website",
      link: "https://ca.linkedin.com/jobs/view/jr-full-stack-engineer-at-affinity-3756753689",
    },
    {
      id: 6,
      title: "Full-stack developer",
      company: "Experfy",
      location: "Toronto, Ontario, Canada",
      description:
        "Our client is looking for a Full-stack developer (front-end & back-end) to join our digital team for designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. The primary responsibility of a Full Stack Developer includes designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. Responsibilities Design overall architecture of the web application Developing front end website architecture Translate Wireframe responsive HTML/CSS Build interactive web pages Integrate with App backend Designing user interactions on web pages Developing back-end website applications Implement authentication and authorization Set-up backend storage (DynamoDB, RDS) to store user settings Design and implement API requests to Data science models Ensuring cross-platform optimization for mobile phones Working alongside graphic designers for web design features Ensuring responsiveness of applications Experience working with graphic designers and converting designs to visual elements Understanding and implementation of security and data protection | Website",
      link: "https://ca.linkedin.com/jobs/view/full-stack-developer-at-experfy-3590300623",
    },
    {
      id: 7,
      title: "React Developer",
      company: "MindPal",
      location: "Toronto, Ontario, Canada",
      description:
        "Our client is looking for a Full-stack developer (front-end & back-end) to join our digital team for designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. The primary responsibility of a Full Stack Developer includes designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. Responsibilities Design overall architecture of the web application Developing front end website architecture Translate Wireframe responsive HTML/CSS Build interactive web pages Integrate with App backend Designing user interactions on web pages Developing back-end website applications Implement authentication and authorization Set-up backend storage (DynamoDB, RDS) to store user settings Design and implement API requests to Data science models Ensuring cross-platform optimization for mobile phones Working alongside graphic designers for web design features Ensuring responsiveness of applications Experience working with graphic designers and converting designs to visual elements Understanding and implementation of security and data protection | Website",
      link: "https://ca.linkedin.com/jobs/view/react-developer-at-mindpal-3764783102",
    },
  ]);

  // Calculate the range of jobs to display based on the current page and page size
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedJobs = jobs.slice(startIndex, endIndex);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const handleApplyButtonClick = () => {
    const link = drawerData.link;
    window.open(link, "_blank");
    onClose();
  };

  return (
    <div>
        {displayedJobs.map((job, index) => (
        <JobCardComponent
          key={index}
          id={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          description={job.description}
          link={job.link}
          showLargeDrawer={showLargeDrawer}
        />
      ))}

      {/* Pagination component */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={jobs.length}
        onChange={onPageChange}
        style={{ marginTop: "20px", textAlign: "center" }}
      />

      {/* TODO change the title of the drawer */}
      <Drawer
        title=""
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            {/* <Button onClick={onClose}>Cancel</Button> */}
            <Button className="btn" onClick={handleApplyButtonClick}>
              Apply
            </Button>
          </Space>
        }
      >
        <Card>
          <div className="text-cyan-900 strong text-3xl">
            {drawerData.title}
          </div>
          <Divider />
          <span className="text-black text-xl underline">
            {drawerData.company}
          </span>
          <br />
          <span className="text-gray-500 text-base">{drawerData.location}</span>
          <br />
          <br />
          <span className="text-lg text-black">Job Details: </span>
          <br />
          <span className="text-gray-600 text-base">
            {drawerData.description}
          </span>
        </Card>
      </Drawer>
    </div>
  );
};

export default JobWidgetsComponent;
