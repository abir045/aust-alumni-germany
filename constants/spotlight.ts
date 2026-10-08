export interface AlumniSpotlightItem {
  id: string;
  name: string;
  roleAndBatch: string;
  image: string;
  quote?: string;
}

export const ALUMNI_SPOTLIGHT_DATA: AlumniSpotlightItem[] = [
  {
    id: "nusrat-jahan",
    name: "Nusrat Jahan",
    roleAndBatch: "Class of 2017 (CSE) • Senior Cloud Solutions Architect, Munich",
    image: "/home/spotlight/nusrat-jahan.jpg",
  },
  {
    id: "tanvir-hossain",
    name: "Tanvir Hossain",
    roleAndBatch: "Class of 2015 (EEE) • Lead Automotive Systems Engineer, Stuttgart",
    image: "/home/spotlight/nusrat-jahan.jpg",
  },
  {
    id: "farzana-kabir",
    name: "Farzana Kabir",
    roleAndBatch: "Class of 2019 (ME) • Robotics & Automation Specialist, Hamburg",
    image: "/home/spotlight/nusrat-jahan.jpg",
  },
];
