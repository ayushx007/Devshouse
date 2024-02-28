import Logesh from "/public/Leads/DrLogeshR.jpg";
import GDSCLead from "/public/Leads/aditi.jpeg";
import AppDevelopment_Lead from "/public/Leads/AppDevelopment.jpg";
import Blockchain_Lead2 from "/public/Leads/Blockchain2.jpg";
import CompetitiveProgramming_Lead2 from "/public/Leads/CompetitiveProgramming2.jpg";
import DataScience_Lead2 from "/public/Leads/DataScience2.jpg";
import Design_Lead from "/public/Leads/Design.jpg";
import Management_Lead1 from "/public/Leads/Management1.jpg";
import Management_Lead2 from "/public/Leads/jahanvi.jpeg";
import Marketing_Lead from "/public/Leads/Marketing.jpg";
import OpenSource_Lead from "/public/Leads/OpenSource.jpg";
import Outreach_Lead from "/public/Leads/Outreach.jpg";
import SocialMedia_Lead1 from "/public/Leads/SocialMedia1.jpg";
import UI_UX_Lead from "/public/Leads/UI_UX.jpg";
import WebDevelopment_Lead1 from "/public/Leads/WebDevelopment1.jpg";
import WebDevelopment_Lead2 from "/public/Leads/WebDevelopment2.jpg";
import Coreteam1 from "/public/Leads/amritansh.jpeg";
import Coreteam2 from "/public/Leads/Shaan.jpg";
import Coreteam3 from "/public/Leads/surith.jpeg";
import Coreteam4 from "/public/Leads/shrouya.jpeg";

const boardMembers = [
  {
    name: "Dr. Logesh R",
    image: Logesh,
    role: "Faculty Coordinator",
    description: "Placeholder",
    github: "https://github.com/zahransajid",
    linkedIn: "",
    type: "faculty",
  },
  {
    name: "Aditi Jha",
    image: GDSCLead,
    role: "GDSC Lead",
    description: "It's not what happens to you, but how you react to it that matters",
    github: "https://github.com/AchintyaSingh0220",
    linkedIn: "https://www.linkedin.com/in/aditi-jha-914a9b214/",
    type: "organizer",
  },
  {
    name: "Mihika Dhakray",
    image: UI_UX_Lead,
    role: "UX Design Lead",
    description: "Making problem solving fun",
    github: "https://github.com/castlercodes",
    linkedIn: "https://www.linkedin.com/in/mihikadhakray",
    type: "technical",
  },
  {
    name: "Anurag Tamhankar",
    image: Design_Lead,
    role: "Design Lead",
    description: "Doom Scrolling reels is my fav hobby",
    github: "https://github.com/codexx07",
    linkedIn: "https://www.linkedin.com/in/anurag-tamhankar-75a471220/",
    type: "organizer",
  },
  {
    name: "Syed Omar Albeez",
    image: Management_Lead1,
    role: "Management Lead",
    description: "One track mind, one track heart",
    github: "https://github.com/amarafray",
    linkedIn: "https://www.linkedin.com/in/syed-omar-albeez/",
    type: "organizer",
  },
  {
    name: "Jahanvi Chaurasia",
    image: Management_Lead2,
    role: "Management Lead",
    description: "One who juggles with deadlines and tasks like a pro",
    github: "https://github.com/syedomar1",
    linkedIn: "https://www.linkedin.com/in/janhavi-chaurasia-ab9169278",
    type: "co-organizer",
  },
  {
    name: "Emmanuel Allan",
    image: WebDevelopment_Lead2,
    role: "Web Dev Lead",
    description: "Placeholder",
    github: "",
    linkedIn: "https://www.linkedin.com/in/emmanuel-allan/",
    type: "technical",
  },
  {
    name: "Vaibhav T S",
    image: WebDevelopment_Lead1,
    role: "Web Dev Lead",
    description: "Turning caffeine and curiosity into coding masterpieces",
    github: "https://github.com/karanwxliaa",
    linkedIn: "https://www.linkedin.com/in/vaibhav-tekkalur/",
    type: "technical",
  },
  {
    name: "Sparsh Chakraborty",
    image: SocialMedia_Lead1,
    role: "Social Media Lead",
    description: "Placeholder",
    github: "https://github.com/Kriticle",
    linkedIn: "https://www.linkedin.com/in/sparsh-chakraborty/",
    type: "co-organizer",
  },
  {
    name: "Naveen Choudhury",
    image: Marketing_Lead,
    role: "Marketing Lead",
    description: "You do not rise to the level of your goals. You fall to the level of your systems",
    github: "https://github.com/void-anurag",
    linkedIn: "www.linkedin.com/in/naveen-shankar-choudhury-481262238",
    type: "co-organizer",
  },
  {
    name: "Subham Ghosh",
    image: Outreach_Lead,
    role: "Outreach Lead",
    description: "Placeholder",
    github: "https://github.com/vaibhavTekk",
    linkedIn: "https://www.linkedin.com/in/subhamgcon/",
    type: "organizer",
  },
  {
    name: "Zahran Sajid",
    image: OpenSource_Lead,
    role: "Open Source Lead",
    description: "Versatile creator with a flair for innovation",
    github: "https://github.com/EmmanuelAllanMJ",
    linkedIn: "https://www.linkedin.com/in/zahran-sajid/",
    type: "co-organizer",
  },
  {
    name: "Cynthia Konar",
    image: AppDevelopment_Lead,
    role: "App Dev Lead",
    description: "Fly High",
    github: "https://github.com/naveenchoudhury",
    linkedIn: "https://www.linkedin.com/in/cynthia-konar-649b5721b/",
    type: "co-organizer",
  },
  {
    name: "Jeevan Alexan",
    image: CompetitiveProgramming_Lead2,
    role: "Comp Prog Lead",
    description: "Mastermind of app magic",
    github: "https://github.com/cynthiakonar",
    linkedIn: "https://www.linkedin.com/in/jeevan-alexen-kavalam-83098a215",
    type: "co-organizer",
  },
  {
    name: "Ameiy Acharya",
    image: Blockchain_Lead2,
    role: "Blockchain Lead",
    description: "Full of coffee, code and chaos",
    github: "https://github.com/Swastika-shukla",
    linkedIn: "https://www.linkedin.com/in/ameiy-acharya-3a3b7721b/",
    type: "co-organizer",
  },
  {
    name: "Kriti Agarwal",
    image: DataScience_Lead2,
    role: "Data Science Lead",
    description: "Upcoming techie with keen interest in Blockchain and Data Science",
    github: "https://github.com/AmeiyAcharya",
    linkedIn: "https://www.linkedin.com/in/kriti-agarwal-1369b7249/",
    type: "co-organizer",
  },
  {
    name: "Amritansh Sharma",
    image: Coreteam1,
    role: "Core team",
    description: "Placeholder",
    github: "",
    linkedIn: "https://www.linkedin.com/in/drowsy-coder/",
    type: "organizer",
  },
  {
    name: "Shaan Mukherjee",
    image: Coreteam2,
    role: "Core team",
    description: "Placeholder",
    github: "",
    linkedIn: "https://www.linkedin.com/in/shaan-mukherjee",
    type: "co-organizer",
  },
  {
    name: "L.G.Surith",
    image: Coreteam3,
    role: "Core team",
    description: "Placeholder",
    github: "",
    linkedIn: "https://www.linkedin.com/in/surithlg/",
    type: "co-organizer",
  },
  {
    name: "Shourya Pratap Singh",
    image: Coreteam4,
    role: "Core team",
    description: "Placeholder",
    github: "",
    linkedIn: "Linkedin.com/in/amspsingh04",
    type: "organizer",
  },
];

export default boardMembers;
