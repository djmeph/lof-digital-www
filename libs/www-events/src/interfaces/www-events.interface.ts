import { DayOfWeek, EventRecurrance } from './www-events.enum';

export interface EventTime {
  event_time_id: number;
  starting: string;
  ending: string;
  day_of_week: DayOfWeek;
  all_day: boolean;
}

export interface WwwEvent {
  event_id: number;
  title: string;
  event_description: string;
  site_id: null;
  hosting_location: string;
  event_recurrence: EventRecurrance;
  heart_count: number;
  alcohol: boolean;
  red_light: boolean;
  fire_art: boolean;
  spectacle: boolean;
  crafting: boolean;
  food: boolean;
  sober: boolean;
  event_times: EventTime[];
}

export interface WwwEventSingleTime extends WwwEvent {
  eventTime: EventTime;
}

export interface DataCoalesce {
  coalesce: WwwEvent[];
}

export interface ArtItem {
  id: string;
  type: string;
  artist: string;
  title: string;
  description: string;
}

export interface ArtFeed {
  art: ArtItem[];
}

export interface RadioItem {
  id: string;
  radio_day: string;
  radio_time: string;
  radio_dj_name: string;
  radio_description: string;
}

export interface RadioFeed {
  radio: RadioItem[];
}

export interface CampItem {
  id: string;
  name: string;
  neighborhood: string;
  description: string;
  site: string;
}

export interface CampsFeed {
  camps: CampItem[];
}

export interface VehicleItem {
  id: string;
  title: string;
  description: string;
}

export interface VehiclesFeed {
  vehicles: VehicleItem[];
}

export interface staticFeeds
  extends ArtFeed,
    RadioFeed,
    CampsFeed,
    VehiclesFeed {}

export interface MainFeed
  extends DataCoalesce,
    ArtFeed,
    RadioFeed,
    CampsFeed,
    VehiclesFeed {}
