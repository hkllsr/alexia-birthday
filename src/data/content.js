// ============================================================
//  EDIT EVERYTHING HERE. No other file needs to change.
//  Image/audio paths are relative to the /public folder
//  (do NOT start them with a slash).
// ============================================================

export const content = {
  name: 'Alexia Anindi',
  siteTitle: 'Dear Alexia',

  // Put your song in public/audio/ and change the filename here.
  music: { file: 'audio/our-song.mp3', title: 'The Beatles - Here, There and Everywhere' },

  opening: {
    to: 'To my favorite person,',
    line: 'A little place where I keep the moments I never want to forget.',
    button: 'Open our little journey ♡',
  },

  hero: {
    eyebrow: 'for my sweetest girl',
    heading: 'Happy Birthday, My Love.',
    quote: 'Out of all the moments life could have given me, I’m grateful that some of them led me to you.',
    paragraphs: [
      'Selamat ulang tahun, sayangku! Selamat bertambah satu tahun! Makasih banyak ya udah hadir di hidup aku. Thank you for making my world a little brighter, a little warmer, and so much more colorful just by being in it.',
      'Kayaknya segini aja dulu kata sambutannya, hehehe. Sekarang scroll aja pelan-pelan ya sayang, take your time. I made this little things with my pure love ♡',    ],
  },

  // Add / remove / reorder objects freely. "image" is optional (a placeholder shows if the file is missing).
  timeline: [
    { date: 'The very beginning', title: 'The Beginning',
      story: 'The beginning of something beautiful. I didn’t know yet how much room you would take up in my heart, and how glad I would be about it.',
      quote: 'Some stories start quietly. or maybe.. it start in vidcall every night..', image: 'images/memories/beginning.jpg' },
    { date: '7 July 2026', title: 'Our First Date',
      story: 'Lucunya, di first date ini kita malah langsung kayak orang yang udah kenal lama. Ngga ada jaim-jaiman. Everything just felt so natural, bahkan sampe makanan kamu loncat ke celana aku HAHAHAHAHA.',
      quote: 'It felt like we had known each other for a long time.', image: 'images/memories/first-date.jpg' },
    { date: '25 July 2026', title: 'Our First Concert Together',
      story: 'Ini first time kita ngonser bareng, pacarku mostly juga gatau lagu-lagunya sih, tapi i love how her wanna enjoying this show with me eventho she’s doesn’t know most of the songs.',
      quote: '', image: 'images/memories/adventures.jpg' },
    { date: 'every single night', title: 'Ordinary Days, But I Start to Love It',
      story: 'kalo ditanya "apa small everyday moments that you wish you could experience over and over again?" ya pasti feel pas pertama kali vidcall sama kamu sih, i didn’t know that i will love vidcall everynight this much haha.',
      quote: 'Ordinary, but with you.', image: 'images/memories/ordinary-days.jpg' },
    { date: 'Semoga cerita seru kita terus bertambah, seperti usia kamu di hari kamu buka website ini', title: 'More Chapters to Come',
      story: 'A reminder that our story is still being written, and I want to be there for every page.',
      quote: '', image: 'images/memories/more-chapters.jpg' },
  ],

  // ratio: '3/4' (tall), '1/1' (square), '4/3' (wide). date is optional.
  gallery: [
    { image: 'images/memories/first-date.jpg', title: 'our first date', description: 'the day we forgot about everything else.', date: '', ratio: '3/4' },
    { image: 'images/memories/smile.jpg', title: 'my favorite smile', description: 'your beautiful smile, one that you probably don’t know I still remember to this day.', date: '', ratio: '1/1' },
    { image: 'images/memories/ordinary-days.jpg', title: 'an ordinary day', description: 'another ordinary day with my favorite person.', date: '', ratio: '4/3' },
    { image: 'images/memories/wish.jpg', title: 'a moment to live in again', description: 'the first time i give you something that you really wanted.', date: '', ratio: '3/4' },
    { image: 'images/memories/sleep.jpg', title: 'a place to feel safe', description: 'even on days when you weren’t feeling well, you still let me stay. and somehow, watching you fall asleep on the other side of the screen made me feel needed in a way I can’t quite explain.', date: '', ratio: '4/3' },
    { image: 'images/memories/fav.jpg', title: 'i just like it', description: 'i honestly don’t know what it is about this picture. i just know that i could look at it over and over again, and somehow, you never get any less beautiful to me.', date: '', ratio: '1/1' },
  ],

  poems: [
    { title: 'In Every Lifetime, I’d Still Look for You', mood: 'I',
      lines: [
        'Dari sekian banyak kemungkinan yang bisa terjadi,',
        'dari sekian banyak jalan yang mungkin kita lalui,',
        'entah bagaimana, hidup membawaku kepadamu.',
        '',
        'Aku tidak tahu berapa banyak hari',
        'yang masih disediakan hidup untuk kita.',
        'Tidak tahu pula ke mana waktu akan membawa,',
        'atau berapa banyak hal yang kelak harus berubah.',
        '',
        'Jika hidup memang hanya sekali,',
        'aku senang pernah menghabiskan sebagian darinya',
        'untuk mengenal seseorang sepertimu.',
        '',
        'Di kehidupan mana pun, dengan nama apa pun,',
        'in whatever shape the world decides to give us,',
        'aku akan tetap berhenti di depan pintumu,',
        'and choose you, again, and again, and again.',
      ] },
    { title: 'The Art of Loving You', mood: 'II',
      lines: [
        'Aku tak punya banyak.',
        'Yang kupunya hanyalah waktu yang selalu kusempatkan,',
        'sepasang telinga yang siap mendengarkan,',
        'bahu berisi tulang-belulang yang mungkin tak nyaman untuk kau sandarkan,',
        'dan hati yang tak pernah menghitung berapa kali harus tinggal.',
        '',
        'Aku suka bagian dirimu yang bersinar,',
        'tapi aku jatuh cinta pada bagian yang biasa juga,',
        'the tired eyes, the quiet moods,',
        'the small things your face does when you forget I’m watching.',
        '',
        'Mungkin mencintai itu bukan soal sempurna.',
        'Aku mungkin tidak selalu punya jawaban,',
        'tidak selalu tahu bagaimana menyelesaikan keadaan.',
        'Tapi semoga kau tahu,',
        'di antara segala keterbatasan,',
        'ada seseorang yang selalu ingin mengusahakan.'
      ] },
    { title: 'If Time Could Keep a Secret', mood: 'III',
      lines: [
        'Andai waktu bisa menyimpan rahasia,',
        'Aku ingin mengatakan kepadanya bahwa Aku harap Engkau tidak benar-benar menginginkan masa depan.',
        'Aku tidak ingin Engkau terus dihantui olehnya,',
        'hingga lupa untuk menjalani hidup di hari ini sebagaimana mestinya, sesuai dengan apa yang Engkau inginkan.',
        '',
        'Aku harap kamu ngga terlalu sibuk menanti esok, sayang.',
        'Aku harap kamu bisa selalu menikmati hal-hal kecil yang kamu punya,',
        'obrolan harian kita yang ga seru-seru amat,',
        'pemberian-pemberian kecil dariku yang tidak sebegitu berharganya,',
        'dan, semoga—hadirnya Aku pun bisa menjadi salah satu hal kecil yang kamu syukuri.',
        '',
        'Tapi kalau pun suatu hari semuanya hanya berakhir menjadi kenangan,',
        'I am grateful, sayang,',
        'for a life with moments worth missing.',
      ] },
    { title: 'Untukmu, Yang Sedang Bertambah Usia', mood: 'IV',
      lines: [
        'Selamat ya sayang, sudah berhasil bertahan lagi di tahun ini.',
        'Dengan segala yang membuatmu tumbuh, juga segala yang diam-diam membuatmu rapuh.',
        'Terima kasih telah lahir dan terus menjalani hidup hingga hari ini, sayang.',
        '',
        'Aku berdoa dan berharap, di hari kelahiranmu ini.',
        'Semoga kamu ngga pernah kehilangan keberanian untuk selalu mencoba, gagal, lalu memulainya kembali.',
        'Semoga semua yang pernah menghancurkanmu, aku, ataupun kita, bisa memberikan jalan yang terang dan hangat kepadamu.',
        'Semoga dunia tidak terlalu keras kepadamu,',
        'dan jika memang demikian,',
        'semoga kau tak ikut keras pada dirimu sendiri.',
        '',
        'Selamat bertambah usia ya, Alexia.',
        'Aku yakin masih banyak hal yang akan kamu temui sayang,',
        'dan aku berharap bisa ikut menyaksikan',
        'sebagian besar di antaranya.'

      ] },
  ],

  letter: {
    button: 'Read me',
    greeting: 'Untuk Alexia, sayangku.',
    paragraphs: [
      'Happy birthday, sayang. Hari ini umur kamu nambah satu tahun lagi nihh, selamat ya sayang udah menyandang status legal HAHAHHAHA',
      'Aku yakin udah banyak banget hal yang kamu alami dan lalui untuk sampai di titik ini, by. Pasti ada hal-hal yang menguji kesabaran, ketenangan, dan hal-hal yang ga sempet kamu ceritain ke siapapun. Untuk segala hal yang udah kamu lewatin, aku harap kamu bisa sedikit bangga sama diri kamu sendiri karena udah berjalan sejauh ini.',
      'Sejujurnya aku bersyukur banget bisa membersamai kamu di waktu yang belum lama ini. Aku sampe lupa gimana hidupku berjalan sebelumnya, mungkin seru juga sih, cuma setidaknya untuk hari ini (dan semoga seterusnya) aku punya kamu yang selalu hadir dan tetep seru juga kok.',
      'Aku gapunya banyak yg bisa dikasih ke kamu, atau bahkan gaada sama sekali by. Aku juga bukan orang yang selalu tau harus berbuat apa dan melakukan apa saat ada suatu hal yang ga berjalan sebagaimana mestinya. Walaupun mungkin ini gaada nilainya, setidaknya aku punya waktu yang selalu ingin aku sisihkan buat kamu, telinga yang selalu ingin denger cerita kamu, dan hati yang masiih ingin terus belajar memahami dirimu. Semoga hal-hal sederhana itu cukup untuk membuatmu tau bahwa kamu tidak sedang menjalani semua ini sendirian.',
      'Untuk tahun-tahun yang akan datang, aku ga ingin terlalu banyak menjanjikan sesuatu yang belum tentu bisa aku berikan dan kendalikan. Aku cuma berharap semoga kita masih diberi kesempatan untuk tumbuh, memperbaiki diri, menghadapi hal-hal yang belum kita temuin solusinya, dan merayakan hal-hal kecil yang mungkin sering kita sepelein.',
      'Selamat bertambah usia, Alexia. Semoga dunia mempertemukanmu dengan lebih banyak hal baik dan hidup yang kau dambakan. Semoga kamu selalu punya alasan untuk tersenyum, keberanian untuk mencoba, dan tempat untuk beristirahat ketika dunia sedang terasa terlalu bising untukmu.',
      'Terima kasih banyak udah jadi bagian dari perjalanan hidupku ya, sayang. Dari sekian banyak hal yang belum bisa aku pastikan tentang masa depan, baik terkait seberapa cerah dunia akan menerangiku ataupun seberapa kuat badai akan menerjangku, seenggaknya aku tau satu hal, yaitu aku bahagia bisa mengenalmu sejauh ini.'
    ],
    signoff: 'With all my love,',
    from: 'Haikal ♡',
  },

  loves: [
    'Your smile, especially when you don’t realize I’m looking.',
    'The way you make ordinary conversations feel special.',
    'Your act especially when you "kepencet emot".',
    'The comfort of simply being around you.',
    'The little things you probably don’t realize I remember.',
    'Keberanian kamu untuk speak up terkait hal-hal yang bikin kamu ga nyaman.',
    'How you feel like home.',
    'You, just you.',
  ],

  closing: {
    heading: 'Happy Birthday, Alexia Anindi!',
    message: 'This website is only a small collection of moments. The memories I want to make with you are still countless, and I can’t wait for every one of them.',
    final: 'I love you, sayangku. Yesterday, today, tomorrow, and in all the little moments in between.',
    replay: 'Replay? Seems like you loved this page',
  },
}
