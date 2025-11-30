const { createClient } = require('@supabase/supabase-js')
require('dotenv').config();

const supabase = createClient(process.sb_publishable_Wp55Nqkf3pgVJv70xCkq8g_bASOAqfH, process.env.sb_secret_M7433Fe7oxSkQrgOm6bZfg_ZoxIUEca);

async function loadMembers() {
  try {
    const { data: { rows }, error } = await supabase.from('members').select('*');
    if (error) {
      console.error('Error loading members:', error);
    } else {
      const list = document.getElementById("member-list");
      list.innerHTML = rows.map(m => `<li>${m.name} - ${m.status}</li>`).join("");
    }
  } catch (error) {
    console.error('Error loading members:', error);
  }
}

window.onload = loadMembers;
