export function startSaveTheDate(): void {
  const CONFIG = {
    names: ["Meryl", "Joshua"],
    date: "2027-05-01T14:00:00+08:00",
    location: "Bacolod City",
    note: "Formal Invitation To Follow",
  };

  const target = new Date(CONFIG.date).getTime();

  const $ = (id: string) => document.getElementById(id) as HTMLElement;

  $("when").textContent = new Date(CONFIG.date).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  $("where").textContent = CONFIG.location;
  $("note").textContent = CONFIG.note;
  document.title = `Save the date: ${CONFIG.names.join(" & ")}`;

  const pad = (n: number) => String(n).padStart(2, "0");

  function tick(): void {
    const diff = target - Date.now();

    if (diff <= 0) {
      $("countdown").textContent = CONFIG.doneMessage;
      $("countdown").classList.add("done");
      clearInterval(timer);
      return;
    }

    const s = Math.floor(diff / 1000);
    $("days").textContent = String(Math.floor(s / 86400));
    $("hours").textContent = pad(Math.floor((s % 86400) / 3600));
    $("minutes").textContent = pad(Math.floor((s % 3600) / 60));
    $("seconds").textContent = pad(s % 60);
  }

  const timer = setInterval(tick, 1000);
  tick();
}
