/**
 * Assets and Brand Constants for Redwood House
 * Automation, software, and digital growth for ambitious teams.
 * https://redwood-house.polsia.io/
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
  domain: 'redwood-house.polsia.io',
  tagline: 'We make websites the professional way · AI automation, software, and digital growth for ambitious teams.',
  eyebrow: 'Redwood House / Systems & Web Studio',
  headline: 'Build the kind of business that keeps moving.',
  subheadline:
    'We don’t just build websites — we make websites the professional way and engineer the intelligent operating layer behind them. Bespoke AI automation, custom software, SEO marketing, and digital flagships for agencies, clinics, hospitals, gyms, and growing companies.',
  email: 'officialredwoodHouse@gmail.com',
  secondaryEmail: 'officialredwoodHouse@gmail.com',
  mailto: 'mailto:officialredwoodHouse@gmail.com',
  mailtoGeneral: 'mailto:officialredwoodHouse@gmail.com?subject=Redwood%20House%20%E2%80%94%20Systems%20%26%20Automation%20Inquiry',
  mailtoAudit: 'mailto:officialredwoodHouse@gmail.com?subject=Redwood%20House%20%E2%80%94%20Systems%20%26%20Workflow%20Audit%20Request',
  mailtoVertical: (vertical: string) =>
    `mailto:officialredwoodHouse@gmail.com?subject=Redwood%20House%20%E2%80%94%20${encodeURIComponent(vertical)}%20Automation%20Inquiry`,
  location: 'India and international markets',
};
