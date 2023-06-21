import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://vfdhvkorrofkryaqkvsl.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmZGh2a29ycm9ma3J5YXFrdnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyMDQ0OTQsImV4cCI6MjAwMjc4MDQ5NH0.Lj0YMPb-1tJD6JdtyFzBNuG3MxI72BV7cu1EudyBPdg";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
