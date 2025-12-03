import { LucideIcon } from "lucide-react";

export enum ViewState {
  LANDING = 'LANDING',
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  CHALLENGES = 'CHALLENGES',
  CHALLENGE_DETAIL = 'CHALLENGE_DETAIL',
  PROFILE = 'PROFILE',
  NOTIFICATIONS = 'NOTIFICATIONS',
  ADMIN = 'ADMIN'
}

export interface NavItem {
  id: ViewState;
  label: string;
  icon: LucideIcon;
}

export interface Challenge {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  time: string;
  points: number;
  status: 'Completed' | 'Failed' | 'Published' | 'Draft';
  language: string;
  date: string;
}

export interface Notification {
  id: string;
  title: string;
  time: string;
  read: boolean;
  type: 'achievement' | 'challenge' | 'system' | 'comment';
}