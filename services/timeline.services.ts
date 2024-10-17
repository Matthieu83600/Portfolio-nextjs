import supabase from '@/lib/supabaseClient';
import { TimelineItem } from '@/types/timeline.types';

export const fetchTimeline = async () => {
  try {
    const { data: timeline, error } = await supabase
      .from('timeline')
      .select('*');
    if (error) throw error;
    return timeline.sort((a, b) => b.time - a.time);
  } catch (error) {
    throw error;
  }
};

export const createTimelineItem = async (item: TimelineItem) => {
  try {
    const { data, error } = await supabase
      .from('timeline')
      .insert([{ time: item.time, text: item.text }])
      .select();
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};
