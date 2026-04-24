// 电影时光 - 完整交互脚本
document.addEventListener('DOMContentLoaded', function() {

/* ===================================================================
   1. 数据层
   =================================================================== */

const moviesData = [
    { id:1, title:'沙丘2', rating:8.7, duration:'166分钟', year:'2024', genre:'科幻/冒险', region:'美国', director:'丹尼斯·维伦纽瓦', cast:'提莫西·查拉梅 / 赞达亚 / 丽贝卡·弗格森', desc:'保罗·厄崔迪与契妮和弗雷曼人联手，对毁灭他家庭的阴谋者展开报复。他必须在所爱之人与宇宙命运之间做出抉择。', color:'#e67e22', tags:['科幻','冒险','史诗'] },
    { id:2, title:'奥本海默', rating:8.5, duration:'180分钟', year:'2023', genre:'传记/历史', region:'美国', director:'克里斯托弗·诺兰', cast:'基里安·墨菲 / 艾米莉·布朗特 / 小罗伯特·唐尼', desc:'讲述理论物理学家罗伯特·奥本海默领导曼哈顿计划制造原子弹的故事，探讨科学与道德的边界。', color:'#95a5a6', tags:['传记','历史','剧情'] },
    { id:3, title:'流浪地球2', rating:8.3, duration:'173分钟', year:'2023', genre:'科幻/灾难', region:'中国', director:'郭帆', cast:'吴京 / 李雪健 / 刘德华', desc:'太阳即将毁灭，人类在地球表面建造巨大推进器寻找新家园，宇宙之路危机四伏。', color:'#2980b9', tags:['科幻','灾难','中国'] },
    { id:4, title:'蜘蛛侠：纵横宇宙', rating:8.0, duration:'148分钟', year:'2023', genre:'动画/动作', region:'美国', director:'乔伊姆·多斯·桑托斯', cast:'沙梅克·摩尔 / 海莉·斯坦菲尔德', desc:'蜘蛛侠迈尔斯踏上跨越多元宇宙的冒险，与蜘蛛侠联盟一起对抗强大新威胁。', color:'#c0392b', tags:['动画','动作','超级英雄'] },
    { id:5, title:'星际穿越', rating:9.2, duration:'169分钟', year:'2014', genre:'科幻/冒险', region:'美国', director:'克里斯托弗·诺兰', cast:'马修·麦康纳 / 安妮·海瑟薇', desc:'一队探险家穿越虫洞，为人类寻找新家园的壮丽太空之旅。', color:'#2c3e50', tags:['科幻','太空','经典'] },
    { id:6, title:'功夫熊猫4', rating:7.5, duration:'94分钟', year:'2024', genre:'动画/喜剧', region:'美国', director:'迈克·米切尔', cast:'杰克·布莱克 / 安吉丽娜·朱莉', desc:'神龙大侠阿宝再次出击，面对全新反派，开启一场爆笑又刺激的功夫冒险。', color:'#16a085', tags:['动画','喜剧','功夫'] },
    { id:7, title:'神秘海域', rating:7.2, duration:'116分钟', year:'2022', genre:'动作/冒险', region:'美国', director:'鲁本·弗雷斯彻', cast:'汤姆·赫兰德 / 马克·沃尔伯格', desc:'内森·德雷克与维克托·苏利文踏上寻宝之旅，在神秘海域中追寻失落宝藏。', color:'#8e44ad', tags:['动作','冒险','寻宝'] },
    { id:8, title:'盗梦空间', rating:9.0, duration:'148分钟', year:'2010', genre:'科幻/悬疑', region:'美国', director:'克里斯托弗·诺兰', cast:'莱昂纳多·迪卡普里奥 / 渡边谦', desc:'道姆·柯布潜入他人梦境中窃取秘密，为了回家与孩子团聚，他必须完成最后一项任务。', color:'#34495e', tags:['科幻','悬疑','经典'] },
    { id:9, title:'你的名字', rating:8.4, duration:'106分钟', year:'2016', genre:'动画/爱情', region:'日本', director:'新海诚', cast:'神木隆之介 / 上白石萌音', desc:'男女高中生在梦中相遇，寻找彼此的青春爱情故事。', color:'#9b59b6', tags:['动画','爱情','日本'] },
    { id:10, title:'速度与激情10', rating:7.0, duration:'141分钟', year:'2023', genre:'动作/犯罪', region:'美国', director:'路易斯·莱特里尔', cast:'范·迪塞尔 / 杰森·莫玛', desc:'多米尼克·托雷托面对来自过去的致命威胁，飞车家族再次集结。', color:'#e74c3c', tags:['动作','犯罪','赛车'] },
    { id:11, title:'满江红', rating:7.8, duration:'159分钟', year:'2023', genre:'悬疑/喜剧', region:'中国', director:'张艺谋', cast:'沈腾 / 易烊千玺 / 张译', desc:'南宋年间，一场围绕密信的阴谋在秦桧府中展开，各色人物粉墨登场。', color:'#c0392b', tags:['悬疑','喜剧','历史'] },
    { id:12, title:'疯狂动物城', rating:8.6, duration:'108分钟', year:'2016', genre:'动画/喜剧', region:'美国', director:'拜伦·霍华德', cast:'金妮弗·古德温 / 杰森·贝特曼', desc:'兔子朱迪来到动物城实现警察梦，与狐狸尼克搭档破获惊天大案。', color:'#3498db', tags:['动画','喜剧','经典'] }
];

const categoriesData = [
    { name:'动作', icon:'fa-fist-raised', color:'#e74c3c' },
    { name:'喜剧', icon:'fa-laugh', color:'#2ecc71' },
    { name:'科幻', icon:'fa-rocket', color:'#3498db' },
    { name:'爱情', icon:'fa-heart', color:'#9b59b6' },
    { name:'恐怖', icon:'fa-ghost', color:'#8e44ad' },
    { name:'动画', icon:'fa-film', color:'#1abc9c' }
];

const hotSearchTags = ['沙丘2','星际穿越','奥本海默','流浪地球','动漫','漫威','周星驰','科幻大片','国产电影','4K'];

// 从localStorage读取数据
function loadData(key, def) {
    try { const d = localStorage.getItem('movieapp_'+key); return d ? JSON.parse(d) : def; }
    catch(e) { return def; }
}
function saveData(key, val) {
    try { localStorage.setItem('movieapp_'+key, JSON.stringify(val)); } catch(e) {}
}

let favorites = loadData('favorites', []);
let searchHistory = loadData('searchHistory', []);
let currentPage = 'homePage';
let currentMovieId = null;
let currentCategory = '全部';
let currentFilter = 'all';
let sortAsc = false;
let playerState = { playing:false, currentTime:0, duration:100 };

/* ===================================================================
   2. DOM 引用
   =================================================================== */

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const pageContainer = $('.page-container');

/* ===================================================================
   3. 页面切换
   =================================================================== */

function switchPage(pageId, direction) {
    const current = $('.page.active');
    const next = document.getElementById(pageId);
    if (!next || current === next) return;

    currentPage = pageId;

    // 方向: 1=左进, -1=右进
    const dir = direction || (pageId === 'homePage' || pageId === 'searchPage' || pageId === 'favoritesPage' || pageId === 'profilePage' ? 1 : -1);

    // 移除旧页面
    current.classList.remove('active');
    current.classList.add(dir > 0 ? 'exit-left' : 'exit-right');

    // 准备新页面
    next.classList.remove('exit-left', 'exit-right');
    // 强制重排
    void next.offsetWidth;
    next.classList.add('active');

    // 清除旧page的退出类
    setTimeout(() => {
        current.classList.remove('exit-left', 'exit-right');
    }, 350);

    // 更新底部标签
    updateTabBar(pageId);
}

function updateTabBar(pageId) {
    const mainTabs = ['homePage','searchPage','favoritesPage','profilePage'];
    $$('.tab-item').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === pageId);
    });
    document.getElementById('tabBar').style.display = mainTabs.includes(pageId) ? 'flex' : 'none';
}

/* ===================================================================
   4. 渲染函数
   =================================================================== */

// 首页分类
function renderCategories() {
    const grid = document.getElementById('homeCategories');
    grid.innerHTML = categoriesData.map(c => `
        <div class="category-card" style="background:${c.color}" data-cat="${c.name}">
            <i class="fas ${c.icon}"></i><span>${c.name}</span>
        </div>
    `).join('');
    grid.querySelectorAll('.category-card').forEach(el => {
        el.addEventListener('click', () => openCategory(el.dataset.cat));
    });
}

// 首页热门电影
function renderPopularMovies() {
    const container = document.getElementById('homePopularMovies');
    container.innerHTML = moviesData.slice(0,4).map(m => `
        <div class="movie-card" style="background:${m.color}" data-id="${m.id}">
            <div class="movie-poster"></div>
            <div class="movie-info">
                <h4 class="movie-title">${m.title}</h4>
                <div class="movie-rating"><i class="fas fa-star"></i><span>${m.rating}</span></div>
                <p class="movie-desc">${m.genre}</p>
            </div>
        </div>
    `).join('');
    container.querySelectorAll('.movie-card').forEach(el => {
        el.addEventListener('click', () => openMovieModal(Number(el.dataset.id)));
    });
}

// 首页正在热映
function renderNowPlaying() {
    const list = document.getElementById('homeNowPlaying');
    const data = moviesData.slice(4,7);
    list.innerHTML = data.map(m => `
        <div class="now-playing-card" data-id="${m.id}">
            <div class="playing-poster" style="background:${m.color}"></div>
            <div class="playing-info">
                <h4>${m.title}</h4>
                <p>${m.genre}</p>
                <div class="playing-meta">
                    <span><i class="fas fa-clock"></i> ${m.duration}</span>
                    <span><i class="fas fa-calendar"></i> ${m.year}</span>
                </div>
            </div>
            <button class="book-btn">购票</button>
        </div>
    `).join('');
    list.querySelectorAll('.now-playing-card').forEach(el => {
        el.addEventListener('click', function(e) {
            if (e.target.classList.contains('book-btn')) {
                e.stopPropagation();
                simulateBooking(this.querySelector('h4').textContent);
                return;
            }
            openMovieModal(Number(this.dataset.id));
        });
    });
}

// 搜索页 - 热门标签
function renderHotTags() {
    const container = document.getElementById('hotTags');
    container.innerHTML = hotSearchTags.map(t => `<button class="hot-tag">${t}</button>`).join('');
    container.querySelectorAll('.hot-tag').forEach(el => {
        el.addEventListener('click', () => doSearch(el.textContent));
    });
}

// 搜索页 - 历史记录
function renderHistory() {
    const container = document.getElementById('historyList');
    const section = document.getElementById('searchHistorySection');
    if (!searchHistory.length) { section.style.display = 'none'; return; }
    section.style.display = 'block';
    container.innerHTML = searchHistory.map(h => `
        <div class="history-item" data-q="${h}">
            <span>${h}</span>
            <button class="history-del"><i class="fas fa-times"></i></button>
        </div>
    `).join('');
    container.querySelectorAll('.history-item').forEach(el => {
        el.addEventListener('click', function(e) {
            if (e.target.closest('.history-del')) {
                e.stopPropagation();
                searchHistory = searchHistory.filter(s => s !== this.dataset.q);
                saveData('searchHistory', searchHistory);
                renderHistory();
                return;
            }
            doSearch(this.dataset.q);
        });
    });
}

// 搜索结果
function doSearch(query) {
    if (!query.trim()) return;
    query = query.trim();
    // 添加到历史
    searchHistory = [query, ...searchHistory.filter(h => h !== query)].slice(0, 10);
    saveData('searchHistory', searchHistory);
    renderHistory();

    // 隐藏热门/历史，显示搜索结果
    document.getElementById('searchHotSection').style.display = 'none';
    document.getElementById('searchHistorySection').style.display = 'none';
    document.getElementById('searchSuggestions').style.display = 'none';

    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.style.display = 'block';
    $('.search-page-input').value = query;

    renderSearchResults(query, currentFilter);
}

function renderSearchResults(query, filter) {
    let results = moviesData.filter(m => {
        const match = m.title.includes(query) || m.desc.includes(query) || m.tags.some(t => t.includes(query)) || m.genre.includes(query);
        if (filter === 'all') return match;
        return match && (m.genre.includes(filter) || m.tags.includes(filter));
    });

    document.getElementById('resultCount').textContent = `共 ${results.length} 个结果`;
    const grid = document.getElementById('searchGrid');
    if (!results.length) {
        grid.innerHTML = '<div style="text-align:center;padding:40px;color:#8e8e93;">未找到相关电影</div>';
        return;
    }
    grid.innerHTML = results.map(m => `
        <div class="search-result-card" data-id="${m.id}">
            <div class="search-result-poster" style="background:${m.color};border-radius:15px;"></div>
            <div class="search-result-info">
                <h4>${m.title}</h4>
                <p>${m.genre} · ${m.year}</p>
                <p style="color:#ff9500;"><i class="fas fa-star"></i> ${m.rating}</p>
            </div>
        </div>
    `).join('');
    grid.querySelectorAll('.search-result-card').forEach(el => {
        el.addEventListener('click', () => openMovieModal(Number(el.dataset.id)));
    });
}

// 收藏页
function renderFavorites() {
    const list = document.getElementById('favoritesList');
    const empty = document.getElementById('favoritesEmpty');
    const badge = document.getElementById('favBadge');

    if (!favorites.length) {
        list.innerHTML = '';
        empty.style.display = 'flex';
        badge.style.display = 'none';
        return;
    }
    empty.style.display = 'none';
    badge.style.display = 'flex';
    badge.textContent = favorites.length;

    list.innerHTML = favorites.map((m, idx) => `
        <div class="fav-card" data-id="${m.id}" data-idx="${idx}">
            <div class="fav-poster" style="background:${m.color}"></div>
            <div class="fav-info">
                <h4>${m.title}</h4>
                <p>${m.genre} · ${m.year}</p>
                <span class="fav-rating"><i class="fas fa-star"></i> ${m.rating}</span>
            </div>
            <button class="fav-remove-btn" data-id="${m.id}"><i class="fas fa-trash-alt"></i></button>
        </div>
    `).join('');
    list.querySelectorAll('.fav-card').forEach(el => {
        el.addEventListener('click', function(e) {
            if (e.target.closest('.fav-remove-btn')) {
                removeFavorite(Number(this.dataset.id));
                return;
            }
            openMovieModal(Number(this.dataset.id));
        });
    });
}

function removeFavorite(id) {
    favorites = favorites.filter(m => m.id !== id);
    saveData('favorites', favorites);
    renderFavorites();
    updateProfileStats();
}

// 个人中心统计
function updateProfileStats() {
    document.getElementById('statFavCount').textContent = favorites.length;
    // 模拟其他统计数据
    document.getElementById('statWatchedCount').textContent = Math.floor(Math.random() * 30 + 10);
    document.getElementById('statHoursCount').textContent = Math.floor(Math.random() * 100 + 50);
    document.getElementById('statReviewCount').textContent = Math.floor(Math.random() * 20 + 3);
}

// 播放页
function openPlayer(movie) {
    currentMovieId = movie.id;
    switchPage('playerPage', -1);

    document.getElementById('playerMovieTitle').textContent = movie.title;
    document.getElementById('playerInfoTitle').textContent = movie.title;
    document.getElementById('playerInfoRating').textContent = movie.rating;
    document.getElementById('playerInfoYear').textContent = movie.year;
    document.getElementById('playerInfoGenre').textContent = movie.genre;
    document.getElementById('playerInfoDesc').textContent = movie.desc;

    // 猜你喜欢
    const likeList = document.getElementById('playerLikeList');
    const others = moviesData.filter(m => m.id !== movie.id).slice(0, 4);
    likeList.innerHTML = others.map(m => `
        <div class="player-like-item" data-id="${m.id}">
            <div class="like-poster" style="background:${m.color}"></div>
            <div class="like-title">${m.title}</div>
        </div>
    `).join('');
    likeList.querySelectorAll('.player-like-item').forEach(el => {
        el.addEventListener('click', () => openMovieModal(Number(el.dataset.id)));
    });

    // 重置播放器
    resetPlayer();
}

function resetPlayer() {
    const area = document.getElementById('videoArea');
    area.classList.remove('playing');
    document.getElementById('videoPlaceholder').style.display = 'flex';
    document.getElementById('videoControls').style.display = 'none';
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('progressThumb').style.left = '0%';
    document.getElementById('currentTime').textContent = '00:00';
    document.getElementById('totalTime').textContent = '00:00';
    playerState.playing = false;
    document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-play"></i>';
}

// 分类浏览页
function openCategory(catName) {
    if (catName === '全部') {
        currentCategory = '全部';
        renderCategoryGrid(moviesData);
    } else {
        currentCategory = catName;
        const filtered = moviesData.filter(m => m.genre.includes(catName) || m.tags.includes(catName));
        renderCategoryGrid(filtered);
    }
    document.getElementById('categoryPageTitle').textContent = catName + '分类';
    switchPage('categoryPage', -1);
}

function renderCategoryGrid(movies) {
    // 筛选按钮
    const filters = ['全部', ...new Set(moviesData.map(m => m.genre.split('/')[0]))];
    const filterBar = document.getElementById('categoryFilter');
    filterBar.innerHTML = filters.map(f => `
        <button class="filter-btn ${f === currentCategory ? 'active' : ''}" data-cat="${f}">${f}</button>
    `).join('');
    filterBar.querySelectorAll('.filter-btn').forEach(el => {
        el.addEventListener('click', () => {
            currentCategory = el.dataset.cat;
            if (currentCategory === '全部') {
                openCategory('全部');
            } else {
                const filtered = moviesData.filter(m => m.genre.includes(currentCategory) || m.tags.includes(currentCategory));
                renderCategoryGrid(filtered);
                document.getElementById('categoryPageTitle').textContent = currentCategory + '分类';
                // 更新active状态
                filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === currentCategory));
            }
        });
    });

    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = movies.map(m => `
        <div class="category-movie-card" data-id="${m.id}">
            <div class="cat-poster" style="background:${m.color};border-radius:15px;"></div>
            <div class="cat-info">
                <h4>${m.title}</h4>
                <p>${m.genre} · ${m.year}</p>
                <p class="cat-rating"><i class="fas fa-star"></i> ${m.rating}</p>
            </div>
        </div>
    `).join('');
    grid.querySelectorAll('.category-movie-card').forEach(el => {
        el.addEventListener('click', () => openMovieModal(Number(el.dataset.id)));
    });
}

// 全部电影页
function renderViewAll() {
    const grid = document.getElementById('viewAllGrid');
    grid.innerHTML = moviesData.map(m => `
        <div class="category-movie-card" data-id="${m.id}">
            <div class="cat-poster" style="background:${m.color};border-radius:15px;"></div>
            <div class="cat-info">
                <h4>${m.title}</h4>
                <p>${m.genre} · ${m.year}</p>
                <p class="cat-rating"><i class="fas fa-star"></i> ${m.rating}</p>
            </div>
        </div>
    `).join('');
    grid.querySelectorAll('.category-movie-card').forEach(el => {
        el.addEventListener('click', () => openMovieModal(Number(el.dataset.id)));
    });
}

/* ===================================================================
   5. 电影详情弹窗
   =================================================================== */

function openMovieModal(id) {
    const movie = moviesData.find(m => m.id === id);
    if (!movie) return;
    currentMovieId = id;

    const modal = document.getElementById('movieModal');
    document.getElementById('modalPoster').style.background = movie.color;
    document.getElementById('modalTitle').textContent = movie.title;

    // 评分
    const stars = document.getElementById('modalStars');
    const starRating = movie.rating / 2;
    const full = Math.floor(starRating);
    const half = starRating % 1 >= 0.5;
    stars.innerHTML = '';
    for (let i = 0; i < full; i++) stars.innerHTML += '<i class="fas fa-star"></i>';
    if (half) stars.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < 5 - full - (half?1:0); i++) stars.innerHTML += '<i class="far fa-star"></i>';
    stars.innerHTML += `<span>${movie.rating}/10</span>`;

    document.getElementById('modalMeta').innerHTML = `
        <span><i class="fas fa-clock"></i> ${movie.duration}</span>
        <span><i class="fas fa-calendar"></i> ${movie.year}</span>
        <span><i class="fas fa-film"></i> ${movie.genre}</span>
    `;
    document.getElementById('modalCast').innerHTML = `
        <strong>导演：</strong>${movie.director}<br>
        <strong>主演：</strong>${movie.cast}
    `;
    document.getElementById('modalDesc').textContent = movie.desc;

    const favBtn = document.getElementById('modalFavBtn');
    const isFav = favorites.some(m => m.id === movie.id);
    if (isFav) {
        favBtn.innerHTML = '<i class="fas fa-heart"></i> 已收藏';
        favBtn.style.background = '#ff3b30';
        favBtn.style.color = '#fff';
    } else {
        favBtn.innerHTML = '<i class="fas fa-heart"></i> 加入收藏';
        favBtn.style.background = '#f2f2f7';
        favBtn.style.color = '#000';
    }

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('movieModal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

/* ===================================================================
   6. 辅助功能
   =================================================================== */

function showToast(msg) {
    const old = document.querySelector('.toast');
    if (old) old.remove();
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    t.style.cssText = 'position:fixed;top:100px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.8);color:#fff;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:500;z-index:9999;max-width:300px;text-align:center;animation:toastAnim 2.5s ease forwards;';
    const s = document.createElement('style');
    s.textContent = '@keyframes toastAnim{0%{opacity:0;transform:translateX(-50%) translateY(-20px)}15%{opacity:1;transform:translateX(-50%) translateY(0)}85%{opacity:1}100%{opacity:0;transform:translateX(-50%) translateY(-20px)}}';
    document.head.appendChild(s);
    document.body.appendChild(t);
    setTimeout(() => { t.remove(); s.remove(); }, 2500);
}

function simulateBooking(title) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.9);display:flex;justify-content:center;align-items:center;z-index:1001;';
    overlay.innerHTML = `
        <div style="background:linear-gradient(135deg,#667eea,#764ba2);border-radius:20px;padding:35px;text-align:center;color:#fff;max-width:300px;width:90%;animation:scaleIn 0.3s ease;">
            <i class="fas fa-ticket-alt" style="font-size:48px;margin-bottom:20px;"></i>
            <h3 style="margin-bottom:10px;font-size:22px;">购票成功!</h3>
            <p style="margin-bottom:8px;opacity:0.9;">《${title}》</p>
            <p style="margin-bottom:20px;opacity:0.8;">请按时前往影院观影</p>
            <button class="close-booking" style="background:#fff;color:#667eea;border:none;border-radius:12px;padding:12px 24px;font-size:16px;font-weight:600;cursor:pointer;">确认</button>
        </div>`;
    document.body.appendChild(overlay);
    const scaleS = document.createElement('style');
    scaleS.textContent = '@keyframes scaleIn{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}';
    document.head.appendChild(scaleS);
    overlay.querySelector('.close-booking').addEventListener('click', () => { overlay.remove(); scaleS.remove(); });
    overlay.addEventListener('click', e => { if (e.target === overlay) { overlay.remove(); scaleS.remove(); } });
    setTimeout(() => { if (overlay.parentNode) { overlay.remove(); scaleS.remove(); } }, 4000);
}

/* ===================================================================
   7. 事件绑定
   =================================================================== */

// 底部标签切换
$$('.tab-item').forEach(tab => {
    tab.addEventListener('click', function() {
        const target = this.dataset.tab;
        switchPage(target, 1);
    });
});

// 所有返回按钮
$$('.back-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const from = this.dataset.page;
        // 根据当前页面决定返回目标
        if (from === 'playerPage') {
            const movie = moviesData.find(m => m.id === currentMovieId);
            if (movie) openMovieModal(movie.id);
            switchPage('homePage', 1);
        } else if (from === 'categoryPage' || from === 'viewAllPage') {
            switchPage('homePage', 1);
        } else {
            switchPage('homePage', 1);
        }
    });
});

// 头像 -> 个人中心
document.getElementById('avatarBtn').addEventListener('click', () => {
    switchPage('profilePage', 1);
    updateProfileStats();
});

// 首页搜索栏点击 -> 搜索页
document.getElementById('homeSearchBar').addEventListener('click', () => {
    $('.search-page-input').focus();
    switchPage('searchPage', 1);
});

// 首页「查看全部」
document.getElementById('viewAllBtn').addEventListener('click', (e) => {
    e.preventDefault();
    renderViewAll();
    switchPage('viewAllPage', -1);
});

// 横幅按钮
document.querySelector('.banner-button').addEventListener('click', function() {
    const movie = moviesData.find(m => m.title.includes('星际'));
    if (movie) openMovieModal(movie.id);
});

// 弹窗关闭
document.querySelector('.close-modal').addEventListener('click', closeModal);
document.getElementById('movieModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('movieModal');
        if (modal.classList.contains('show')) closeModal();
    }
});

// 弹窗播放按钮
document.getElementById('modalPlayBtn').addEventListener('click', function() {
    const movie = moviesData.find(m => m.id === currentMovieId);
    if (!movie) return;
    closeModal();
    setTimeout(() => openPlayer(movie), 400);
});

// 弹窗收藏按钮
document.getElementById('modalFavBtn').addEventListener('click', function() {
    const movie = moviesData.find(m => m.id === currentMovieId);
    if (!movie) return;
    const idx = favorites.findIndex(m => m.id === currentMovieId);
    if (idx > -1) {
        favorites.splice(idx, 1);
        this.innerHTML = '<i class="fas fa-heart"></i> 加入收藏';
        this.style.background = '#f2f2f7';
        this.style.color = '#000';
        showToast('已取消收藏');
    } else {
        favorites.push(movie);
        this.innerHTML = '<i class="fas fa-heart"></i> 已收藏';
        this.style.background = '#ff3b30';
        this.style.color = '#fff';
        showToast('已加入收藏');
    }
    saveData('favorites', favorites);
    renderFavorites();
    updateProfileStats();
});

// 搜索页输入
let searchTimer = null;
$('.search-page-input').addEventListener('input', function() {
    const q = this.value.trim();
    const clearBtn = document.getElementById('searchClearBtn');
    clearBtn.style.display = q.length ? 'block' : 'none';

    clearTimeout(searchTimer);
    if (q.length === 0) {
        document.getElementById('searchHotSection').style.display = 'block';
        document.getElementById('searchHistorySection').style.display = searchHistory.length ? 'block' : 'none';
        document.getElementById('searchResults').style.display = 'none';
        document.getElementById('searchSuggestions').style.display = 'none';
        document.getElementById('searchFilters').style.display = 'none';
        return;
    }

    // 显示搜索建议
    const suggestions = moviesData.filter(m => m.title.includes(q) || m.tags.some(t => t.includes(q))).slice(0, 5);
    const sugContainer = document.getElementById('suggestionsList');
    if (suggestions.length) {
        document.getElementById('searchSuggestions').style.display = 'block';
        document.getElementById('searchHotSection').style.display = 'none';
        document.getElementById('searchHistorySection').style.display = 'none';
        sugContainer.innerHTML = suggestions.map(m => `
            <div class="suggestion-item" data-id="${m.id}">
                <i class="fas fa-search"></i>
                <span>${m.title}</span>
            </div>
        `).join('');
        sugContainer.querySelectorAll('.suggestion-item').forEach(el => {
            el.addEventListener('click', () => openMovieModal(Number(el.dataset.id)));
        });
    }

    // 延迟搜索
    searchTimer = setTimeout(() => {
        if (q.length >= 1) {
            document.getElementById('searchSuggestions').style.display = 'none';
            document.getElementById('searchFilters').style.display = 'flex';
            doSearch(q);
        }
    }, 500);
});

// 搜索清空
document.getElementById('searchClearBtn').addEventListener('click', function() {
    $('.search-page-input').value = '';
    this.style.display = 'none';
    document.getElementById('searchHotSection').style.display = 'block';
    document.getElementById('searchHistorySection').style.display = searchHistory.length ? 'block' : 'none';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchSuggestions').style.display = 'none';
    document.getElementById('searchFilters').style.display = 'none';
    $('.search-page-input').focus();
});

// 搜索筛选
document.getElementById('searchFilters').querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('#searchFilters .active').classList.remove('active');
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        const q = $('.search-page-input').value.trim();
        if (q) renderSearchResults(q, currentFilter);
    });
});

// 清空历史
document.getElementById('clearHistoryBtn').addEventListener('click', (e) => {
    e.preventDefault();
    searchHistory = [];
    saveData('searchHistory', searchHistory);
    renderHistory();
    showToast('已清空搜索历史');
});

// 收藏页编辑
let editMode = false;
document.getElementById('editFavBtn').addEventListener('click', function() {
    editMode = !editMode;
    this.textContent = editMode ? '完成' : '编辑';
    document.querySelectorAll('.fav-remove-btn').forEach(b => {
        b.style.display = editMode ? 'flex' : 'none';
    });
});

// 分类页排序
document.getElementById('categorySortBtn').addEventListener('click', function() {
    sortAsc = !sortAsc;
    const grid = document.getElementById('categoryGrid');
    const items = [...grid.querySelectorAll('.category-movie-card')];
    // 按评分排序
    items.sort((a,b) => {
        const ra = parseFloat(a.querySelector('.cat-rating').textContent);
        const rb = parseFloat(b.querySelector('.cat-rating').textContent);
        return sortAsc ? ra - rb : rb - ra;
    });
    grid.innerHTML = '';
    items.forEach(el => grid.appendChild(el));
    showToast(sortAsc ? '评分升序' : '评分降序');
});

// 全部电影页排序
document.getElementById('allSortBtn').addEventListener('click', function() {
    sortAsc = !sortAsc;
    const grid = document.getElementById('viewAllGrid');
    const items = [...grid.querySelectorAll('.category-movie-card')];
    items.sort((a,b) => {
        const ra = parseFloat(a.querySelector('.cat-rating').textContent);
        const rb = parseFloat(b.querySelector('.cat-rating').textContent);
        return sortAsc ? ra - rb : rb - ra;
    });
    grid.innerHTML = '';
    items.forEach(el => grid.appendChild(el));
    showToast(sortAsc ? '评分升序' : '评分降序');
});

// 个人中心功能入口
document.getElementById('gotoHistory').addEventListener('click', () => showToast('观看历史功能开发中'));
document.getElementById('gotoReviews').addEventListener('click', () => showToast('我的评价功能开发中'));

// ===== 播放器控制 =====
const videoArea = document.getElementById('videoArea');
const videoPlaceholder = document.getElementById('videoPlaceholder');
const videoControls = document.getElementById('videoControls');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressFill = document.getElementById('progressFill');
const progressThumb = document.getElementById('progressThumb');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const videoOverlay = document.getElementById('videoOverlay');

// 视频点击播放
document.getElementById('videoPlayBtn').addEventListener('click', function(e) {
    e.stopPropagation();
    startPlayback();
});
videoOverlay.addEventListener('click', () => {
    if (!playerState.playing) {
        startPlayback();
    } else {
        togglePlayPause();
    }
});

function startPlayback() {
    videoArea.classList.add('playing');
    playerState.playing = true;
    playerState.duration = 100;
    totalTimeEl.textContent = '01:40';
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    // 模拟进度
    startProgressSimulation();
}

function togglePlayPause() {
    playerState.playing = !playerState.playing;
    playPauseBtn.innerHTML = playerState.playing ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    if (playerState.playing) startProgressSimulation();
}

let progressInterval = null;
function startProgressSimulation() {
    if (progressInterval) clearInterval(progressInterval);
    progressInterval = setInterval(() => {
        if (!playerState.playing) { clearInterval(progressInterval); return; }
        playerState.currentTime += 0.5;
        if (playerState.currentTime >= playerState.duration) {
            playerState.currentTime = playerState.duration;
            clearInterval(progressInterval);
            playPauseBtn.innerHTML = '<i class="fas fa-redo"></i>';
            playerState.playing = false;
            return;
        }
        const pct = (playerState.currentTime / playerState.duration) * 100;
        progressFill.style.width = pct + '%';
        progressThumb.style.left = pct + '%';
        currentTimeEl.textContent = formatTime(playerState.currentTime);
    }, 500);
}

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

// 播放/暂停
playPauseBtn.addEventListener('click', togglePlayPause);

// 快退/快进
document.getElementById('rewindBtn').addEventListener('click', () => {
    playerState.currentTime = Math.max(0, playerState.currentTime - 10);
    updateProgressUI();
});
document.getElementById('forwardBtn').addEventListener('click', () => {
    playerState.currentTime = Math.min(playerState.duration, playerState.currentTime + 10);
    updateProgressUI();
});

function updateProgressUI() {
    const pct = (playerState.currentTime / playerState.duration) * 100;
    progressFill.style.width = pct + '%';
    progressThumb.style.left = pct + '%';
    currentTimeEl.textContent = formatTime(playerState.currentTime);
}

// 进度条点击
progressBar.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    playerState.currentTime = pct * playerState.duration;
    updateProgressUI();
});

// 音量
document.getElementById('volumeBtn').addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-volume-up')) {
        icon.className = 'fas fa-volume-mute';
    } else {
        icon.className = 'fas fa-volume-up';
    }
});

// 全屏
document.getElementById('fullscreenBtn').addEventListener('click', function() {
    const el = document.getElementById('playerPage');
    if (!document.fullscreenElement) {
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
});

// 首页分类点击事件（渲染时已绑定）

/* ===================================================================
   8. 初始化
   =================================================================== */

renderCategories();
renderPopularMovies();
renderNowPlaying();
renderHotTags();
renderHistory();
renderFavorites();
updateProfileStats();

// 初始显示首页
document.getElementById('homePage').classList.add('active');
document.getElementById('homePage').style.transform = 'translateX(0)';
document.getElementById('homePage').style.opacity = '1';

console.log('%c🎬 电影时光 App 已加载完成!', 'color:#007aff;font-size:16px;font-weight:bold;');

// 触摸优化
if ('ontouchstart' in window) {
    document.querySelectorAll('.category-card, .movie-card, .now-playing-card, .tab-item, .fav-card').forEach(el => {
        el.addEventListener('touchstart', function() { this.style.opacity = '0.7'; });
        el.addEventListener('touchend', function() { this.style.opacity = '1'; });
    });
}

}); // DOMContentLoaded end