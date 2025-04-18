    // Show/hide tombol saat scroll
    window.onscroll = function () {
        const btn = document.getElementById("backToTopBtn");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          btn.style.display = "block";
        } else {
          btn.style.display = "none";
        }
      };
    
      // Scroll ke atas dengan animasi
      document.getElementById("backToTopBtn").addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });