// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://awaujpaqxfxzmsxhwpdq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3YXVqcGFxeGZ4em1zeGh3cGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4ODYxODcsImV4cCI6MjA1ODQ2MjE4N30.lX617Eoc-FARQoQaEy_OSnBXlpZOEveAWAnD3VMo0pA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);