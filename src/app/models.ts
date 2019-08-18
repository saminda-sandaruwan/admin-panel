export interface Event {
    id: number;
    title: string;
    description: string;
} 

export class EventData implements Event {
    id: number;
    title: string;
    description: string;
}