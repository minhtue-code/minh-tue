setInterval(() => {
  const time1 = new Date(`2026-01-01 00:00:00`);
  const time2 = new Date();
  const time3 = time1 - time2;
  const days = Math.floor(time3 / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time3 % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time3 % (1000 * 60)) / 1000);
  let content = `Còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây là đến Tết 2026`;
  document.body.innerHTML = content;
}, 1000);
