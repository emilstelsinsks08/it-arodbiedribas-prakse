const supabaseUrl = "https://your-project-name.supabase.co";
const supabaseKey = "sb_secret_M7433Fe7oxSkQrgOm6bZfg_ZoxIUEca"; // Izmantojiet savu anon key

async function loadMembers() {
  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/members`, {
      headers: {
        apikey: supabaseKey,
      }
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const { data } = await res.json();
    const list = document.getElementById("member-list");
    list.innerHTML = data.rows.map(m => `<li>${m.name} - ${m.status}</li>`).join("");
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

window.onload = loadMembers;
