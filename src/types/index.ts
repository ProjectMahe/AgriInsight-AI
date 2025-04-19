export interface WeatherData {
  current: {
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    icon: any; // Lucide icon component
  };
  forecast: Array<{
    day: string;
    temp: number;
    icon: any; // Lucide icon component
  }>;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  type: 'low' | 'medium' | 'high';
  time: string;
}

export interface CropStatus {
  id: string;
  name: string;
  status: 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Attention';
  statusColor: 'success' | 'primary' | 'warning' | 'error';
  progress: number;
  stage: string;
  plantedArea: string;
  predictedYield: string;
  harvestDate: string;
}

export interface Resource {
  id: string;
  name: string;
  current: number;
  unit: string;
  target: number;
  previousPeriod: number;
  change: number;
  efficiency: number;
}

export interface SoilSample {
  id: string;
  field: string;
  date: string;
  status: 'Pending' | 'Analyzing' | 'Analyzed';
  ph: number;
  texture: string;
  organicMatter: string;
  issues: string | null;
}

export interface CommunityPost {
  id: string;
  author: string;
  authorRole: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
  tags: string[];
}

export interface Expert {
  id: string;
  name: string;
  specialty: string;
  availability: 'Available' | 'Busy' | 'Offline';
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  attending: number;
}

export interface Task {
  id: string;
  task: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
  assignee: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  farmName: string;
  farmType: 'crop' | 'livestock' | 'mixed' | 'orchard' | 'vineyard';
  location: string;
  about: string;
}

export interface AISettings {
  cropMonitoring: boolean;
  weatherAnalysis: boolean;
  resourceOptimization: boolean;
  yieldPrediction: boolean;
  dataSharing: boolean;
  trainingFrequency: 'daily' | 'weekly' | 'monthly' | 'manual';
}