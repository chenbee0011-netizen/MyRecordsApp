// ==========================================
// 200 句激勵金言資料庫與處理工具
// ==========================================

const quotesData = [
    // 一、 勇氣與力量篇 (1-50)
    { id: 1, category: "勇氣與力量", text: "你的時間有限，所以不要為別人而活。", author: "賈伯斯" },
    { id: 2, category: "勇氣與力量", text: "勇氣不是沒有恐懼，而是戰勝恐懼，跨越恐懼。", author: "曼德拉" },
    { id: 3, category: "勇氣與力量", text: "走得最慢的人，只要他不走回頭路，也比慢走的人走得快。", author: "伏爾泰" },
    { id: 4, category: "勇氣與力量", text: "痛苦只是暫時的，放棄卻是永恆的。", author: "蘭斯·阿姆斯壯" },
    { id: 5, category: "勇氣與力量", text: "寶劍鋒從磨礪出，梅花香自苦寒來。", author: "古訓" },
    { id: 6, category: "勇氣與力量", text: "成功的唯一祕訣，是堅持到最後一秒鐘。", author: "海明威" },
    { id: 7, category: "勇氣與力量", text: "當世界說「放棄」時，希望悄悄在耳邊說：「再試一次。」", author: "匿名" },
    { id: 8, category: "勇氣與力量", text: "困難像彈力球，你強它就弱，你弱它就強。", author: "羅曼·羅蘭" },
    { id: 9, category: "勇氣與力量", text: "生命中最大的光榮，不在於從不失敗，而在於每次跌倒後都能爬起來。", author: "孔子" },
    { id: 10, category: "勇氣與力量", text: "你必須成為你希望在世界上看到的改變。", author: "甘地" },
    { id: 11, category: "勇氣與力量", text: "天空雖有雲層，但太陽從未離開。", author: "泰戈爾" },
    { id: 12, category: "勇氣與力量", text: "人的潛能就像牙膏，擠一擠總是有的。", author: "魯迅" },
    { id: 13, category: "勇氣與力量", text: "沒有人能使你倒下，除非你自己的心先倒下。", author: "羅曼·羅蘭" },
    { id: 14, category: "勇氣與力量", text: "船停在港灣裡最安全，但那不是造船的目的。", author: "約翰·謝德" },
    { id: 15, category: "勇氣與力量", text: "偉大的靈魂，都有不屈的心智和寂寞的旅程。", author: "雨果" },
    { id: 16, category: "勇氣與力量", text: "不怕萬人阻擋，只怕自己投降。", author: "俗諺" },
    { id: 17, category: "勇氣與力量", text: "決定你人生高度的，不是你的能力，而是你的選擇。", author: "沙特" },
    { id: 18, category: "勇氣與力量", text: "狂風暴雨過後，彩虹才會出現。", author: "歌德" },
    { id: 19, category: "勇氣與力量", text: "莫道前路無知己，天下誰人不識君。", author: "高適" },
    { id: 20, category: "勇氣與力量", text: "走自己的路，讓別人去說吧！", author: "但丁" },
    { id: 21, category: "勇氣與力量", text: "即使爬到最高山上，一次也只能腳踏實地邁一步。", author: "伯頓" },
    { id: 22, category: "勇氣與力量", text: "心若向陽，無懼悲傷。", author: "三毛" },
    { id: 23, category: "勇氣與力量", text: "黑暗無法驅散黑暗，只有光明可以；仇恨無法驅散仇恨，只有愛可以。", author: "馬丁·路德·金" },
    { id: 24, category: "勇氣與力量", text: "人生最重要的不是我們身處何處，而是我們將前往何方。", author: "霍姆斯" },
    { id: 25, category: "勇氣與力量", text: "滴水穿石，不是力量大，而是功夫深。", author: "羅素" },
    { id: 26, category: "勇氣與力量", text: "願你出走半生，歸來仍是少年。", author: "蘇軾" },
    { id: 27, category: "勇氣與力量", text: "世界上只有一種真正的英雄，那就是認清生活的真相後依然熱愛生活。", author: "羅曼·羅蘭" },
    { id: 28, category: "勇氣與力量", text: "所有的打擊，都是未來的墊腳石。", author: "卡內基" },
    { id: 29, category: "勇氣與力量", text: "相信你能，你就已經成功了一半。", author: "羅斯福" },
    { id: 30, category: "勇氣與力量", text: "生活就像騎單車，要想保持平衡，就必須不斷前進。", author: "愛因斯坦" },
    { id: 31, category: "勇氣與力量", text: "別讓昨天的陰影，遮蔽了明天的陽光。", author: "狄更斯" },
    { id: 32, category: "勇氣與力量", text: "只要路是對的，就不怕路遠。", author: "馬雲" },
    { id: 33, category: "勇氣與力量", text: "哪裡有意志，哪裡就有出路。", author: "歐維德" },
    { id: 34, category: "勇氣與力量", text: "千里之行，始於足下。", author: "老子" },
    { id: 35, category: "勇氣與力量", text: "心的力量是巨大的，只要你想，就能創造奇蹟。", author: "海倫·凱勒" },
    { id: 36, category: "勇氣與力量", text: "越努力，越幸運。", author: "安東尼·麥金斯" },
    { id: 37, category: "勇氣與力量", text: "最黑暗的時刻，黎明就在眼前。", author: "雨果" },
    { id: 38, category: "勇氣與力量", text: "我們常常看到的風景，是心靈的鏡子。", author: "村上春樹" },
    { id: 39, category: "勇氣與力量", text: "失敗乃成功之母。", author: "漢書" },
    { id: 40, category: "勇氣與力量", text: "縱使艱難險阻，也阻擋不了前行的腳步。", author: "巴爾扎克" },
    { id: 41, category: "勇氣與力量", text: "人的價值，在於他貢獻了什麼，而不是他索取了什麼。", author: "愛因斯坦" },
    { id: 42, category: "勇氣與力量", text: "保持熱愛，奔赴山海。", author: "張愛玲" },
    { id: 43, category: "勇氣與力量", text: "成長是一場和自己的對決，贏了就是蛻變。", author: "龍應台" },
    { id: 44, category: "勇氣與力量", text: "不要等待機會，而要創造機會。", author: "培根" },
    { id: 45, category: "勇氣與力量", text: "生命的意義在於賦予它意義。", author: "薩特" },
    { id: 46, category: "勇氣與力量", text: "心若無處安放，到哪裡都是流浪。", author: "三毛" },
    { id: 47, category: "勇氣與力量", text: "頑強的毅力可以征服世界上任何一座高峰。", author: "狄更斯" },
    { id: 48, category: "勇氣與力量", text: "只有經歷地獄般的磨練，才能煉出創造天堂的力量。", author: "泰戈爾" },
    { id: 49, category: "勇氣與力量", text: "每一發奮鬥的背後，都有隨之而來的賞賜。", author: "蕭伯納" },
    { id: 50, category: "勇氣與力量", text: "做你自己，因為別人都有人了。", author: "王爾德" },

    // 二、 夢想與堅持篇 (51-100)
    { id: 51, category: "夢想與堅持", text: "追夢的人永遠年輕，因為他們的眼裡有光。", author: "村上春樹" },
    { id: 52, category: "夢想與堅持", text: "心之所向，素履以往，生如逆旅，一葦以航。", author: "七堇年" },
    { id: 53, category: "夢想與堅持", text: "夢想不會逃跑，會逃跑的永遠是你自己。", author: "宮崎駿" },
    { id: 54, category: "夢想與堅持", text: "世界上最快樂的事，莫過於為理想而奮鬥。", author: "蘇格拉底" },
    { id: 55, category: "夢想與堅持", text: "有夢想的人是睡不著的，沒夢想的人是睡不醒的。", author: "叔本華" },
    { id: 56, category: "夢想與堅持", text: "志之所趨，無遠弗届，窮山鉅海，不能限也。", author: "曾國藩" },
    { id: 57, category: "夢想與堅持", text: "凡事豫則立，不豫則廢。", author: "禮記" },
    { id: 58, category: "夢想與堅持", text: "星光不負趕路人，時光不負有心人。", author: "海子" },
    { id: 59, category: "夢想與堅持", text: "成功的祕訣在於永不改變其既定的目標。", author: "狄斯累利" },
    { id: 60, category: "夢想與堅持", text: "人生因夢想而偉大，因行動而真實。", author: "吉格勒" },
    { id: 61, category: "夢想與堅持", text: "當你真心渴望某樣東西時，整個宇宙都會聯合起來幫你。", author: "保羅·科爾賀" },
    { id: 62, category: "夢想與堅持", text: "窮且益堅，不墜青雲之志。", author: "王勃" },
    { id: 63, category: "夢想與堅持", text: "堅持不懈的行動，是通往成功的唯一橋樑。", author: "拿破崙·希爾" },
    { id: 64, category: "夢想與堅持", text: "把每一個平凡的日子，過成閃光的詩。", author: "席慕蓉" },
    { id: 65, category: "夢想與堅持", text: "只要方向正確，慢一點也沒關係。", author: "村上春樹" },
    { id: 66, category: "夢想與堅持", text: "立志用功如種樹然，方其根芽，猶能孕育大樹。", author: "王陽明" },
    { id: 67, category: "夢想與堅持", text: "偉大的事業，需要決心、信心、耐心和毅力。", author: "列寧" },
    { id: 68, category: "夢想與堅持", text: "不要輕言放棄，否則對不起曾經努力的自己。", author: "張嘉佳" },
    { id: 69, category: "夢想與堅持", text: "追逐夢想的路上，最怕的不是失敗，而是從未開始。", author: "安東尼" },
    { id: 70, category: "夢想與堅持", text: "人生最大的遺憾，莫過於「我本可以」。", author: "羅斯福" },
    { id: 71, category: "夢想與堅持", text: "理想是石，敲出星星之火；理想是火，點燃熄滅的燈。", author: "艾青" },
    { id: 72, category: "夢想與堅持", text: "莫等閒，白了少年頭，空悲切。", author: "岳飛" },
    { id: 73, category: "夢想與堅持", text: "讓未來來，讓過去過去。", author: "張愛玲" },
    { id: 74, category: "夢想與堅持", text: "行動是治癒恐懼的良藥，而猶豫、拖延將不斷滋養恐懼。", author: "卡耐基" },
    { id: 75, category: "夢想與堅持", text: "走得最快，往往不是走得最直線，而是最專注的人。", author: "福特" },
    { id: 76, category: "夢想與堅持", text: "成功的道路上，往往人跡罕至，因為堅持的人不多。", author: "蕭伯納" },
    { id: 77, category: "夢想與堅持", text: "每一顆星辰，都在黑暗中默默發光。", author: "梵谷" },
    { id: 78, category: "夢想與堅持", text: "不經一番寒徹骨，焉得梅花撲鼻香。", author: "黃檗禪師" },
    { id: 79, category: "夢想與堅持", text: "你的夢想有多大，你的舞台就有多廣。", author: "莎士比亞" },
    { id: 80, category: "夢想與堅持", text: "咬定青山不放鬆，立根原在破岩中。", author: "鄭板橋" },
    { id: 81, category: "夢想與堅持", text: "成功不是將來才有的，而是從決定去做的那一刻起，持續累積而成的。", author: "海明威" },
    { id: 82, category: "夢想與堅持", text: "追逐光芒的人，自己也會身披光芒。", author: "幾米" },
    { id: 83, category: "夢想與堅持", text: "生命不是要超越別人，而是要超越自己。", author: "老子" },
    { id: 84, category: "夢想與堅持", text: "天生我材必有用，千金散盡還復來。", author: "李白" },
    { id: 85, category: "夢想與堅持", text: "只要心中有遠方，哪裡都是起點。", author: "三毛" },
    { id: 86, category: "夢想與堅持", text: "不積跬步，無以至千里；不積小流，無以成江海。", author: "荀子" },
    { id: 87, category: "夢想與堅持", text: "把夢想放大，把恐懼縮小。", author: "華特·迪士尼" },
    { id: 88, category: "夢想與堅持", text: "志向高遠的人，往往能在平凡中創造偉大。", author: "拿破崙" },
    { id: 89, category: "夢想與堅持", text: "堅持是最好的天賦。", author: "村上春樹" },
    { id: 90, category: "夢想與堅持", text: "沒有什麼能阻擋一顆向往自由與夢想的心。", author: "雨果" },
    { id: 91, category: "夢想與堅持", text: "如果你看不到光芒，那就讓自己成為一道光。", author: "魯迅" },
    { id: 92, category: "夢想與堅持", text: "船到橋頭自然直，但前提是你要把船劃過去。", author: "俗諺" },
    { id: 93, category: "夢想與堅持", text: "成功的背後，是無數次的默默耕耘與堅持。", author: "培根" },
    { id: 94, category: "夢想與堅持", text: "你的未來，由你今天的每一個決定所塑造。", author: "史蒂芬·柯維" },
    { id: 95, category: "夢想與堅持", text: "寧可因夢想而忙碌，也不要因空虛而荒蕪。", author: "富蘭克林" },
    { id: 96, category: "夢想與堅持", text: "夢想是用汗水和淚水灌溉出來的奇蹟。", author: "愛迪生" },
    { id: 97, category: "夢想與堅持", text: "腳踏實地，仰望星空。", author: "黑格爾" },
    { id: 98, category: "夢想與堅持", text: "凡是過往，皆為序章。", author: "莎士比亞" },
    { id: 99, category: "夢想與堅持", text: "哪怕只有微弱的光，也要勇敢地燃燒。", author: "高爾基" },
    { id: 100, category: "夢想與堅持", text: "你若盛開，清風自來。", author: "三毛" },

    // 三、 智慧與人生篇 (101-150)
    { id: 101, category: "智慧與人生", text: "知人者智，自知者明。", author: "老子" },
    { id: 102, category: "智慧與人生", text: "學而不思則罔，思而不學則殆。", author: "孔子" },
    { id: 103, category: "智慧與人生", text: "人生如逆旅，我亦是行人。", author: "蘇軾" },
    { id: 104, category: "智慧與人生", text: "靜以修身，俭以養德。", author: "諸葛亮" },
    { id: 105, category: "智慧與人生", text: "生活的真諦在於簡單，而簡單是最高級的複雜。", author: "達文西" },
    { id: 106, category: "智慧與人生", text: "海納百川，有容乃大；壁立千仞，無欲則剛。", author: "林則徐" },
    { id: 107, category: "智慧與人生", text: "走過的路，每一步都算數。", author: "張小嫻" },
    { id: 108, category: "智慧與人生", text: "塞翁失馬，焉知非福。", author: "淮南子" },
    { id: 109, category: "智慧與人生", text: "寬容是人類心靈中最高貴的美德。", author: "莎士比亞" },
    { id: 110, category: "智慧與人生", text: "世事茫茫，光陰有限，算來何必奔忙。", author: "曹雪芹" },
    { id: 111, category: "智慧與人生", text: "寵辱不驚，看庭前花開花落；去留無意，望天空雲卷雲舒。", author: "洪應明" },
    { id: 112, category: "智慧與人生", text: "懂得感恩的人，才能擁有真正的富足。", author: "蒙田" },
    { id: 113, category: "智慧與人生", text: "世界上最寬闊的是海洋，比海洋更寬闊的是天空，比天空更寬闊的是人的胸懷。", author: "雨果" },
    { id: 114, category: "智慧與人生", text: "業精於勤，荒於嬉；行成於思，毀於隨。", author: "韓愈" },
    { id: 115, category: "智慧與人生", text: "聰明的人自我學習，智者從歷史中學習。", author: "俾斯麥" },
    { id: 116, category: "智慧與人生", text: "人生就像一盒巧克力，你永遠不知道下一顆會吃到什麼口味。", author: "《阿甘正傳》" },
    { id: 117, category: "智慧與人生", text: "敏而好學，不恥下問。", author: "孔子" },
    { id: 118, category: "智慧與人生", text: "時間會沉澱最真的情感，風雨會考驗最暖的陪伴。", author: "張愛玲" },
    { id: 119, category: "智慧與人生", text: "幸福不是得到你想要的一切，而是珍惜你所擁有的一切。", author: "托爾斯泰" },
    { id: 120, category: "智慧與人生", text: "觀念改變命運，態度決定高度。", author: "拿破崙·希爾" },
    { id: 121, category: "智慧與人生", text: "不亂於心，不困於情，不畏將來，不念過往。", author: "豐子愷" },
    { id: 122, category: "智慧與人生", text: "人生短短幾十年，不要給自己留下太多的遺憾。", author: "巴金" },
    { id: 123, category: "智慧與人生", text: "真正的智慧，是知道自己有多無知。", author: "蘇格拉底" },
    { id: 124, category: "智慧與人生", text: "隨緣不是隨波逐流，而是盡人事聽天命。", author: "星雲大師" },
    { id: 125, category: "智慧與人生", text: "聖人無常心，以百姓心為心。", author: "老子" },
    { id: 126, category: "智慧與人生", text: "慈悲心是最好的防護罩。", author: "證嚴法師" },
    { id: 127, category: "智慧與人生", text: "傾聽是最好的溝通，理解是最好的安慰。", author: "卡內基" },
    { id: 128, category: "智慧與人生", text: "多一份寬容，就多一份理解；多一份善良，就多一份愛心。", author: "盧梭" },
    { id: 129, category: "智慧與人生", text: "生活不是等待暴風雨過去，而是學會在雨中跳舞。", author: "維維安·格林" },
    { id: 130, category: "智慧與人生", text: "禍兮福之所倚，福兮禍之所伏。", author: "老子" },
    { id: 131, category: "智慧與人生", text: "人生就像一本書，愚蠢的人隨便翻過，聰明的人仔細閱讀。", author: "叔本華" },
    { id: 132, category: "智慧與人生", text: "善待他人，就是善待自己。", author: "培根" },
    { id: 133, category: "智慧與人生", text: "真正的強者，是含著淚水依然在奔跑的人。", author: "東野圭吾" },
    { id: 134, category: "智慧與人生", text: "看得開，想得透，生活才能過得輕鬆。", author: "白岩松" },
    { id: 135, category: "智慧與人生", text: "一切都會過去，就像風吹過一樣。", author: "托爾斯泰" },
    { id: 136, category: "智慧與人生", text: "人生最美妙的風景，是內心的淡定與從容。", author: "楊絳" },
    { id: 137, category: "智慧與人生", text: "凡事不必太急，時間會給出最好的答案。", author: "塞內卡" },
    { id: 138, category: "智慧與人生", text: "活在當下，珍惜眼前人。", author: "海明威" },
    { id: 139, category: "智慧與人生", text: "快樂的祕訣，不是做你喜歡的事，而是去喜歡你所做的事。", author: "巴金" },
    { id: 140, category: "智慧與人生", text: "知足者貧賤亦樂，不知足者富貴亦憂。", author: "紀曉嵐" },
    { id: 141, category: "智慧與人生", text: "內心豐富的人，自帶耀眼的光芒。", author: "亦舒" },
    { id: 142, category: "智慧與人生", text: "學會放手，才能擁抱更廣闊的天空。", author: "宮崎駿" },
    { id: 143, category: "智慧與人生", text: "人生的道路雖然漫長，但緊要處常常只有幾步。", author: "柳青" },
    { id: 144, category: "智慧與人生", text: "獨處是一場靈魂的修行。", author: "梭羅" },
    { id: 145, category: "智慧與人生", text: "真正的成熟，是學會溫柔地對待這個世界。", author: "村上春樹" },
    { id: 146, category: "智慧與人生", text: "隨遇而安，是一種超然的生活態度。", author: "林語堂" },
    { id: 147, category: "智慧與人生", text: "貧而無諂，富而無驕，未若貧而樂，富而好禮者也。", author: "孔子" },
    { id: 148, category: "智慧與人生", text: "生活總是給人希望，只要你願意抬頭看。", author: "東野圭吾" },
    { id: 149, category: "智慧與人生", text: "用善意的心眼看世界，世界就會對你微笑。", author: "狄更斯" },
    { id: 150, category: "智慧與人生", text: "世事洞明皆學問，人情練達即文章。", author: "曹雪芹" },

    // 四、 溫暖與療癒篇 (151-200)
    { id: 151, category: "溫暖與療癒", text: "歲月靜好，現世安穩。", author: "張愛玲" },
    { id: 152, category: "溫暖與療癒", text: "累了就停下來歇一歇，月亮也會偶爾躲進雲裡。", author: "網易雲熱評" },
    { id: 153, category: "溫暖與療癒", text: "你值得世間所有的美好與溫柔。", author: "幾米" },
    { id: 154, category: "溫暖與療癒", text: "慢下來，靈魂才能跟上身體的腳步。", author: "印第安諺語" },
    { id: 155, category: "溫暖與療癒", text: "照顧好自己，你對這個世界很重要。", author: "村上春樹" },
    { id: 156, category: "溫暖與療癒", text: "即使生活給你一百個理由哭泣，你也要找一個理由笑。", author: "笛卡兒" },
    { id: 157, category: "溫暖與療癒", text: "每個靈魂都是獨一無二的星星，有自己的軌跡。", author: "梵谷" },
    { id: 158, category: "溫暖與療癒", text: "只要心裡有光，在哪裡都是春天。", author: "三毛" },
    { id: 159, category: "溫暖與療癒", text: "允許自己偶爾脆弱，因為你也是血肉之軀。", author: "張小嫻" },
    { id: 160, category: "溫暖與療癒", text: "溫柔地對待世界，世界也會以溫柔擁抱你。", author: "宮崎駿" },
    { id: 161, category: "溫暖與療癒", text: "別太累了，身體是革命的本錢。", author: "毛澤東" },
    { id: 162, category: "溫暖與療癒", text: "你的善良，要帶一點鋒芒。", author: "席慕蓉" },
    { id: 163, category: "溫暖與療癒", text: "縱使生活千瘡百孔，內心也要繁花似錦。", author: "冰心" },
    { id: 164, category: "溫暖與療癒", text: "風雨人生，淡然處之；溫暖相伴，歲月無恙。", author: "汪國真" },
    { id: 165, category: "溫暖與療癒", text: "生活或許有遺憾，但未來依舊閃閃發光。", author: "安東尼" },
    { id: 166, category: "溫暖與療癒", text: "別忘了答應自己要做的事情，別忘了自己想去的地方。", author: "七堇年" },
    { id: 167, category: "溫暖與療癒", text: "哪怕生活是一地雞毛，也要把它扎成漂亮的雞毛撣子。", author: "老舍" },
    { id: 168, category: "溫暖與療癒", text: "願你歷經千帆，歸來仍覺人間值得。", author: "林徽因" },
    { id: 169, category: "溫暖與療癒", text: "做一個溫暖的人，不憂傷，不慌張。", author: "白落梅" },
    { id: 170, category: "溫暖與療癒", text: "累了就抱抱自己，你已經做得很好了。", author: "幾米" },
    { id: 171, category: "溫暖與療癒", text: "保持微笑，因為生活是如此美好，值得我們去微笑。", author: "奧黛麗·赫本" },
    { id: 172, category: "溫暖與療癒", text: "願你在喧囂的世界裡，找到內心的寧靜。", author: "梭羅" },
    { id: 173, category: "溫暖與療癒", text: "每一朵花都有盛開的權利，你也是。", author: "泰戈爾" },
    { id: 174, category: "溫暖與療癒", text: "哭泣不代表懦弱，只代表你堅強了太久。", author: "張愛玲" },
    { id: 175, category: "溫暖與療癒", text: "有些路，只能一個人走，但沿途的風景也很美。", author: "村上春樹" },
    { id: 176, category: "溫暖與療癒", text: "給自己一個擁抱，告訴自己今天辛苦了。", author: "席慕蓉" },
    { id: 177, category: "溫暖與療癒", text: "微笑是無需翻譯的語言。", author: "康德" },
    { id: 178, category: "溫暖與療癒", text: "宇宙山河浪漫，生活點滴溫暖，都值得我們全力以赴。", author: "沈從文" },
    { id: 179, category: "溫暖與療癒", text: "做一個向陽而生的女子（男子），不負時光。", author: "三毛" },
    { id: 180, category: "溫暖與療癒", text: "讓心靈放個假，去聽聽微風的呢喃。", author: "林語堂" },
    { id: 181, category: "溫暖與療癒", text: "你的存在本身，就是一種美好的禮跡。", author: "艾默生" },
    { id: 182, category: "溫暖與療癒", text: "只要還有明天，今天就永遠是起跑線。", author: "培根" },
    { id: 183, category: "溫暖與療癒", text: "喝一杯溫水，聽一首老歌，生活其實可以很溫柔。", author: "朱自清" },
    { id: 184, category: "溫暖與療癒", text: "願你每一天醒來，都充滿對明天的期待。", author: "海明威" },
    { id: 185, category: "溫暖與療癒", text: "溫柔是世界上最強大的力量。", author: "甘地" },
    { id: 186, category: "溫暖與療癒", text: "偶爾慢一點沒關係，花開也有它的時序。", author: "汪曾祺" },
    { id: 187, category: "溫暖與療癒", text: "把不開心的事揉進紙團，隨風扔掉。", author: "幾米" },
    { id: 188, category: "溫暖與療癒", text: "只要心裡有愛，哪裡都是歸宿。", author: "席慕蓉" },
    { id: 189, category: "溫暖與療癒", text: "靜靜地開花，默默地結果，不爭不搶，自有芳香。", author: "林清玄" },
    { id: 190, category: "溫暖與療癒", text: "願你的世界，永遠晴朗溫暖。", author: "張小嫻" },
    { id: 191, category: "溫暖與療癒", text: "只要抬頭，天空就一直在那裡安慰你。", author: "宮崎駿" },
    { id: 192, category: "溫暖與療癒", text: "做一個快樂的自己，不迎合，不強求。", author: "亦舒" },
    { id: 193, category: "溫暖與療癒", text: "晚風吹人醒，萬事藏心底。", author: "木心" },
    { id: 194, category: "溫暖與療癒", text: "你的笑容，是冬日裡最暖的光。", author: "泰戈爾" },
    { id: 195, category: "溫暖與療癒", text: "每一天都是新的一頁，寫下你想寫的故事。", author: "安徒生" },
    { id: 196, category: "溫暖與療癒", text: "精煉愛情——愛自己，是一生浪漫的開始。", author: "王爾德" },
    { id: 197, category: "溫暖與療癒", text: "願你在孤獨的時候，也能被世界溫柔以待。", author: "村上春樹" },
    { id: 198, category: "溫暖與療癒", text: "把生活的瑣碎，過成詩意的日常。", author: "沈從文" },
    { id: 199, category: "溫暖與療癒", text: "哪怕生活再平凡，你也是自己生命中的主角。", author: "魯迅" },
    { id: 200, category: "溫暖與療癒", text: "今天也要元氣滿滿地加油呀！", author: "匿名" }
];

// ==========================================
// 實用功能函式 (Helper Functions)
// ==========================================

/**
 * 1. 隨機取得一句金句
 * @returns {Object} 包含 id, category, text, author 的物件
 */
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    return quotesData[randomIndex];
}

/**
 * 2. 根據分類取得金句列表
 * @param {string} categoryName - 分類名稱 ("勇氣與力量", "夢想與堅持", "智慧與人生", "溫暖與療癒")
 * @returns {Array} 該分類的金句陣列
 */
function getQuotesByCategory(categoryName) {
    return quotesData.filter(q => q.category === categoryName);
}

/**
 * 3. 根據關鍵字搜尋金句 (可搜尋內文或作者)
 * @param {string} keyword - 關鍵字
 * @returns {Array} 符合條件的金句陣列
 */
function searchQuotes(keyword) {
    return quotesData.filter(q => 
        q.text.includes(keyword) || q.author.includes(keyword)
    );
}

// ==========================================
// 範例測試
// ==========================================
console.log("--- 隨機一句 ---");
console.log(getRandomQuote());

console.log("--- 搜尋「村上春樹」的作品 ---");
console.log(searchQuotes("村上春樹"));
