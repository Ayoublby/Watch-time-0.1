const movies = [
    { title: "Kate", description: "يدس سم قاتل لمغتالة قاسية تعمل في 'طوكيو' خلال مهمتها الأخيرة ... ولديها أقل من أربع وعشرين ساعة لتعرف من أمر بقتلها لتذيقه أمر الانتقام.", genre: "أكشن, إثارة", image: "kate.jpg", link: "https://t.me/anas52ly/1128", type: "movie" },
    { title: "Sting", description: "بعد تربية عنكبوت موهوب بشكل مثير للقلق في السر، يجب على شارلوت البالغة من العمر 12 عامًا مواجهة الحقائق المتعلقة بحيوانها الأليف - والكفاح من أجل بقاء عائلتها - عندما يتحول المخلوق الذي كان ساحرًا في السابق بسرعة إلى وحش عملاق يأكل اللحم.", genre: "رعب, إثارة, خيال علمي", image: "Sting.jpg", link: "https://t.me/anas52ly/1251", type: "movie" },
    { title: "GoodFellas (1990)", description: "يروي الفيلم قصة هنري هيل، وهو رجل شاب من الطبقة العاملة ينجذب إلى عالم الچريمة المنظمة...", genre: "جريمة, دراما", image: "IMG_20250307_010933_435.jpg", link: "https://t.me/anas52ly/1243", type: "movie" },
    
    { title: "Pulp Fiction (1994)", description: "تتبع عدة قصص تتألف من أحداث متشابكة تُروى بشكل غير خطي، تدور حول عالم الجريمة والعنف...", genre: "جريمة, دراما", image: "IMG_20250307_011150_920.jpg", link: "https://t.me/anas52ly/1255", type: "movie" },
    { title: "Drive (2011)", description: "يتعرف على جارته (إيرين)، ويقع في حبها، ولكن بعد موت زوجها يسعى إلى مساعدتها ليضمن لها حياة كريمة وآمنة.", genre: "أكشن, دراما, جريمة", image: "Drive 2011.jpg", link: "https://t.me/anas52ly/1132", type: "movie" },
    { title: "Nobody (2021)", description: "في إطار من الحركة والتشويق، يمد رجل من أحد المارة يد العون والمساعدة لامرأة تتعرض للضرب والتحرش...", genre: "أكشن, جريمة, إثارة", image: "nobody.jpg", link: "https://t.me/anas52ly/1134", type: "movie" },
    { title: "Dune: Part One (2021)", description: "يجد ابن من عائلة نبيلة نفسه مطالبًا بالانتقام لوفاة والده من جانب، وحماية كوكبه من قوى الشر...", genre: "أكشن, خيال علمي", image: "Dune_Part One (2021).jpg", link: "https://t.me/anas52ly/1296", type: "movie" },
    { title: "Dune: Part Two (2024)", description: "يتحد بول أتريدس مع شاني وفريمن للانتقام من المتآمرين الذين دمروا عائلته...", genre: "أكشن, خيال علمي", image: "Dune_Part Two (2024).jpg", link: "https://t.me/anas52ly/1298", type: "movie" },
    { title: "Pearl", description: "بيرل محاصرة في مزرعة معزولة، ويجب أن تعتني بوالدها المريض تحت مراقبة والدتها...", genre: "رعب, دراما", image: "IMG_20250307_004904_139.jpg", link: "https://t.me/anas52ly/1031", type: "movie" },
    { title: "The Dark Knight (2008)", description: "يستكمل باتمان حربه ضد الجريمة في مدينة جوثام، لكنه يواجه تهديدًا جديدًا من الجوكر...", genre: "أكشن, جريمة, دراما", image: "IMG_20250307_012625_723.jpg", link: "https://t.me/anas52ly/1138", type: "movie" },
    { title: "House of the Dragon", description: "تدور الأحداث حول حرب أهلية طاحنة داخل عائلة التارجارين، قبل 200 عام من أحداث 'Game of Thrones'...", genre: "دراما, خيال, مغامرة", image: "IMG_20250307_012958_589.jpg", episodes: [ 
        { episode: 1, link: "https://t.me/anas52ly/1141" },
        { episode: 2, link: "https://t.me/anas52ly/1142" },
        { episode: 3, link: "https://t.me/anas52ly/1143" },
        { episode: 4, link: "https://t.me/anas52ly/1144" },
        { episode: 5, link: "https://t.me/anas52ly/1145" },
        { episode: 6, link: "https://t.me/anas52ly/1146" },
        { episode: 7, link: "https://t.me/anas52ly/1147" },
        { episode: 8, link: "https://t.me/anas52ly/1148" },
        { episode: 9, link: "https://t.me/anas52ly/1149" },
        { episode: 10, link: "https://t.me/anas52ly/1150" }
    ], type: "series" },
    {
        title: "Stranger Things",
        description: "في بلدة هوكينز خلال الثمانينيات، يختفي صبي يُدعى ويل بايرز في ظروف غامضة، مما يكشف عن تجارب حكومية سرية وعالم موازٍ مخيف. تساعد فتاة غامضة ذات قدرات عقلية خارقة أصدقاءه وعائلته في البحث عنه، بينما تواجه البلدة تهديدات خارقة للطبيعة.",
        genre: "رعب, دراما, خيال علمي",
        image: "Strange things1.jpg",
        episodes: [ 
            { episode: 1, link: "https://t.me/anas52ly/1080" }, 
            { episode: 2, link: "https://t.me/anas52ly/1081" }, 
            { episode: 3, link: "https://t.me/anas52ly/1082" }, 
            { episode: 4, link: "https://t.me/anas52ly/1084" }, 
            { episode: 5, link: "https://t.me/anas52ly/1085" }, 
            { episode: 6, link: "https://t.me/anas52ly/1086" }, 
            { episode: 7, link: "https://t.me/anas52ly/1087" }, 
            { episode: 8, link: "https://t.me/anas52ly/1088" } 
        ], type: "series"
    },
    {
        title: "Interstellar",
        description: "فيلم خيال علمي من إخراج كريستوفر نولان، يتبع فريقًا من رواد الفضاء يسافرون عبر ثقب دودي للبحث عن كوكب جديد صالح للحياة بعد أن أصبحت الأرض على وشك الانهيار.",
        genre: "خيال علمي, دراما",
        image: "IMG_20250307_150529_817.jpg",
        link: "https://t.me/anas52ly/1489",
        type: "movie"
    },
    {
        title: "Brothers (2009)",
        description: "بعد اعتقاد الجميع بوفاة (سام) في أفغانستان، يعتني شقيقه (تومي) بزوجته وأبنائه. يعود (سام) من الأسر محطماً ويشك في وجود علاقة بين أخيه وزوجته.",
        genre: "دراما, حرب",
        image: "IMG_20250307_161659_419.jpg",
        link: "https://t.me/anas52ly/1468",
        type: "movie"
    },
    {
        title: "Basketball Diaries (1995)",
        description: "قصة مراهق موهوب في كرة السلة يسقط في هاوية الإدمان على المخدرات بسبب صدمات الحياة، ويحاول صديقه مساعدته على التعافي.",
        genre: "جريمة, دراما, سيرة ذاتية",
        image: "IMG_20250307_162217_591.jpg",
        link: "https://t.me/anas52ly/1391",
        type: "movie"
    },
    {
        title: "A Quiet Place (2018)",
        description: "أسرة صغيرة تعيش في صمت تام لتجنب كائنات مخيفة تهدد حياتها. يجب عليهم البقاء هادئين للبقاء على قيد الحياة.",
        genre: "رعب, إثارة",
        image: "IMG_20250307_162457_484.jpg",
        link: "https://t.me/anas52ly/1384",
        type: "movie"
    },
    {
        title: "From S1",
        description: "في مدينة مرعبة في وسط أمريكا تحاصر كل من يدخلها، يقاتل السكان للبقاء على قيد الحياة والبحث عن مخرج. يواجهون تهديدات الغابة المحيطة والمخلوقات المرعبة التي تخرج بعد غروب الشمس.",
        genre: "رعب, دراما, غموض",
        image: "IMG_20250307_163026_866.jpg",
        episodes: [
            { episode: 1, link: "https://t.me/anas52ly/1260" },
            { episode: 2, link: "https://t.me/anas52ly/1261" },
            { episode: 3, link: "https://t.me/anas52ly/1262" },
            { episode: 4, link: "https://t.me/anas52ly/1263" },
            { episode: 5, link: "https://t.me/anas52ly/1264" },
            { episode: 6, link: "https://t.me/anas52ly/1265" },
            { episode: 7, link: "https://t.me/anas52ly/1266" },
            { episode: 8, link: "https://t.me/anas52ly/1267" },
            { episode: 9, link: "https://t.me/anas52ly/1268" },
            { episode: 10, link: "https://t.me/anas52ly/1269" }
        ],
        type: "series"
    },
    {
        title: "From S2",
        description: "في مدينة مرعبة في وسط أمريكا تحاصر كل من يدخلها، يقاتل السكان للبقاء على قيد الحياة والبحث عن مخرج. يواجهون تهديدات الغابة المحيطة والمخلوقات المرعبة التي تخرج بعد غروب الشمس.",
        genre: "رعب, دراما, غموض",
        image: "01b8edd40-1.jpg",
        episodes: [
            { episode: 1, link: "https://t.me/anas52ly/1270" },
            { episode: 2, link: "https://t.me/anas52ly/1271" },
            { episode: 3, link: "https://t.me/anas52ly/1272" },
            { episode: 4, link: "https://t.me/anas52ly/1273" },
            { episode: 5, link: "https://t.me/anas52ly/1274" },
            { episode: 6, link: "https://t.me/anas52ly/1275" },
            { episode: 7, link: "https://t.me/anas52ly/1276" },
            { episode: 8, link: "https://t.me/anas52ly/1277" },
            { episode: 9, link: "https://t.me/anas52ly/1278" },
            { episode: 10, link: "https://t.me/anas52ly/1279" }
        ],
        type: "series"
    },
    {
        title: "500 Days of Summer",
        description: "قصة حب غير تقليدية بين توم وسمر على مدى 500 يوم. توم يعيش في عالم من الأمل بالحب الحقيقي، بينما سمر ترفض الإيمان بفكرة الحب القائم.",
        genre: "رومانسي, دراما",
        image: "IMG_20250307_165242_896.jpg",
        link: "https://t.me/anas52ly/1130",
        type: "movie"
    },
    {
        title: "Radius",
        description: "ليام يستيقظ من حادث سيارة دون ذاكرة، ويجد جثثًا بأعين شاحبة. يكتشف أن أي شخص يدخل ضمن نطاق 50 قدماً منه يموت على الفور.",
        genre: "رعب, إثارة, خيال علمي",
        image: "IMG_20250307_165430_040.jpg",
        link: "https://t.me/anas52ly/1162",
        type: "movie"
    },
    {
        title: "Old School (2003)",
        description: "ثلاثة رجال يحاولون استعادة أيام الدراسة القديمة ومغامراتهم في قالب كوميدي.",
        genre: "كوميدي",
        image: "IMG_20250307_165600_737.jpg",
        link: "https://t.me/anas52ly/1292",
        type: "movie"
    }
];

// عرض الأفلام والمسلسلات على الصفحة
function displayMovies(filteredMovies) {
    const container = document.getElementById("moviesContainer");
    container.innerHTML = "";

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        let buttonHTML = "";
        if (movie.type === "movie") {
            buttonHTML = `<a class="button" href="${movie.link}" target="_blank">مشاهدة الآن</a>`;
        } else if (movie.type === "series") {
            buttonHTML = `<button class="button" onclick="showEpisodes(${movies.indexOf(movie)})">عرض الحلقات</button>`;
        }

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <p><strong>التصنيف:</strong> ${movie.genre}</p>
            ${buttonHTML}
            <div class="episodes-container" id="episodes-${movies.indexOf(movie)}" style="display: none;"></div>
        `;

        container.appendChild(movieCard);
    });
}

// دالة لعرض/إخفاء الحلقات
function showEpisodes(index) {
    const episodesContainer = document.getElementById(`episodes-${index}`);
    const isHidden = episodesContainer.style.display === "none" || episodesContainer.style.display === "";

    // تبديل حالة الإظهار/الإخفاء
    episodesContainer.style.display = isHidden ? "block" : "none";

    // إذا كانت الحلقات لم تُعرض بعد، أضفها
    if (isHidden && episodesContainer.innerHTML === "") {
        const episodes = movies[index].episodes;
        episodes.forEach(ep => {
            const episodeLink = document.createElement("a");
            episodeLink.href = ep.link;
            episodeLink.target = "_blank";
            episodeLink.textContent = `الحلقة ${ep.episode}`;
            episodeLink.classList.add("episode-link");
            episodesContainer.appendChild(episodeLink);
        });
    }
}

// البحث في الأفلام والمسلسلات
document.getElementById("searchInput").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    const filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchValue) || 
                              movie.description.toLowerCase().includes(searchValue) || 
                              movie.genre.toLowerCase().includes(searchValue);

        // إذا كان البحث يتضمن "فيلم" أو "افلام"، يتم عرض الأفلام فقط
        if (searchValue.includes("فيلم") || searchValue.includes("افلام")) {
            return matchesSearch && movie.type === "movie";
        }
        // إذا كان البحث يتضمن "مسلسل" أو "مسلسلات"، يتم عرض المسلسلات فقط
        else if (searchValue.includes("مسلسل") || searchValue.includes("مسلسلات")) {
            return matchesSearch && movie.type === "series";
        }
        // إذا كان البحث يتضمن تصنيفًا معينًا، يتم عرض الأفلام أو المسلسلات التي تطابق التصنيف
        else if (searchValue.includes("أكشن") || searchValue.includes("دراما") || searchValue.includes("خيال علمي") || searchValue.includes("رعب") || searchValue.includes("كوميدي") || searchValue.includes("رومانسي")) {
            return matchesSearch && movie.genre.toLowerCase().includes(searchValue);
        }
        // إذا لم يكن هناك تحديد، يتم عرض كل النتائج
        else {
            return matchesSearch;
        }
    });

    displayMovies(filteredMovies);
});

// عرض كل المحتوى عند تحميل الصفحة
displayMovies(movies);
