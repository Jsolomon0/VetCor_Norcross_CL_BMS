import { buildAppShellModel } from "../../../packages/auth/src/shared/index.ts";

export function getWebsiteShellModel() {
  return buildAppShellModel("website");
}

export const vetcorServices = [
  {
    title: "Water Damage Mitigation & Restoration",
    description: "Rapid extraction, drying, and full structural restoration after flooding, pipe bursts, or water intrusion events."
  },
  {
    title: "Fire Damage Mitigation & Restoration",
    description: "Emergency board-up, debris removal, smoke and soot cleanup, and complete fire damage restoration."
  },
  {
    title: "Mold Remediation",
    description: "IICRC-certified mold detection, containment, removal, and prevention for residential, commercial, and industrial properties."
  },
  {
    title: "Bio, Trauma & Crime Scene Clean-Up",
    description: "Discreet, professional biohazard and trauma scene remediation handled with care, compliance, and compassion."
  },
  {
    title: "Roof Board Up",
    description: "Emergency temporary roof protection to secure your property after storm, fire, or structural damage."
  },
  {
    title: "Tree & Debris Clean Up",
    description: "Fast removal of fallen trees, storm debris, and hazardous materials from your property."
  },
  {
    title: "Covid-19 Fogging & Deep Cleaning",
    description: "Electrostatic fogging and hospital-grade disinfection for residential, commercial, and industrial spaces."
  },
  {
    title: "Carpet Cleaning",
    description: "Professional deep carpet cleaning and extraction for homes, offices, and post-restoration environments."
  }
] as const;

export const vetcorValues = [
  { title: "Service", body: "Customer SERVICE is our #1 priority — we strive for 100% satisfaction on every job, every time." },
  { title: "Mission Completion", body: "We complete the mission — ALWAYS. No job is left unfinished." },
  { title: "Integrity", body: "INTEGRITY is NEVER compromised. Our word is our bond." },
  { title: "Professionalism", body: "We show PROFESSIONALISM in all actions and communications with customers and partners." },
  { title: "Respect", body: "We RESPECT our customers, their time, their property, and their resources." },
  { title: "Responsibility & Accountability", body: "We take RESPONSIBILITY AND ACCOUNTABILITY for everything we do — or fail to do." },
  { title: "Pride", body: "We take PRIDE in the quality of our work, in each other, and in our reputation." }
] as const;
