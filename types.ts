// Import React to resolve React namespace in TypeScript
import React from 'react';

export type Tab = "home" | "reservation" | "quote" | "si";

export interface AutomationTool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  status: 'Active' | 'Under Maintenance' | 'New';
}
