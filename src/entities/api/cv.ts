import cvData from '../model/db.json';

export type MainInfo = typeof cvData.cv.mainInfo;
export type Summary = typeof cvData.cv.summary;
export type Skills = typeof cvData.cv.technicalSkills;
export type WorkExperience = typeof cvData.cv.workExperience;
export type NotableProjects = typeof cvData.cv.notableProjects;
export type Education = typeof cvData.cv.education;
export type Additional = typeof cvData.cv.additional;
export type Socials = typeof cvData.cv.socials;

export async function getMainInfo(): Promise<MainInfo> {
  return cvData.cv.mainInfo;
}

export async function getSummary(): Promise<Summary> {
  return cvData.cv.summary;
}

export async function getSkills(): Promise<Skills> {
  return cvData.cv.technicalSkills;
}

export async function getWorkExperience(): Promise<WorkExperience> {
  return cvData.cv.workExperience;
}

export async function getNotableProjects(): Promise<NotableProjects> {
  return cvData.cv.notableProjects;
}

export async function getEducation(): Promise<Education> {
  return cvData.cv.education;
}

export async function getAdditional(): Promise<Additional> {
  return cvData.cv.additional;
}

export async function getSocials(): Promise<Socials> {
  return cvData.cv.socials;
}
