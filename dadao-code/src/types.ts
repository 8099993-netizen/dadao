/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
}

export interface PolicyContent {
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}
