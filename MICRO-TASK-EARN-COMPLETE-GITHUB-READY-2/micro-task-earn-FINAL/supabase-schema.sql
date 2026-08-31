-- Bismillah - Phase 1 Database Schema DONE
-- Supabase SQL Editor me ye pura paste karke RUN karo

-- 1. Users table
create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  balance decimal(10,2) default 0.00,
  binance_address text,
  created_at timestamp default now()
);

-- 2. Campaigns table
create table public.campaigns (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  total_budget decimal(10,2) not null,
  per_task_reward decimal(10,2) not null,
  remaining_budget decimal(10,2) not null,
  status text default 'active',
  created_by uuid references public.users(id),
  created_at timestamp default now()
);

-- 3. Micro_Tasks table
create table public.micro_tasks (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid references public.campaigns(id) on delete cascade,
  title text not null,
  instructions text not null,
  reward decimal(10,2) not null,
  status text default 'open',
  created_at timestamp default now()
);

-- 4. Submissions table
create table public.submissions (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references public.micro_tasks(id) on delete cascade,
  user_id uuid references public.users(id) on delete cascade,
  proof_type text, -- 'screenshot' or 'text'
  proof_url text,
  proof_text text,
  status text default 'pending', -- pending, approved, rejected
  created_at timestamp default now()
);

-- 5. Payouts table
create table public.payouts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  amount decimal(10,2) not null,
  binance_address text not null,
  status text default 'pending', -- pending, completed, rejected
  created_at timestamp default now()
);

-- Enable RLS
alter table public.users enable row level security;
alter table public.campaigns enable row level security;
alter table public.micro_tasks enable row level security;
alter table public.submissions enable row level security;
alter table public.payouts enable row level security;

-- Policies (basic open for now, baad me secure karenge)
create policy "public read" on public.micro_tasks for select using (true);
create policy "public read" on public.campaigns for select using (true);