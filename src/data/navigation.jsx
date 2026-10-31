import {
  ChatPreview,
  VoicePreview,
  ImaginePreview,
  BuildPreview,
  BotPreview,
} from '../components/navigation/previews/ProductPreviews';

import {
  EnterprisePreview,
  StartupsPreview,
  FintechPreview,
  SupportPreview,
  SecurityPreview,
} from '../components/navigation/previews/SolutionPreviews';

export const PRODUCT_ITEMS = [
  {
    id: 'chat',
    title: 'Chat',
    desc: 'Frontier reasoning with real-time web search.',
    href: '#chat',
    preview: ChatPreview,
  },
  {
    id: 'build',
    title: 'Build',
    desc: 'Plan, edit, and ship code from terminal.',
    href: '#build',
    preview: BuildPreview,
  },
  {
    id: 'imagine',
    title: 'Imagine',
    desc: 'Generate images and video from text.',
    href: '#imagine',
    preview: ImaginePreview,
  },
  {
    id: 'voice',
    title: 'Voice',
    desc: 'Build voice agents with sub-second latency.',
    href: '#voice',
    preview: VoicePreview,
  },
  {
    id: 'bot',
    title: 'Bot',
    desc: 'Autonomous engineer with its own computer.',
    href: '#bot',
    preview: BotPreview,
  },
];

export const SOLUTION_ITEMS = [
  {
    id: 'enterprise',
    title: 'Enterprise',
    desc: 'Dedicated VPC, SOC2 Type II, and SSO.',
    href: '#enterprise',
    preview: EnterprisePreview,
  },
  {
    id: 'startups',
    title: 'Startups',
    desc: 'Ship 10x faster with autonomous AI.',
    href: '#startups',
    preview: StartupsPreview,
  },
  {
    id: 'fintech',
    title: 'Fintech & Banking',
    desc: 'Strict compliance & deterministic testing.',
    href: '#fintech',
    preview: FintechPreview,
  },
  {
    id: 'support',
    title: 'Customer Support',
    desc: 'Auto-reproduce bugs from tickets.',
    href: '#support',
    preview: SupportPreview,
  },
  {
    id: 'security',
    title: 'Security',
    desc: 'Continuous CVE scans and auto-patches.',
    href: '#security',
    preview: SecurityPreview,
  },
];

export const RESOURCE_ITEMS = [
  { label: 'Customer Stories', href: '#customer-stories' },
  { label: 'Business', href: '#business' },
  { label: 'Startups', href: '#startups-resources' },
  { label: 'Government', href: '#government' },
  { label: 'Customer Support', href: '#customer-support' },
  { label: 'Legal', href: '#legal' },
  { label: 'Security', href: '#security-resources' },
];

