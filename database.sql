-- Create mosques table
CREATE TABLE mosques (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  location TEXT,
  image_url TEXT[], -- Changed from image_url to images array
  opening_times TEXT,
  activities TEXT[],
  social_media JSONB,
  is_holy_place BOOLEAN DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE mosques ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access" ON mosques
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to insert" ON mosques
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to update" ON mosques
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to delete" ON mosques
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_mosques_updated_at
  BEFORE UPDATE ON mosques
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

-- If you need to modify an existing table, run this:
-- ALTER TABLE mosques 
--   DROP COLUMN IF EXISTS image_url,
--   ADD COLUMN IF NOT EXISTS images TEXT[];