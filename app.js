// Izmanto Supabase JS klienta bibliotēku
const { createClient } = require('@supabase/supabase-js');

// Ielādēt vērtības no .env faila vai izmantot īstās vērtības
const supabaseUrl = import.meta.env.SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY || 'sb_secret_M7433Fe7oxSkQrgOm6bZfg_ZoxIUEca';

// Izveidot Supabase klienta instanci
const supabase = createClient(supabaseUrl, supabaseKey);

// Funkcija, kas ielādē biedru datus un atjaunina DOM
async function loadMembers() {
  try {
    // Nolasa datus no Supabase
    const { data: { rows }, error } = await supabase.from('members').select('*');
    if (error) {
      console.error('Error loading members:', error);
      return;
    }

    // Atjaunina DOM ar ielādētajiem datiem
    const list = document.getElementById("member-list");
    list.innerHTML = rows.map(m => `<li>${m.name} - ${m.status}</li>`).join("");
  } catch (error) {
    console.error('Error loading members:', error);
  }
}

// Izpildiet funkciju, kad lapa ir pilnībā ielādēta
window.onload = loadMembers;
