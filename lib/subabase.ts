import { createClient } from "@supabase/supabase-js"

const url = process.env
	.NEXT_PUBLIC_SUPABASE_URL as string
const key = process.env
	.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if (!url || !key)
	throw new Error("Missing Supabase env vars")

// Client-side client
export const supabase = createClient(url, key)
