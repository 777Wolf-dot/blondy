// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yxqyvzlyffxflezxkqew.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4cXl2emx5ZmZ4ZmxlenhrcWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NjYyMTcsImV4cCI6MjA2OTU0MjIxN30.e6SV7j4hViODUD2zPQWaUcxVxuHwJ_JnofMT-yeXGFw';
export const supabase = createClient(supabaseUrl, supabaseKey);
