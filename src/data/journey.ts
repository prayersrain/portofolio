export type JourneyItem = {
  year: string;
  title: string;
  company: string;
  description: string;
};

export const journeyData: JourneyItem[] = [
  {
    year: "2022 - Present",
    title: "Full Stack Developer",
    company: "Karya Mandiri Dental",
    description: "Responsible for designing, developing, and maintaining comprehensive digital solutions and web applications for Karya Mandiri Dental.",
  },
  {
    year: "Current",
    title: "Undergraduate Student (Semester 8)",
    company: "Universitas Gunadarma",
    description: "Pursuing a Bachelor's degree in Informatics Engineering. Focusing on software engineering and modern web technologies.",
  },
  {
    year: "Previous",
    title: "Vocational High School Student",
    company: "SMKN 1 Kota Bekasi",
    description: "Graduated with foundational knowledge in technology and engineering, preparing for a career in software development.",
  }
];
