---
title: "Case Study: Onboarding Flow Redesign"
layout: layout.njk
permalink: /pm/case-studies/onboarding-redesign/
---

{% set caseStudy = {
  title: "Onboarding Flow Redesign",
  subtitle: "Reducing sign-up drop-off through cross-team coordination and user research",
  
  problem: "<p>Our mobile app had an 18% drop-off rate during onboarding—users started the process but never completed account creation. Business metrics showed that getting users through onboarding was the #1 lever for user acquisition.</p><p>The existing flow had been built in isolation without recent user feedback. We had no data on where, exactly, users were dropping off or why.</p>",
  
  approach: "<ul><li><strong>User research:</strong> Conducted moderated interviews with 15 new users to understand pain points, frustrations, and moments of abandonment</li><li><strong>Requirements documentation:</strong> Created detailed user stories in Jira, mapping the current state and desired future flows</li><li><strong>Cross-team collaboration:</strong> Facilitated weekly syncs with product, design, and backend engineering to ensure aligned priorities and realistic timelines</li><li><strong>Risk management:</strong> Identified scope creep potential early; created a 'parking lot' for post-launch features to stay on schedule</li><li><strong>Stakeholder communication:</strong> Provided bi-weekly status updates with metrics on progress, blockers, and timeline adjustments</li></ul>",
  
  tools: [
    "Jira for sprint planning and user story management",
    "Notion for collaborative requirements documentation",
    "Figma for prototype review and feedback loops",
    "Google Analytics for drop-off point analysis",
    "Confluence for decision logs and architectural docs"
  ],
  
  timeline: "8-week sprint cycle (Jan–Feb 2024). Launched mid-sprint after phased rollout to mitigate risk.",
  
  metrics: [
    {
      label: "Sign-up Drop-off Rate",
      result: "Reduced from 18% → 14% (22% improvement)"
    },
    {
      label: "Time to Completion",
      result: "Average 2m 15s → 1m 40s (27% faster)"
    },
    {
      label: "Team Feedback",
      result: "Requirement clarity rated 4.2/5 (vs 2.8/5 in previous project)"
    },
    {
      label: "Delivered On-Time",
      result: "Yes—no delays despite mid-project scope refinement"
    }
  ],
  
  lessons: "<p><strong>1. User research beats assumptions.</strong> We discovered that users weren't abandoning due to complexity—they were confused by the purpose of each field. Clearer labeling had higher impact than UX redesign alone.</p><p><strong>2. Written requirements reduce meeting load.</strong> By documenting stories in Jira early, we cut weekly sync times from 2 hours → 45 minutes. Teams moved faster because they had clarity going in.</p><p><strong>3. Protect the baseline.</strong> I created a 'must-have' vs 'nice-to-have' list. When scope crept (it always does), we had a shared reference point. This saved us 3 weeks of back-and-forth.</p><p><strong>4. Visibility compounds trust.</strong> Bi-weekly stakeholder updates weren't just noise—they built confidence. When executives saw the drop-off data improving in real time, they became advocates, not blockers.</p>"
} %}

{% include "case-study.njk" %}
