import React from "react";

import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
      companyName: "Google",
      postedDate: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$35/hour",
      location: "Peshawar, PK",
    },
    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
      companyName: "Microsoft",
      postedDate: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior",
      pay: "$50/hour",
      location: "Islamabad, PK",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
      companyName: "Amazon",
      postedDate: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$32/hour",
      location: "Lahore, PK",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
      companyName: "Meta",
      postedDate: "10 days ago",
      post: "React Native Developer",
      tag1: "Part Time",
      tag2: "Junior",
      pay: "$30/hour",
      location: "Peshawar, PK",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
      companyName: "Apple",
      postedDate: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior",
      pay: "$55/hour",
      location: "Karachi, PK",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
      companyName: "Netflix",
      postedDate: "3 weeks ago",
      post: "UI/UX Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$45/hour",
      location: "Islamabad, PK",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
      companyName: "NVIDIA",
      postedDate: "4 weeks ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior",
      pay: "$60/hour",
      location: "Lahore, PK",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
      companyName: "IBM",
      postedDate: "6 weeks ago",
      post: "Cloud Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$42/hour",
      location: "Rawalpindi, PK",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
      companyName: "Adobe",
      postedDate: "8 weeks ago",
      post: "Full Stack Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$40/hour",
      location: "Peshawar, PK",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
      companyName: "Oracle",
      postedDate: "10 weeks ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$34/hour",
      location: "Islamabad, PK",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem) {
        return (
          <Card
            companyName={elem.companyName}
            location={elem.location}
            brandLogo={elem.brandLogo}
            postedDate={elem.postedDate}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
          />
        );
      })}
    </div>
  );
};

export default App;
