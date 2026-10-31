import React from 'react';

export const LOGIN_SLIDES = [
  {
    id: 'frontier-model',
    badge: 'Pro',
    badgeIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="6 2 18 2 22 8 12 22 2 8 6 2"></polygon>
      </svg>
    ),
    title: 'Every Frontier Model',
    description: 'Access frontier performance for up to 60% less. Devin mixes and matches models to get the most from each.',
    image: '/assets/bg-1.jpg',
  },
  {
    id: 'end-to-end-tests',
    badge: 'Cloud VM',
    badgeIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: 'Tests End to End on its Own Computer',
    description: 'Devin spins up its own Windows, Mac, and Linux virtual machines as needed to build, test in its browser, and verify.',
    image: '/assets/bg-2.jpg',
  },
  {
    id: 'parallel-cloud',
    badge: 'Parallel Fleet',
    badgeIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
    title: 'Keeps Working When Your Laptop is Closed',
    description: 'Delegate a big task, then Devin splits it across parallel cloud agents, manages them, and reports back.',
    image: '/assets/bg-3.jpg',
  },
  {
    id: 'slack-collab',
    badge: 'Collaboration',
    badgeIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    title: 'Joins the Thread When You @Devin',
    description: 'Tag @Devin in Slack, Teams, and more. Devin reads the thread, responds to follow-ups, and gets to work.',
    image: '/assets/bg-5.jpg',
  },
  {
    id: 'proactive-alerts',
    badge: 'Automations',
    badgeIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    ),
    title: 'Watches for Issues and Fixes Them Proactively',
    description: 'Set up automations so Devin handles bugs, failed CI, and incoming alerts as they land.',
    image: '/assets/bg-6.jpg',
  },
];
