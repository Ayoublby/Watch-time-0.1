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
    { title: "Interstellar", description: "فيلم خيال علمي من إخراج كريستوفر نولان، يتبع فريقًا من رواد الفضاء يسافرون عبر ثقب دودي للبحث عن كوكب جديد صالح للحياة...", genre: "خيال علمي, دراما", image: "IMG_20250307_150529_817.jpg", link: "https://t.me/anas52ly/1489", type: "movie" },
    { title: "Brothers (2009)", description: "بعد اعتقاد الجميع بوفاة (سام) في أفغانستان، يعتني شقيقه (تومي) بزوجته وأبنائه...", genre: "دراما, حرب", image: "IMG_20250307_161659_419.jpg", link: "https://t.me/anas52ly/1468", type: "movie" },
    { title: "Basketball Diaries (1995)", description: "قصة مراهق موهوب في كرة السلة يسقط في هاوية الإدمان على المخدرات بسبب صدمات الحياة...", genre: "جريمة, دراما, سيرة ذاتية", image: "IMG_20250307_162217_591.jpg", link: "https://t.me/anas52ly/1391", type: "movie" },
    { title: "A Quiet Place (2018)", description: "أسرة صغيرة تعيش في صمت تام لتجنب كائنات مخيفة تهدد حياتها...", genre: "رعب, إثارة", image: "IMG_20250307_162457_484.jpg", link: "https://t.me/anas52ly/1384", type: "movie" },
    { title: "500 Days of Summer", description: "قصة حب غير تقليدية بين توم وسمر على مدى 500 يوم...", genre: "رومانسي, دراما", image: "IMG_20250307_165242_896.jpg", link: "https://t.me/anas52ly/1130", type: "movie" },
    { title: "Radius", description: "ليام يستيقظ من حادث سيارة دون ذاكرة، ويجد جثثًا بأعين شاحبة...", genre: "رعب, إثارة, خيال علمي", image: "IMG_20250307_165430_040.jpg", link: "https://t.me/anas52ly/1162", type: "movie" },
    { title: "Old School (2003)", description: "ثلاثة رجال يحاولون استعادة أيام الدراسة القديمة ومغامراتهم في قالب كوميدي...", genre: "كوميدي", image: "IMG_20250307_165600_737.jpg", link: "https://t.me/anas52ly/1292", type: "movie" },
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
    { title: "Stranger Things", description: "في بلدة هوكينز خلال الثمانينيات، يختفي صبي يُدعى ويل بايرز في ظروف غامضة، مما يكشف عن تجارب حكومية سرية وعالم موازٍ مخيف...", genre: "رعب, دراما, خيال علمي", image: "Strange things1.jpg", episodes: [ 
        { episode: 1, link: "https://t.me/anas52ly/1080" }, 
        { episode: 2, link: "https://t.me/anas52ly/1081" }, 
        { episode: 3, link: "https://t.me/anas52ly/1082" }, 
        { episode: 4, link: "https://t.me/anas52ly/1084" }, 
        { episode: 5, link: "https://t.me/anas52ly/1085" }, 
        { episode: 6, link: "https://t.me/anas52ly/1086" }, 
        { episode: 7, link: "https://t.me/anas52ly/1087" }, 
        { episode: 8, link: "https://t.me/anas52ly/1088" } 
    ], type: "series" },
    { title: "From S1", description: "في مدينة مرعبة في وسط أمريكا تحاصر كل من يدخلها، يقاتل السكان للبقاء على قيد الحياة...", genre: "رعب, دراما, غموض", image: "IMG_20250307_163026_866.jpg", episodes: [
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
    ], type: "series" },
    { title: "From S2", description: "في مدينة مرعبة في وسط أمريكا تحاصر كل من يدخلها، يقاتل السكان للبقاء على قيد الحياة...", genre: "رعب, دراما, غموض", image: "01b8edd40-1.jpg", episodes: [
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
    ], type: "series" },
    { title: "Invincible", description: "يشبه مارك غريسون البالغ من العمر سبعة عشر عامًا كل شخص في عمره، باستثناء أن والده هو أومني مان، أقوى بطل خارق على هذا الكوكب. بينما يطوّر 'مارك' قواه الخاصة، يكتشف أن إرث والده قد لا يكون بطوليًا كما يبدو.", genre: "أكشن, مغامرة, دراما", image: "IMG_20250310_010623_595.jpg", episodes: [
        { episode: 1, link: "https://t.me/anas52ly/1222" },
        { episode: 2, link: "https://t.me/anas52ly/1223" },
        { episode: 3, link: "https://t.me/anas52ly/1229" },
        { episode: 4, link: "https://t.me/anas52ly/1230" },
        { episode: 5, link: "https://t.me/anas52ly/1231" },
        { episode: 6, link: "https://t.me/anas52ly/1232" },
        { episode: 7, link: "https://t.me/anas52ly/1233" },
        { episode: 8, link: "https://t.me/anas52ly/1234" }
    ], type: "anime" }
];

function displayMovies(filteredMovies) {
    const container = document.getElementById("moviesContainer");
    container.innerHTML = "";

    filteredMovies.forEach((movie, index) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        let buttonHTML = "";
        if (movie.type === "movie") {
            buttonHTML = `<a class="btn-watch" href="${movie.link}" target="_blank">مشاهدة الآن</a>`;
        } else if (movie.type === "series" || movie.type === "anime") {
            buttonHTML = `<button class="btn-episodes" onclick="showEpisodes(${movies.indexOf(movie)})">عرض الحلقات</button>`;
        }

        let episodesHTML = "";
        if ((movie.type === "series" || movie.type === "anime") && movie.episodes) {
            const episodesLinks = movie.episodes.map(ep => 
                `<a href="${ep.link}" target="_blank" class="episode-link">الحلقة ${ep.episode}</a>`
            ).join("");
            episodesHTML = `<div class="episodes-container" id="episodes-${movies.indexOf(movie)}" style="display: none;">${episodesLinks}</div>`;
        }

        movieCard.innerHTML = `
            <div class="card-image">
                <img src="${movie.image}" alt="${movie.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22600%22%3E%3Crect fill=%22%23222%22 width=%22400%22 height=%22600%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22%23888%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3Eصورة غير متوفرة%3C/text%3E%3C/svg%3E'">
                <div class="card-overlay">
                    <div class="btn-group">
                        ${buttonHTML}
                    </div>
                </div>
            </div>
            <div class="card-content">
                <h2 class="card-title">${movie.title}</h2>
                <p class="card-genre">${movie.genre}</p>
                <p class="card-description">${movie.description}</p>
            </div>
            ${episodesHTML}
        `;

        container.appendChild(movieCard);
    });
}

function showEpisodes(index) {
    const episodeContainer = document.getElementById(`episodes-${index}`);
    if (episodeContainer.style.display === "none") {
        episodeContainer.style.display = "flex";
    } else {
        episodeContainer.style.display = "none";
    }
}

function searchMovies(query) {
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase())
    );
    displayMovies(filteredMovies);
}
