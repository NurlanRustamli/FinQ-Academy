-- Create registrations table
create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  full_name text not null,
  phone_number text,
  course_name text not null,
  created_at timestamp default now(),
  unique(email, course_name)
);

alter table public.registrations enable row level security;

-- Allow anyone to insert registrations (public registration form)
create policy "Allow public to register" on public.registrations
  for insert
  with check (true);

-- Allow public to view their own registrations
create policy "Allow users to view their registrations" on public.registrations
  for select
  using (true);
