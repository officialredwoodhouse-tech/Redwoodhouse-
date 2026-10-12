/**
 * Assets and Brand Constants for Redwood House
 * AI Automation · Custom Software · SEO Marketing · Brand Design · Websites
 */
import webStudioHero from '../assets/images/web_studio_hero_1791550047524.jpg';
import seoArchitectureShowcase from '../assets/images/seo_architecture_showcase_1791550060793.jpg';
import digitalPresenceCraft from '../assets/images/digital_presence_craft_1791550075352.jpg';
import chandigarhDigitalStudio from '../assets/images/chandigarh_digital_studio_1791550088179.jpg';
import aiAutomationWorkflow from '../assets/images/ai_automation_workflow_1791832767889.jpg';
import customSoftwareSystems from '../assets/images/custom_software_systems_1791832782081.jpg';

export const ASSETS = {
  webStudioHero,
  seoArchitectureShowcase,
  digitalPresenceCraft,
  chandigarhDigitalStudio,
  aiAutomationWorkflow,
  customSoftwareSystems,
};

export const BRAND = {
  name: 'Redwood House',
  tagline: 'AI Automation · Custom Software · SEO Marketing · Design · Websites',
  location: 'Chandigarh, India',
  email: 'Officialredwoodhouse@gmail.com',
  mailtoGeneral: 'mailto:Officialredwoodhouse@gmail.com?subject=Redwood%20House%20%E2%80%94%20AI%20Automation%20%26%20Digital%20Systems%20Inquiry',
  mailtoAudit: 'mailto:Officialredwoodhouse@gmail.com?subject=Redwood%20House%20%E2%80%94%20Automation%20%26%20Architecture%20Audit%20Request',
  mailtoVertical: (vertical: string) =>
    `mailto:Officialredwoodhouse@gmail.com?subject=Redwood%20House%20%E2%80%94%20${encodeURIComponent(vertical)}%20Automation%20%26%20Software%20Inquiry`,
};
