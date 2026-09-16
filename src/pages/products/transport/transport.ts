import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TransportFeature {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-transport',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transport.html',
  styleUrl: './transport.css',
})
export class Transport {
  features: TransportFeature[] = [
    {
      title: 'Monitor real-time events',
      description: 'Trigger actions based on the flow of people and vehicles. Identify accidents or breakdowns and alert emergency services. Optimize traffic signals patterns according to congestion. Enforce road occupancy rules for smoother public transport.',
      imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Analyze operational trends',
      description: 'Record trends in the utilization of facilities, equipment, and roads. Identify open parking spots, count people on public transport, detect baggage bottlenecks, or gather vehicle data in order to improve resource allocation and decision making.',
      imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Enhance safety and compliance',
      description: 'Reduce accidents and ensure regulatory compliance. Trigger alerts for people and objects in the path of vehicles. Ensure safety equipment is placed in correct areas. Monitor human-machine interactions and usage of PPE.',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Elevate customer experience',
      description: 'Improve facility layout by identifying congestion points in airports, train stations, and other facilities. Speed up processes, like baggage sorting, by recognizing objects or reading tags. Update informational displays and wait times based on real-time data.',
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Guide automated machinery',
      description: 'Direct autonomous ground support equipment, forklifts, carts, and other vehicles. Read license plates and automate access control in parking lots. Support collision avoidance and automated navigation.',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Predict infrastructure maintenance',
      description: 'Automate inspections of critical assets like aircrafts and vehicle parts, identifying signs of wear or damage. Detect structural damage in roads, bridges, and facilities. Proactively schedule maintenance and avoid costly disruptions.',
      imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    }
  ];
}