/* ISI DI SINI: detail pembayaran milik Homineni (kosongkan jika belum ada) */
const CONFIG = {
  wa: "6282113468833",
  pay: {
    qris: "",
    transfer: ""
  }
};

const M = [
  [
    "Ayam satuan (tanpa nasi)",
    [
      [
        "Ayam Cigarian + sambal",
        "Dada saja, cheese garlic, tepung basah",
        14500,
        25000,
        "🍗",
        "img/ayam_cigarian_dada_only_sambel_ijomerah.webp"
      ],
      [
        "Ayam Cigarian Mala Mix",
        "Ayam dada dengan sambal Mala Mix",
        18500,
        25000,
        "🌶️",
        "img/ayam_cigarian_mala_mix.webp"
      ],
      [
        "Ayam Goreng Kremes Ijo",
        "Ayam + sambal merah/ijo",
        19000,
        24000,
        "🍗",
        "img/ayam_goreng_kremes_ijo.webp"
      ],
      [
        "Ayam Bakar Kecap",
        "Ayam + sambal merah/ijo",
        19000,
        24000,
        "🔥",
        "img/ayam_bakar_kecap.webp"
      ],
      [
        "Ayam Taliwang",
        "Ayam + sambal merah/ijo",
        19000,
        24000,
        "🔥",
        "img/ayam_taliwang.webp"
      ],
      [
        "Ayam Betutu",
        "Ayam + sambal merah/ijo",
        19000,
        24000,
        "🍗",
        "img/ayam_betutu.webp"
      ]
    ]
  ],

  [
    "Paket nasi",
    [
      [
        "Nasi Ayam Cigarian",
        "Nasi, ayam dada, sambal merah/ijo",
        18000,
        28000,
        "🍚",
        "img/nasi_ayam_cigarian.webp"
      ],
      [
        "Nasi Ayam Cigarian Mala Mix",
        "Nasi, ayam dada, sambal Mala Mix",
        20800,
        28000,
        "🍚",
        "img/nasi_ayam_cigarian_mala_mix.webp"
      ],
      [
        "Nasi Ayam Kremes Ijo",
        "Nasi, ayam, sambal merah/ijo",
        18000,
        32500,
        "🍚",
        "img/nasi_ayam_kremes_ijo.webp"
      ],
      [
        "Nasi Ayam Bakar Kecap",
        "Nasi, ayam bakar, sambal merah/ijo",
        18000,
        32500,
        "🍚",
        "img/nasi_ayam_bakar.webp"
      ],
      [
        "Nasi Ayam Taliwang",
        "Nasi, ayam taliwang, sambal merah/ijo",
        18000,
        32500,
        "🍚",
        "img/nasi_ayam_taliwang.webp"
      ],
      [
        "Nasi Ayam Betutu",
        "Nasi, ayam betutu, sambal, timun",
        21200,
        32500,
        "🍚",
        "img/nasi_ayam_betutu.webp"
      ]
    ]
  ],

  [
    "Paket komplit + tahu tempe",
    [
      [
        "Komplit Ayam Cigarian",
        "Nasi, ayam dada, sambal, tahu, tempe",
        23700,
        32000,
        "🍱",
        "img/komplit_ayam_cigarian.webp"
      ],
      [
        "Komplit Cigarian Mala Mix",
        "Nasi, ayam dada, sambal Mala Mix, tahu, tempe",
        23700,
        32000,
        "🍱",
        "img/komplit_cigarian_mala_mix.webp"
      ],
      [
        "Komplit Ayam Kremes Ijo",
        "Nasi, ayam, sambal, timun, tahu, tempe",
        24100,
        33000,
        "🍱",
        "img/komplit_ayam_kremes_ijo.webp"
      ],
      [
        "Komplit Ayam Bakar Kecap",
        "Nasi, ayam bakar, sambal, tahu, tempe",
        24100,
        33000,
        "🍱",
        "img/komplit_ayam_bakar_kecap.webp"
      ],
      [
        "Komplit Ayam Taliwang",
        "Nasi, ayam, sambal, timun, tahu, tempe",
        24100,
        33000,
        "🍱",
        "img/komplit_ayam_taliwang.webp"
      ],
      [
        "Komplit Ayam Betutu",
        "Nasi, ayam betutu, sambal, tahu, tempe",
        24100,
        33000,
        "🍱",
        "img/komplit_ayam_betutu.webp"
      ]
    ]
  ],

  [
    "Side dish & satuan",
    [
      [
        "Fish roll goreng",
        "1 pcs",
        4500,
        0,
        "🍢",
        "img/fish_roll_goreng.webp"
      ],
      [
        "Sosis goreng",
        "1 pcs",
        4500,
        0,
        "🌭",
        "img/sosis.webp"
      ],
      [
        "Sate kulit",
        "1 pcs",
        4500,
        0,
        "🍢",
        "img/sate_kulit.webp"
      ],
      [
        "Tahu goreng",
        "1 pcs",
        1500,
        0,
        "🟨",
        "img/tahu.webp"
      ],
      [
        "Tempe goreng",
        "1 pcs",
        1500,
        0,
        "🟫",
        "img/tempe.webp"
      ],
      [
        "Sambal / bumbu taliwang / betutu",
        "Merah, ijo, taliwang, atau betutu",
        5000,
        0,
        "🌶️",
        "img/sambal.webp"
      ],
      [
        "Nasi putih",
        "",
        6000,
        0,
        "🍚",
        "img/nasi_putih.webp"
      ]
    ]
  ],

  [
    "Minuman",
    [
      [
        "Stee 200 ml",
        "",
        5000,
        0,
        "🥤",
        "img/stee_200_ml.webp"
      ],
      [
        "Prim-A 660 ml",
        "",
        5000,
        0,
        "💧",
        "img/prim_a_660_ml.webp"
      ]
    ]
  ]
];

const rp = n => "Rp" + n.toLocaleString("id-ID");
const items = [];
const cart = {};

const galleryList = document.getElementById("menuGallery");
const orderList = document.getElementById("orderList");

M.forEach(([g, rows]) => {
  const galleryCategory = document.createElement("section");
  galleryCategory.className = "menu-category";
  galleryCategory.innerHTML =
    `<h4 class="font-serif text-lg text-or2">${g}</h4>` +
    `<div class="menu-items" role="list" aria-label="Galeri ${g}" tabindex="0"></div>`;
  galleryList.append(galleryCategory);

  const orderCategory = document.createElement("section");
  orderCategory.className = "order-category";
  orderCategory.innerHTML =
    `<h4 class="font-serif text-lg text-or2">${g}</h4>` +
    `<div class="order-items" role="list" aria-label="Pesanan ${g}" tabindex="0"></div>`;
  orderList.append(orderCategory);

  const galleryRail = galleryCategory.querySelector(".menu-items");
  const orderItems = orderCategory.querySelector(".order-items");

  rows.forEach(r => {
    const id = items.length;

    items.push({
      n: r[0],
      p: r[2]
    });

    galleryRail.insertAdjacentHTML(
      "beforeend",
      `<article class="menu-gallery-card" role="listitem">
        ${r[5]
          ? `<button
              class="menu-gallery-photo menu-image-button"
              type="button"
              data-photo="${r[5]}"
              data-name="${r[0]}"
              aria-label="Buka foto ${r[0]}"
            >
              <img src="${r[5]}" alt="" loading="lazy">
            </button>`
          : `<div class="menu-gallery-photo menu-gallery-placeholder" aria-hidden="true">${r[4]}</div>`}
        <b class="menu-gallery-name">${r[0]}</b>
      </article>`
    );
    galleryRail.lastElementChild.dataset.search =
      `${g} ${r[0]} ${r[1]}`.toLocaleLowerCase("id-ID");

    orderItems.insertAdjacentHTML(
      "beforeend",
      `<article class="order-item" role="listitem">
        ${r[5]
          ? `<img class="order-photo" src="${r[5]}" alt="" loading="lazy">`
          : `<span class="order-photo order-photo-placeholder" aria-hidden="true">${r[4]}</span>`}
        <div class="order-item-info">
          <b>${r[0]}</b>
          ${r[1] ? `<span>${r[1]}</span>` : ""}
          <div class="menu-item-price">
            ${rp(r[2])}
            ${r[3] ? `<s>${rp(r[3])}</s>` : ""}
          </div>
        </div>
        <div class="menu-item-quantity">
          <button
            class="menu-quantity-button"
            data-i="${id}"
            data-d="-1"
            aria-label="Kurangi ${r[0]}"
          >
            −
          </button>

          <em
            id="q${id}"
            class="menu-quantity"
          >
            0
          </em>

          <button
            class="menu-quantity-button"
            data-i="${id}"
            data-d="1"
            aria-label="Tambah ${r[0]}"
          >
            +
          </button>
        </div>
      </article>`
    );
    orderItems.lastElementChild.dataset.search =
      `${g} ${r[0]} ${r[1]}`.toLocaleLowerCase("id-ID");
  });
});

const menuSearch = document.getElementById("menuSearch");
const menuEmpty = document.getElementById("menuEmpty");

menuSearch.addEventListener("input", () => {
  const query = menuSearch.value.trim().toLocaleLowerCase("id-ID");

  let galleryMatches = 0;
  galleryList.querySelectorAll(".menu-category").forEach(category => {
    let categoryMatchCount = 0;

    category.querySelectorAll(".menu-gallery-card").forEach(item => {
      const matches = item.dataset.search.includes(query);
      item.hidden = !matches;
      galleryMatches += Number(matches);
      categoryMatchCount += Number(matches);
    });

    category.hidden = categoryMatchCount === 0;
  });

  orderList.querySelectorAll(".order-category").forEach(category => {
    let categoryMatchCount = 0;

    category.querySelectorAll(".order-item").forEach(item => {
      const matches = item.dataset.search.includes(query);
      item.hidden = !matches;
      categoryMatchCount += Number(matches);
    });

    category.hidden = categoryMatchCount === 0;
  });

  menuEmpty.hidden = galleryMatches !== 0;
});

const bar = document.getElementById("bar");
const dlg = document.getElementById("dlg");

function tot() {
  let c = 0;
  let t = 0;

  for (const i in cart) {
    c += cart[i];
    t += cart[i] * items[i].p;
  }

  return {
    c,
    t
  };
}

function upd() {
  const { c, t } = tot();

  bar.classList.toggle("on", c > 0);

  document.getElementById("barTxt").textContent =
    c + " item • " + rp(t);

  items.forEach((_, i) => {
    document.getElementById("q" + i).textContent = cart[i] || 0;
  });

  document.getElementById("sum").innerHTML =
    Object.keys(cart)
      .map(
        i =>
          `<div>
            <span>${cart[i]}x ${items[i].n}</span>
            <span>${rp(cart[i] * items[i].p)}</span>
          </div>`
      )
      .join("") +
    `<div class="tot">
      <span>Subtotal</span>
      <span>${rp(t)}</span>
    </div>
    <div>
      <span>Ongkir</span>
      <span>Dihitung admin</span>
    </div>`;
}

galleryList.addEventListener("click", e => {
  const photoButton = e.target.closest("button[data-photo]");

  if (photoButton) {
    const photoDialog = document.getElementById("menuPhotoDialog");
    const photoPreview = document.getElementById("menuPhotoPreview");

    photoPreview.src = photoButton.dataset.photo;
    photoPreview.alt = `Foto ${photoButton.dataset.name}`;
    document.getElementById("menuPhotoCaption").textContent =
      photoButton.dataset.name;
    photoDialog.showModal();
  }
});

orderList.addEventListener("click", e => {

  const b = e.target.closest("button[data-i]");

  if (!b) return;

  const i = b.dataset.i;
  const q = Math.max(
    0,
    (cart[i] || 0) + Number(b.dataset.d)
  );

  if (q) {
    cart[i] = q;
  } else {
    delete cart[i];
  }

  upd();
});

document.getElementById("closeMenuPhoto").addEventListener("click", () => {
  document.getElementById("menuPhotoDialog").close();
});

function pinfo() {
  const v = document.getElementById("py").value;
  const d = CONFIG.pay[v];

  document.getElementById("pinfo").textContent =
    v === "cod"
      ? "Bayar tunai saat pesanan diambil atau tiba."
      : d
      ? d
      : "Detail " +
        (v === "qris" ? "QRIS" : "rekening") +
        " akan dikirim admin lewat WhatsApp setelah pesanan diterima.";
}

document.getElementById("py").onchange = pinfo;
pinfo();

document.getElementById("mt").onchange = e => {
  const d = e.target.value === "Diantar";

  document.getElementById("adr").hidden = !d;
  document.getElementById("al").required = d;
};

document.getElementById("openCo").onclick = () => {
  upd();

  document.getElementById("co").hidden = false;
  document.getElementById("done").hidden = true;
  document.getElementById("cp").textContent = "Salin pesanan";

  dlg.showModal();
};

document.getElementById("cls").onclick = () => dlg.close();

function buildMsg() {
  const { t } = tot();

  const py = {
    qris: "QRIS",
    transfer: "Transfer bank",
    cod: "Bayar di tempat"
  }[document.getElementById("py").value];

  const v = id =>
    document.getElementById(id).value.trim();

  let m =
    "Halo Homineni, saya mau pesan:\n" +
    Object.keys(cart)
      .map(
        i =>
          `- ${cart[i]}x ${items[i].n} (${rp(
            cart[i] * items[i].p
          )})`
      )
      .join("\n") +
    `\n\nSubtotal: ${rp(t)} (belum termasuk ongkir)` +
    `\nNama: ${v("nm")}` +
    `\nWhatsApp: ${v("hp")}` +
    `\nPengambilan: ${v("mt")}`;

  if (v("mt") === "Diantar") {
    m += "\nAlamat: " + v("al");
  }

  m += "\nPembayaran: " + py;

  if (v("ct")) {
    m += "\nCatatan: " + v("ct");
  }

  return m;
}

document.getElementById("co").onsubmit = e => {
  e.preventDefault();

  if (tot().t) {
    showDone(buildMsg());
  }
};

document.getElementById("send").onclick = e => {
  const f = document.getElementById("co");

  if (!f.checkValidity()) {
    e.preventDefault();
    f.reportValidity();
    return;
  }

  if (!tot().t) {
    e.preventDefault();
    return;
  }

  const m = buildMsg();

  e.currentTarget.href =
    "https://wa.me/" +
    CONFIG.wa +
    "?text=" +
    encodeURIComponent(m);

  setTimeout(() => showDone(m), 1500);
};

function showDone(m) {
  const q = encodeURIComponent(m);

  document.getElementById("co").hidden = true;
  document.getElementById("done").hidden = false;

  document.getElementById("wa1").href =
    "https://api.whatsapp.com/send?phone=" +
    CONFIG.wa +
    "&text=" +
    q;

  document.getElementById("wa2").href =
    "https://web.whatsapp.com/send?phone=" +
    CONFIG.wa +
    "&text=" +
    q;

  document.getElementById("wan").textContent =
    "+" + CONFIG.wa.replace(/^62/, "62 ");

  document.getElementById("msg").value = m;
}

document.getElementById("cp").onclick = async () => {
  const t = document.getElementById("msg");

  try {
    await navigator.clipboard.writeText(t.value);
  } catch (e) {
    t.select();
    document.execCommand("copy");
  }

  document.getElementById("cp").textContent = "Tersalin";
};

const featureCarousel = document.getElementById("featureCarousel");

if (featureCarousel) {
  const featureTrack = featureCarousel.querySelector(".feature-track");
  const featureViewport = featureCarousel.querySelector(".feature-viewport");
  const featureSlides = [...featureTrack.children];
  const featureDots = featureCarousel.querySelector(".feature-dots");
  const featureStatus = document.getElementById("featureStatus");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobileCarousel = window.matchMedia("(max-width: 600px)");
  let currentFeature = 0;
  let autoplayTimer;
  let scrollTimer;

  featureSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "feature-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Tampilkan slide ${index + 1}`);
    dot.addEventListener("click", () => showFeature(index));
    featureDots.append(dot);
  });

  const featureDotButtons = [...featureDots.children];

  function updateFeatureState() {
    featureSlides.forEach((slide, slideIndex) => {
      const isCurrent = slideIndex === currentFeature;
      slide.setAttribute("aria-hidden", String(!isCurrent));
      slide.inert = !isCurrent;
    });

    featureDotButtons.forEach((dot, dotIndex) => {
      dot.setAttribute("aria-current", String(dotIndex === currentFeature));
    });

    featureStatus.textContent = `Slide ${currentFeature + 1} dari ${featureSlides.length}`;
  }

  function showFeature(index) {
    currentFeature = (index + featureSlides.length) % featureSlides.length;

    if (mobileCarousel.matches) {
      featureTrack.style.transform = "none";
      featureViewport.scrollTo({
        left: currentFeature * featureViewport.clientWidth,
        behavior: reducedMotion.matches ? "auto" : "smooth"
      });
    } else {
      featureTrack.style.transform = `translateX(-${currentFeature * 100}%)`;
    }

    updateFeatureState();
  }

  function syncFeatureFromSwipe() {
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      if (!mobileCarousel.matches || !featureViewport.clientWidth) return;

      const slideIndex = Math.round(
        featureViewport.scrollLeft / featureViewport.clientWidth
      );

      if (slideIndex >= 0 && slideIndex < featureSlides.length) {
        currentFeature = slideIndex;
        updateFeatureState();
      }
    }, 80);
  }

  function stopAutoplay() {
    window.clearInterval(autoplayTimer);
  }

  function startAutoplay() {
    stopAutoplay();
    if (!reducedMotion.matches && !document.hidden) {
      autoplayTimer = window.setInterval(
        () => showFeature(currentFeature + 1),
        5000
      );
    }
  }

  featureCarousel.querySelectorAll("[data-feature-direction]").forEach(button => {
    button.addEventListener("click", () => {
      showFeature(currentFeature + Number(button.dataset.featureDirection));
    });
  });

  featureCarousel.addEventListener("mouseenter", stopAutoplay);
  featureCarousel.addEventListener("mouseleave", startAutoplay);
  featureCarousel.addEventListener("focusin", stopAutoplay);
  featureCarousel.addEventListener("focusout", event => {
    if (!featureCarousel.contains(event.relatedTarget)) startAutoplay();
  });
  featureViewport.addEventListener("scroll", syncFeatureFromSwipe, { passive: true });
  window.addEventListener("resize", () => showFeature(currentFeature));
  document.addEventListener("visibilitychange", startAutoplay);
  reducedMotion.addEventListener("change", startAutoplay);

  showFeature(0);
  startAutoplay();

  if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("has-motion");
    const featureObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        document.querySelector(".feature-content").classList.add("is-visible");
        featureObserver.disconnect();
      }
    }, { threshold: 0.15 });
    featureObserver.observe(document.querySelector("#features"));

    const menuContent = document.querySelector(".menu-content");
    const menuObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        menuContent.classList.add("is-visible");
        menuObserver.disconnect();
      }
    }, { threshold: 0.12 });
    menuObserver.observe(menuContent);
  }
}