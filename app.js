const supabaseUrl = "https://your-supabase-url.supabase.co";
const supabaseKey = "your-anon-key";

async function loadMembers() {
  const res = await fetch(`${supabaseUrl}/rest/v1/members?select=*`, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`
    }
  });
  const data = await res.json();
  const list = document.getElementById("member-list");
  list.innerHTML = data.map(m => `<li>${m.name} - ${m.status}</li>`).join("");
}

loadMembers();
