const { SUPABASE_KEY } = require('./Private/SUPABASE_KEY.js');
const Supabase = require('@supabase/supabase-js');
const supabaseUrl = 'https://dxlakcttkbzffaoyanvn.supabase.co';
const supabaseKey = SUPABASE_KEY;
const supabase = Supabase.createClient(supabaseUrl, supabaseKey);

exports.supabase = {
  supabase
  
}