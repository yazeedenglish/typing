       /**************************************************************
         * 1. COMPREHENSIVE WORD DICTIONARY FOR ALL 100 SENTENCES
         **************************************************************/
       const WORD_DICTIONARY = {
    // ================= ARTICLES, PRONOUNS & DETERMINERS =================
    "a": "أداة تنكير",
    "an": "أداة تنكير",
    "the": "الـ (أداة التعريف)",
    "i": "أنا",
    "my": "لي / الخاص بي",
    "me": "ني / لي",
    "we": "نحن",
    "our": "لنا / الخاص بنا",
    "us": "نا / لنا",
    "he": "هو",
    "his": "له / الخاص به",
    "she": "هي",
    "her": "لها / ها",
    "it": "هو / هي (لغير العاقل)",
    "they": "هم",
    "their": "لهم / الخاص بهم",
    "them": "هم / إياهم",
    "this": "هذا / هذه",
    "that": "ذلك / تلك / أنَّ",
    "each": "كل",
    "every": "كل",
    "all": "كل / جميع",
    "some": "بعض",
    "many": "العديد من",
    "more": "أكثر",
    "both": "كلاهما",
    "another": "آخر",
    "other": "آخر / أخرى",
    "each": "كل",
    "one": "واحد",
    "nothing": "لا شيء",
    "something": "شيء ما",
    "whether": "ما إذا",
    "when": "عندما",
    "while": "بينما",
    "which": "الذي / التي / أيّ",
    "who": "من / الذي",
    "what": "ماذا / ما",
    "how": "كيف",
    "where": "أين / حيث",
    "because": "لأن",
    "if": "إذا",
    "and": "و",
    "or": "أو",
    "but": "لكن",
    "then": "ثم",
    "than": "من (للمقارنة)",
    "as": "كما / بصفته",
    "not": "ليس / لا",
    "no": "لا",
    "yes": "نعم",

    // ================= PREPOSITIONS =================
    "to": "إلى / لـ",
    "in": "في",
    "on": "على / في",
    "at": "في / عند",
    "for": "من أجل / لـ",
    "with": "مع / بـ",
    "from": "من",
    "of": "من / الخاص بـ",
    "by": "بواسطة / بجانب / بحلول",
    "about": "عن / حول",
    "after": "بعد",
    "before": "قبل",
    "near": "بالقرب من",
    "inside": "داخل",
    "into": "إلى داخل",
    "through": "عبر / من خلال",
    "during": "أثناء",
    "without": "بدون",
    "between": "بين",
    "around": "حول",
    "over": "فوق / على امتداد",
    "under": "تحت",
    "along": "على امتداد",
    "onto": "إلى فوق / على",
    "within": "ضمن / في غضون",
    "across": "عبر",
    "behind": "خلف",
    "beside": "بجانب",
    "nearby": "بالقرب",
    "out": "خارجًا",
    "off": "إيقاف / بعيدًا عن",
    "away": "بعيدًا",
    "back": "عودة / إلى الخلف",
    "together": "معًا",
    "aboard": "على متن",
    "around": "حول",

    // ================= VERBS: COMMON ACTIONS =================
    "be": "يكون",
    "is": "يكون / تكون",
    "are": "يكونون / تكونون",
    "am": "أكون",
    "was": "كان / كانت",
    "were": "كانوا / كنتم",
    "been": "كان / قد كان",
    "have": "لديّ / يملك",
    "has": "لديه / لديها",
    "had": "كان لديه",
    "do": "يفعل",
    "does": "يفعل",
    "did": "فعل",
    "make": "يصنع / يُعدّ",
    "makes": "يصنع / يُعدّ",
    "made": "صنع / أعدّ",
    "get": "يحصل على / يصبح",
    "gets": "يحصل على / يصبح",
    "got": "حصل على",
    "put": "يضع",
    "take": "يأخذ",
    "takes": "يأخذ",
    "bring": "يحضر",
    "brings": "يحضر",
    "choose": "يختار",
    "chooses": "يختار",
    "picked": "اختار",
    "pick": "يختار / يلتقط",
    "find": "يجد",
    "finds": "يجد",
    "leave": "يغادر / يترك",
    "leaves": "يغادر",
    "return": "يعود",
    "returns": "يعود",
    "walk": "يمشي",
    "walks": "يمشي",
    "drive": "يقود",
    "drives": "يقود",
    "sit": "يجلس",
    "sits": "يجلس",
    "stand": "يقف",
    "wait": "ينتظر",
    "waits": "ينتظر",
    "open": "يفتح",
    "opens": "يفتح",
    "close": "يغلق",
    "closes": "يغلق",
    "wash": "يغسل",
    "washes": "يغسل",
    "brush": "يفرش / ينظف بالفرشاة",
    "brushes": "يفرش / ينظف بالفرشاة",
    "wake": "يستيقظ / يوقظ",
    "wakes": "يستيقظ / يوقظ",
    "splash": "يرشّ / ينثر الماء",
    "splashing": "رشّ الماء",
    "drink": "يشرب",
    "drinks": "يشرب",
    "eat": "يأكل",
    "eats": "يأكل",
    "read": "يقرأ",
    "reads": "يقرأ",
    "write": "يكتب",
    "writes": "يكتب",
    "talk": "يتحدث",
    "talks": "يتحدث",
    "speak": "يتحدث / يتكلم",
    "speaks": "يتحدث",
    "ask": "يسأل",
    "asks": "يسأل",
    "answer": "يجيب / إجابة",
    "answers": "يجيب / إجابات",
    "help": "يساعد",
    "helps": "يساعد",
    "learn": "يتعلم",
    "learns": "يتعلم",
    "study": "يدرس / يذاكر",
    "studies": "يدرس",
    "work": "يعمل / عمل",
    "works": "يعمل",
    "play": "يلعب / يعزف",
    "plays": "يلعب / يعزف",
    "pay": "يدفع",
    "pays": "يدفع",
    "check": "يتحقق من / يفحص",
    "checks": "يتحقق من / يفحص",
    "keep": "يحافظ على / يحتفظ بـ",
    "keeps": "يحافظ على / يحتفظ بـ",
    "feel": "يشعر",
    "feels": "يشعر / يبدو",
    "seem": "يبدو",
    "seems": "يبدو",
    "look": "ينظر / يبدو",
    "looks": "ينظر / يبدو",
    "smell": "يشم / رائحة",
    "smells": "تفوح رائحته / يشم",
    "taste": "يتذوق / مذاق",
    "tastes": "مذاقه / يتذوق",
    "sound": "يبدو / صوت",
    "sounds": "يبدو / أصوات",
    "show": "يعرض / يُظهر",
    "shows": "يعرض / يُظهر",
    "share": "يشارك / يتقاسم",
    "shares": "يشارك",
    "finish": "ينهي",
    "finishes": "ينهي",
    "start": "يبدأ",
    "starts": "يبدأ",
    "begin": "يبدأ",
    "begins": "يبدأ",
    "continue": "يستمر",
    "continues": "يستمر",
    "stop": "يتوقف",
    "stops": "يتوقف",
    "move": "يتحرك / ينقل",
    "moves": "يتحرك",
    "grow": "ينمو / يطوّر",
    "grows": "ينمو",
    "build": "يبني",
    "builds": "يبني",
    "improve": "يحسّن / يتحسن",
    "improves": "يحسّن / يتحسن",
    "develop": "يطوّر",
    "develops": "يطوّر",
    "change": "يتغير / يغيّر",
    "changes": "يتغير / يغيّر",
    "turn": "يحوّل / يدور",
    "turns": "يحوّل / يدور",
    "avoid": "يتجنب",
    "avoids": "يتجنب",
    "reduce": "يقلل",
    "reduces": "يقلل",
    "allow": "يسمح",
    "allows": "يسمح",
    "require": "يتطلب",
    "requires": "يتطلب",
    "depend": "يعتمد",
    "depends": "يعتمد",
    "remain": "يبقى",
    "remains": "يبقى",
    "become": "يصبح",
    "becomes": "يصبح",
    "feel": "يشعر",
    "plan": "يخطط / خطة",
    "plans": "يخطط / خطط",
    "prepare": "يجهز / يستعد",
    "prepares": "يجهز / يستعد",
    "pack": "يحزم / يجهز",
    "packs": "يحزم / يجهز",
    "unpack": "يفرغ الأمتعة",
    "unpacks": "يفرغ الأمتعة",
    "wrap": "يلفّ",
    "wraps": "يلفّ",
    "load": "يحمّل",
    "loads": "يحمّل",
    "download": "ينزّل",
    "downloads": "ينزّل",
    "compare": "يقارن",
    "compares": "يقارن",
    "track": "يتابع / يسجل",
    "tracks": "يتابع / يسجل",
    "save": "يدخر / يحفظ",
    "saves": "يدخر / يحفظ",
    "spend": "ينفق / يقضي وقتًا",
    "spends": "ينفق / يقضي وقتًا",
    "invest": "يستثمر",
    "invests": "يستثمر",
    "deliver": "يقدم / يوصل",
    "delivers": "يقدم / يوصل",
    "reach": "يصل إلى",
    "reaches": "يصل إلى",
    "adapt": "يتكيف",
    "adapts": "يتكيف",
    "resolve": "يحلّ",
    "resolves": "يحلّ",
    "prevent": "يمنع",
    "prevents": "يمنع",
    "correct": "يصحح",
    "corrects": "يصحح",
    "recognize": "يقدّر / يتعرف على",
    "recognizing": "تقدير / التعرف على",
    "encourage": "يشجع",
    "encourages": "يشجع",
    "inspire": "يلهم",
    "inspires": "يلهم",
    "capture": "يجذب / يلتقط",
    "captures": "يجذب / يلتقط",
    "convey": "ينقل / يعبر عن",
    "reinforce": "يعزز",
    "reinforces": "يعزز",
    "broaden": "يوسّع",
    "broadens": "يوسّع",
    "strengthen": "يقوي",
    "strengthens": "يقوي",
    "practise": "يمارس / يتدرب",
    "practice": "يمارس / ممارسة",
    "protect": "يحمي",
    "protecting": "حماية",
    "appreciate": "يقدّر",
    "appreciates": "يقدّر",
    "applauds": "يصفق",
    "applaud": "يصفق",
    "resonate": "يترك أثرًا / يتردد صداه",
    "compromise": "يُخلّ بـ / يتنازل عن",
    "compromising": "الإخلال بـ / التنازل عن",
    "delegate": "يفوّض",
    "delegating": "تفويض",
    "navigate": "يتعامل مع / يشق طريقه",
    "navigating": "التعامل مع / شق الطريق",
    "scale": "يوسّع نطاق العمل",
    "scaling": "توسيع نطاق العمل",
    "found": "يؤسس",
    "founders": "المؤسسون",
    "fund": "يموّل",
    "funds": "يموّل / أموال",
    "funding": "تمويل",
    "test": "يختبر",
    "tests": "يختبر",
    "examine": "يفحص",
    "examines": "يفحص",
    "listen": "يستمع",
    "listens": "يستمع",
    "pour": "يسكب",
    "pours": "يسكب",
    "gather": "يجتمع / يجمع",
    "gathers": "يجتمع / يجمع",
    "celebrate": "يحتفل",
    "celebrates": "يحتفل",
    "applauds": "يصفق",
    "wind": "يلتف / ينعطف",
    "winds": "يلتف / ينعطف",
    "line": "يصطف على امتداد / طابور",
    "lines": "يصطف على امتداد",
    "drop": "ينزل / يُسقط",
    "drops": "ينزل / يُسقط",
    "silence": "يكتم الصوت / صمت",
    "silences": "يكتم الصوت",
    "shut": "يغلق",
    "shuts": "يغلق",
    "cool": "يبرّد / يهدأ",
    "cooling": "التهدئة / التبريد",
    "lift": "يرفع",
    "lifts": "يرفع",
    "applies": "ينطبق / يطبق",
    "belong": "ينتمي",
    "belongs": "ينتمي",
    "queue": "يصطف / طابور",
    "queues": "يصطف",
    "applies": "ينطبق / يطبق",
    "leads": "يؤدي إلى / يقود",
    "lead": "يقود / يؤدي إلى",
    "earn": "يكسب",
    "earns": "يكسب",
    "learn": "يتعلم",
    "learning": "التعلم",
    "breathe": "يتنفس",
    "breathing": "التنفس",
    "relax": "يسترخي",
    "relaxes": "يسترخي",
    "returning": "العودة",
    "making": "إعداد / صنع",
    "running": "الجري / التشغيل",
    "reading": "القراءة",
    "moving": "الانتقال / التحرك",

    // ================= PHRASAL VERBS & EXPRESSIONS =================
    "wake up": "يستيقظ",
    "get dressed": "يرتدي ملابسه",
    "sit down": "يجلس",
    "look around": "يتجول / ينظر حوله",
    "pick up": "يلتقط / يشتري",
    "put away": "يعيد إلى مكانه",
    "turn off": "يطفئ",
    "shut down": "يغلق / يوقف التشغيل",
    "take off": "يقلع / يخلع",
    "drop off": "يوصل / ينزل شخصًا",
    "fill with": "يملأ بـ",
    "set the table": "يجهز المائدة",
    "take notes": "يدوّن الملاحظات",
    "feel better": "يشعر بتحسن",
    "get some rest": "يحصل على قسط من الراحة",
    "leave behind": "يترك خلفه",
    "on time": "في الموعد",
    "the night before": "في الليلة السابقة",
    "by card": "باستخدام البطاقة",
    "by the window": "بجانب النافذة",
    "peace of mind": "راحة البال",
    "stage fright": "رهبة المسرح",
    "window seat": "مقعد بجانب النافذة",
    "coffee break": "استراحة قهوة",
    "carry-on bag": "حقيبة يد للسفر",
    "heart rate": "معدل ضربات القلب",
    "risk of injury": "خطر الإصابة",
    "emergency fund": "صندوق الطوارئ",
    "late fee": "رسوم التأخير",
    "market conditions": "ظروف السوق",
    "angel investor": "مستثمر ملائكي",
    "market research": "دراسة السوق",
    "business decision": "قرار تجاري",
    "prototype": "نموذج أولي",
    "target audience": "الجمهور المستهدف",
    "key point": "نقطة أساسية",
    "constructive feedback": "ملاحظات بنّاءة",
    "team member": "عضو في الفريق",
    "personal growth": "النمو الشخصي",
    "small steps": "خطوات صغيرة",
    "lasting progress": "تقدم مستمر",
    "impulse purchase": "شراء اندفاعي",
    "monthly expenses": "المصاريف الشهرية",
    "financial planning": "التخطيط المالي",
    "remote work": "العمل عن بُعد",
    "cloud tools": "الأدوات السحابية",
    "video call": "مكالمة فيديو",
    "thank-you email": "رسالة شكر عبر البريد الإلكتروني",
    "coffee shop": "مقهى",
    "main gate": "البوابة الرئيسية",
    "old town": "البلدة القديمة",
    "city center": "وسط المدينة",
    "travel documents": "وثائق السفر",
    "flight prices": "أسعار الرحلات الجوية",
    "passport requirements": "متطلبات جواز السفر",
    "visa requirements": "متطلبات التأشيرة",
    "green vegetables": "الخضراوات الخضراء",
    "paper bags": "أكياس ورقية",
    "chicken soup": "حساء الدجاج",
    "orange juice": "عصير البرتقال",
    "fresh bread": "خبز طازج",
    "chocolate cake": "كعكة الشوكولاتة",
    "protein shake": "مخفوق البروتين",
    "new apartment": "شقة جديدة",
    "fragile items": "أغراض قابلة للكسر",
    "personal life": "الحياة الشخصية",
    "digital advertising": "الإعلانات الرقمية",
    "sustainable profits": "أرباح مستدامة",
    "sustainable success": "نجاح مستدام",
    "public speaking": "التحدث أمام الجمهور / فن الإلقاء",
    "eye contact": "التواصل البصري",
    "body language": "لغة الجسد",
    "well-designed": "مصمم بعناية",
    "well-timed": "في التوقيت المناسب",
    "long-term": "طويل الأجل",
    "short-term": "قصير الأجل",
    "offline maps": "خرائط دون اتصال بالإنترنت",
    "video call": "مكالمة فيديو",
    "carry-on": "محمول / حقيبة يد للطائرة",

    // ================= ADVERBS & TIME =================
    "always": "دائمًا",
    "usually": "عادةً",
    "often": "غالبًا",
    "sometimes": "أحيانًا",
    "never": "أبدًا",
    "daily": "يوميًا",
    "weekly": "أسبوعيًا",
    "regularly": "بانتظام",
    "consistently": "باستمرار / بانتظام",
    "now": "الآن",
    "today": "اليوم",
    "tomorrow": "غدًا",
    "yesterday": "أمس",
    "early": "مبكرًا",
    "soon": "قريبًا",
    "finally": "أخيرًا",
    "first": "أولًا",
    "next": "التالي / بعد ذلك",
    "then": "ثم",
    "quickly": "بسرعة",
    "slowly": "ببطء",
    "carefully": "بعناية",
    "politely": "بأدب",
    "clearly": "بوضوح",
    "calmly": "بهدوء",
    "gently": "بلطف",
    "patiently": "بصبر",
    "safely": "بأمان",
    "warmly": "بحرارة / بترحاب",
    "easily": "بسهولة",
    "steadily": "بثبات",
    "naturally": "بطبيعية",
    "truly": "حقًا",
    "very": "جدًا",
    "much": "كثيرًا",
    "widely": "على نطاق واسع",
    "quickly": "بسرعة",
    "carefully": "بعناية",
    "regular": "منتظم",
    "regularly": "بانتظام",
    "nearby": "بالقرب",
    "around": "حول",
    "away": "بعيدًا",
    "aboard": "على متن",
    "online": "عبر الإنترنت",
    "offline": "دون اتصال بالإنترنت",

    // ================= A1: MORNING ROUTINE =================
    "sunlight": "ضوء الشمس",
    "fills": "يملأ",
    "quiet": "هادئ",
    "room": "غرفة",
    "wake": "يستيقظ",
    "window": "نافذة",
    "splash": "يرشّ الماء",
    "face": "وجه",
    "brush": "يفرش / ينظف بالفرشاة",
    "teeth": "أسنان",
    "make": "يعدّ / يصنع",
    "makes": "يعدّ / يصنع",
    "bed": "سرير",
    "cup": "كوب",
    "hot": "ساخن",
    "tea": "شاي",
    "eat": "يأكل",
    "eggs": "بيض",
    "bread": "خبز",
    "breakfast": "وجبة الإفطار",
    "get dressed": "يرتدي ملابسه",
    "clothes": "ملابس",
    "keys": "مفاتيح",
    "bag": "حقيبة",
    "finally": "أخيرًا",
    "leave": "يغادر",
    "house": "منزل",
    "smile": "ابتسامة"

};

const STORIES_DATA = [
    // ================= A1 TOPICS (4) =================
    {
        id: "a1-morning-routine",
        level: "A1",
        emoji: "☀️",
        enTitle: "Morning Routine",
        arTitle: "روتين الصباح",
        desc: "خطوات الصباح من الاستيقاظ حتى الخروج",
        sentences: [
            { en: "Sunlight fills my quiet room", ar: "يملأ ضوء الشمس غرفتي الهادئة" },
            { en: "I wake up and open the window", ar: "أستيقظ وأفتح النافذة" },
            { en: "I splash cold water on my face", ar: "أغسل وجهي برذاذ الماء البارد" },
            { en: "I brush my teeth and wash my face", ar: "أفرش أسناني وأغسل وجهي" },
            { en: "Then, I make my bed", ar: "بعد ذلك، أرتب سريري" },
            { en: "I make a cup of hot tea", ar: "أعد كوبًا من الشاي الساخن" },
            { en: "I eat eggs and fresh bread for breakfast", ar: "أتناول البيض والخبز الطازج على الإفطار" },
            { en: "I get dressed in clean clothes", ar: "أرتدي ملابس نظيفة" },
            { en: "I put my keys in my bag", ar: "أضع مفاتيحي في حقيبتي" },
            { en: "Finally, I leave the house with a smile", ar: "أخيرًا، أغادر المنزل بابتسامة" }
        ]
    },
    {
        id: "a1-at-the-cafe",
        level: "A1",
        emoji: "☕",
        enTitle: "At the Café",
        arTitle: "في المقهى",
        desc: "زيارة هادئة للمقهى لطلب القهوة والقراءة",
        sentences: [
            { en: "There is a quiet cafe nearby", ar: "يوجد مقهى هادئ بالقرب مني" }
        ]
    },
    {
        id: "a1-grocery-shopping",
        level: "A1",
        emoji: "🛒",
        enTitle: "Grocery Shopping",
        arTitle: "التسوق لشراء الاحتياجات",
        desc: "جولة لشراء الفواكه والخضراوات والخبز",
        sentences: [
            { en: "I go grocery shopping every Saturday", ar: "أذهب للتسوق لشراء احتياجات المنزل كل يوم سبت" }
        ]
    },
    {
        id: "a1-family-dinner",
        level: "A1",
        emoji: "🍲",
        enTitle: "Family Dinner",
        arTitle: "عشاء العائلة",
        desc: "تحضير العشاء واجتماع العائلة حول المائدة",
        sentences: [
            { en: "In the evening, my family gathers for dinner", ar: "في المساء، تجتمع عائلتي لتناول العشاء" }
        ]
    },

    // ================= A2 TOPICS (4) =================
    {
        id: "a2-day-at-university",
        level: "A2",
        emoji: "🎓",
        enTitle: "A Day at University",
        arTitle: "يوم في الجامعة",
        desc: "يوم طالب جامعي بين المحاضرات والمكتبة",
        sentences: [
            { en: "The campus bus arrives at eight", ar: "تصل حافلة الجامعة في الساعة الثامنة" }
        ]
    },
    {
        id: "a2-weekend-trip",
        level: "A2",
        emoji: "🏞️",
        enTitle: "Weekend Trip",
        arTitle: "رحلة نهاية الأسبوع",
        desc: "رحلة بالسيارة لاستكشاف التلال والبلدة القديمة",
        sentences: [
            { en: "We pack our bags on Friday", ar: "نجهز حقائبنا يوم الجمعة" }
        ]
    },
    {
        id: "a2-visiting-the-doctor",
        level: "A2",
        emoji: "🩺",
        enTitle: "Visiting the Doctor",
        arTitle: "زيارة الطبيب",
        desc: "زيارة الطبيب في العيادة للحصول على الفحص والعلاج",
        sentences: [
            { en: "My throat hurts today", ar: "أشعر بألم في حلقي اليوم" }
        ]
    },
    {
        id: "a2-at-the-restaurant",
        level: "A2",
        emoji: "🍝",
        enTitle: "At the Restaurant",
        arTitle: "في المطعم",
        desc: "تناول العشاء وتجربة أطباق شهية في مطعم إيطالي",
        sentences: [
            { en: "The Italian restaurant looks busy", ar: "يبدو المطعم الإيطالي مزدحمًا" }
        ]
    },

    // ================= B1 TOPICS (4) =================
    {
        id: "b1-job-interview",
        level: "B1",
        emoji: "💼",
        enTitle: "Job Interview",
        arTitle: "مقابلة عمل",
        desc: "الاستعداد لمقابلة وظيفية والتحدث بثقة",
        sentences: [
            { en: "I research the company before the interview", ar: "أبحث عن معلومات حول الشركة قبل المقابلة" }
        ]
    },
    {
        id: "b1-healthy-lifestyle",
        level: "B1",
        emoji: "🥗",
        enTitle: "Healthy Lifestyle",
        arTitle: "نمط حياة صحي",
        desc: "عادات يومية بسيطة للحفاظ على النشاط والصحة",
        sentences: [
            { en: "Good health starts with simple habits", ar: "تبدأ الصحة الجيدة بعادات بسيطة" }
        ]
    },
    {
        id: "b1-planning-a-journey",
        level: "B1",
        emoji: "🗺️",
        enTitle: "Planning a Journey",
        arTitle: "التخطيط لرحلة",
        desc: "ترتيب الحجوزات والاستعداد للسفر قبل الانطلاق",
        sentences: [
            { en: "I start by choosing a destination", ar: "أبدأ باختيار وجهة السفر" }
        ]
    },
    {
        id: "b1-at-the-airport",
        level: "B1",
        emoji: "✈️",
        enTitle: "At the Airport",
        arTitle: "في المطار",
        desc: "إجراءات المطار من تسليم الأمتعة حتى الصعود إلى الطائرة",
        sentences: [
            { en: "A taxi drops me off at the terminal", ar: "تقلني سيارة أجرة إلى صالة المطار" }
        ]
    },

    // ================= B2 TOPICS (4) =================
        {
    id: "b2-environmental-protection",
    level: "B2",
    emoji: "🌍",
    enTitle: "Environmental Protection",
    arTitle: "حماية البيئة",
    desc: "تعرف على طرق حماية البيئة",
    sentences: [
        { en: "Air pollution affects our health", ar: "يؤثر تلوث الهواء على صحتنا" }
    ]
},
    {
        id: "b2-fitness-and-gym",
        level: "B2",
        emoji: "🏋️",
        enTitle: "Fitness at the Gym",
        arTitle: "اللياقة في النادي الرياضي",
        desc: "تمرين متكامل يجمع بين الإحماء والقوة والاستشفاء",
        sentences: [
            { en: "Regular exercise improves my health", ar: "تحسن التمارين المنتظمة صحتي" }
        ]
    },
    {
        id: "b2-financial-planning",
        level: "B2",
        emoji: "📊",
        enTitle: "Financial Planning",
        arTitle: "التخطيط المالي",
        desc: "تنظيم الميزانية الشهرية والادخار للمستقبل",
        sentences: [
            { en: "Good financial planning helps me feel secure", ar: "يساعدني التخطيط المالي الجيد على الشعور بالاستقرار" }
        ]
    },
    {
    id: "b2-moving-house",
    level: "B2",
    emoji: "🏡",
    enTitle: "Moving to a New House",
    arTitle: "الانتقال إلى منزل جديد",
    desc: "ترتيب الصناديق ونقل الأثاث إلى منزل جديد",
    sentences: [
        { en: "Brown boxes fill the hallway", ar: "تملأ الصناديق البنية الممر" }
    ]
},

    // ================= C1 TOPICS (4) =================
    {
        id: "c1-self-improvement",
        level: "C1",
        emoji: "🚀",
        enTitle: "Self-Improvement",
        arTitle: "تطوير الذات",
        desc: "بناء الانضباط الذاتي وتحقيق تقدم مستمر",
        sentences: [
            { en: "Personal growth requires patience and consistent effort", ar: "يتطلب النمو الشخصي الصبر والجهد المستمر" }
        ]
    },
    {
        id: "c1-effective-leadership",
        level: "C1",
        emoji: "🧭",
        enTitle: "Effective Leadership",
        arTitle: "القيادة الفعّالة",
        desc: "إلهام الفريق بالرؤية الواضحة والتفويض والتواصل البنّاء",
        sentences: [
            { en: "A clear vision helps leaders inspire others", ar: "تساعد الرؤية الواضحة القادة على إلهام الآخرين" }
        ]
    },
    {
        id: "c1-starting-a-business",
        level: "C1",
        emoji: "📈",
        enTitle: "Starting a Business",
        arTitle: "تأسيس مشروع تجاري",
        desc: "رحلة ريادة الأعمال من دراسة السوق إلى النمو المستدام",
        sentences: [
            { en: "Successful businesses solve real problems", ar: "تحل الشركات الناجحة مشكلات حقيقية" }
        ]
    },
    {
        id: "c1-public-speaking",
        level: "C1",
        emoji: "🎙️",
        enTitle: "Public Speaking",
        arTitle: "فن الإلقاء والتحدث",
        desc: "تطوير مهارات الإلقاء والتأثير في الجمهور بثقة",
        sentences: [
            { en: "Regular practice helps reduce stage fright", ar: "تساعد الممارسة المنتظمة على تقليل رهبة المسرح" }
        ]
    }
];

        /**************************************************************
         * 3. WEB AUDIO SYNTHESIZED SOUND ENGINE
         **************************************************************/
        class SoundEngine {
            constructor() {
                this.ctx = null;
                this.enabled = true;
            }
            init() {
                if (!this.ctx) {
                    const AudioCtx = window.AudioContext || window.webkitAudioContext;
                    if (AudioCtx) this.ctx = new AudioCtx();
                }
                if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
            }
            playTick(combo = 0) {
                if (!this.enabled) return;
                this.init();
                if (!this.ctx) return;
                const now = this.ctx.currentTime;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(520 + Math.min(combo * 6, 220), now);
                osc.frequency.exponentialRampToValueAtTime(160, now + 0.035);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.04);
            }
            playError() {
                if (!this.enabled) return;
                this.init();
                if (!this.ctx) return;
                const now = this.ctx.currentTime;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(160, now);
                osc.frequency.linearRampToValueAtTime(115, now + 0.11);
                gain.gain.setValueAtTime(0.11, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.13);
            }
            playSentenceStep() {
                if (!this.enabled) return;
                this.init();
                if (!this.ctx) return;
                [587.33, 880].forEach((freq, i) => {
                    const now = this.ctx.currentTime + i * 0.055;
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now);
                    gain.gain.setValueAtTime(0.07, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.18);
                });
            }
            playWin() {
                if (!this.enabled) return;
                this.init();
                if (!this.ctx) return;
                [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
                    const now = this.ctx.currentTime + i * 0.07;
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now);
                    gain.gain.setValueAtTime(0.1, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.27);
                });
            }
        }

        const sfx = new SoundEngine();

        /**************************************************************
         * 4. TEXT-TO-SPEECH CONTROLLER
         **************************************************************/
        
        class SpeechController {
            constructor() {
                this.synth = window.speechSynthesis;
                this.rate = 1.0;
                this.preferredVoice = null;
                if (this.synth) {
                    this.loadVoices();
                    if (speechSynthesis.onvoiceschanged !== undefined) {
                        speechSynthesis.onvoiceschanged = () => this.loadVoices();
                    }
                }
            }
            loadVoices() {
                const voices = this.synth.getVoices();
                this.preferredVoice =
                    voices.find(v => v.lang === 'en-US' && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha'))) ||
                    voices.find(v => v.lang.startsWith('en-US')) ||
                    voices.find(v => v.lang.startsWith('en'));
            }
            speak(text, customRate = null) {
                if (!this.synth || !text) return;
                try {
                    this.synth.cancel();
                    const utter = new SpeechSynthesisUtterance(text);
                    if (this.preferredVoice) utter.voice = this.preferredVoice;
                    utter.lang = 'en-US';
                    utter.rate = customRate || this.rate;
                    this.synth.speak(utter);
                } catch (e) {
                    console.warn(e);
                }
            }
            toggleRate() {
                this.rate = this.rate === 1.0 ? 0.75 : (this.rate === 0.75 ? 1.15 : 1.0);
                return this.rate;
            }
        }

        const tts = new SpeechController();

        /**************************************************************
         * 5. STATE & CUMULATIVE TOPIC TRACKING (DEMO VERSION)
         **************************************************************/
        const state = {
            storyIndex: 0, // Locked to 0 (Morning Routine) in Demo
            sentenceIndex: 0,
            proMode: false,
            keyboardVisible: false,
            targetText: '',
            charIndex: 0,
            // Current sentence tracking
            sentenceStartTime: null,
            sentenceKeystrokes: 0,
            sentenceCorrect: 0,
            // Cumulative topic tracking (across all 10 sentences)
            topicActiveTimeMs: 0,
            topicTotalChars: 0,
            topicTotalKeystrokes: 0,
            topicCorrectKeystrokes: 0,
            combo: 0,
            maxCombo: 0,
            timerInterval: null,
            isTopicCompleted: false,
            isTransitioning: false,
            totalScore: 0
        };

        const enContainer = document.getElementById('english-sentence-container');
        const glidingCaret = document.getElementById('gliding-caret');
        const arSentenceEl = document.getElementById('arabic-sentence');
        const typingBoxWrapper = document.getElementById('typing-box-wrapper');
        const progressBar = document.getElementById('sentence-progress-bar');
        const hiddenInput = document.getElementById('hidden-typing-input');

        const statWpm = document.getElementById('stat-wpm');
        const statAcc = document.getElementById('stat-acc');
        const statCombo = document.getElementById('stat-combo');
        const totalScoreEl = document.getElementById('total-score-display');

        const wordPopover = document.getElementById('word-popover');
        const popoverArWord = document.getElementById('popover-ar-word');
        const summaryModal = document.getElementById('summary-modal');
        const storiesModal = document.getElementById('stories-modal');
        const lockedModal = document.getElementById('locked-modal');

        function isTopicLocked(index) {
            return index !== 0; // Only Morning Routine (index 0) is unlocked
        }

        function openLockedTopicModal() {
            lockedModal.hidden = false;
        }

        function closeLockedTopicModal() {
            lockedModal.hidden = true;
            if (storiesModal.hidden && summaryModal.hidden) {
                hiddenInput.focus();
            }
        }

        function resetTopicCumulativeStats() {
            state.topicActiveTimeMs = 0;
            state.topicTotalChars = 0;
            state.topicTotalKeystrokes = 0;
            state.topicCorrectKeystrokes = 0;
            state.combo = 0;
            state.maxCombo = 0;
            state.isTopicCompleted = false;
            statWpm.textContent = '0';
            statAcc.textContent = '100%';
            statCombo.textContent = '0';
        }

        /**************************************************************
         * 6. SMOOTH GLIDING UNDERLINE CARET POSITIONING
         **************************************************************/
        function updateGlidingCaret() {
            const targetIdx = Math.min(state.charIndex, state.targetText.length - 1);
            const activeSpan = enContainer.querySelector(`.char[data-index="${targetIdx}"]`);
            if (!activeSpan) {
                glidingCaret.style.opacity = '0';
                return;
            }

            glidingCaret.style.opacity = '1';
            const wrapperRect = typingBoxWrapper.getBoundingClientRect();
            const spanRect = activeSpan.getBoundingClientRect();

            const left = spanRect.left - wrapperRect.left;
            const top = (spanRect.bottom - wrapperRect.top) + 4;
            const width = Math.max(spanRect.width * 0.88, 18);

            glidingCaret.style.left = `${left + (spanRect.width - width) / 2}px`;
            glidingCaret.style.top = `${top}px`;
            glidingCaret.style.width = `${width}px`;
        }

        window.addEventListener('resize', () => {
            requestAnimationFrame(updateGlidingCaret);
        });

        /**************************************************************
         * 7. RENDER SENTENCE & TOPICS MODAL (1 UNLOCKED, 19 LOCKED)
         **************************************************************/
        function loadCurrentSentence() {
            clearInterval(state.timerInterval);
            hideWordPopover();

            // Enforce demo restriction: only index 0 is playable
            if (isTopicLocked(state.storyIndex)) {
                state.storyIndex = 0;
            }

            const story = STORIES_DATA[state.storyIndex];
            const currentObj = story.sentences[state.sentenceIndex];
            const totalSentences = story.sentences.length; // Always 10

            state.targetText = currentObj.en;
            state.charIndex = 0;
            state.sentenceStartTime = null;
            state.sentenceKeystrokes = 0;
            state.sentenceCorrect = 0;
            state.isTransitioning = false;

            // Update Top Pills & Level Badge Class
            document.getElementById('header-story-title').textContent = story.arTitle;
            const levelBadge = document.getElementById('current-level-badge');
            levelBadge.textContent = story.level;
            levelBadge.className = `level-dot level-${story.level}`;

            document.getElementById('current-story-ar-title').textContent = story.arTitle;
            document.getElementById('sentence-step-indicator').textContent = `${state.sentenceIndex + 1} / ${totalSentences}`;

            arSentenceEl.textContent = currentObj.ar;
            progressBar.style.width = `${(state.sentenceIndex / totalSentences) * 100}%`;

            // Build Giant Clickable Words & Character Spans
            enContainer.innerHTML = '';
            const words = state.targetText.split(' ');
            let globalCharCounter = 0;

            words.forEach((wordText, wIdx) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'story-word';

                wordSpan.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openWordPopover(wordText, wordSpan);
                    hiddenInput.focus();
                });

                for (let c = 0; c < wordText.length; c++) {
                    const charSpan = document.createElement('span');
                    charSpan.className = `char ${globalCharCounter === 0 ? 'current' : 'untyped'}`;
                    charSpan.dataset.index = globalCharCounter;
                    charSpan.textContent = wordText[c];
                    wordSpan.appendChild(charSpan);
                    globalCharCounter++;
                }

                enContainer.appendChild(wordSpan);

                if (wIdx < words.length - 1) {
                    const spaceSpan = document.createElement('span');
                    spaceSpan.className = 'char space-char untyped';
                    spaceSpan.dataset.index = globalCharCounter;
                    spaceSpan.innerHTML = '&nbsp;';
                    enContainer.appendChild(spaceSpan);
                    globalCharCounter++;
                }
            });

            summaryModal.hidden = true;
            hiddenInput.value = '';
            hiddenInput.focus();

            requestAnimationFrame(() => {
                updateGlidingCaret();
                highlightTargetKey(state.targetText[0]);
            });

            setTimeout(() => tts.speak(state.targetText), 160);
        }

        function renderStoriesModal() {
            const grid = document.getElementById('stories-grid');
            grid.innerHTML = '';

            STORIES_DATA.forEach((story, idx) => {
                const locked = isTopicLocked(idx);
                const card = document.createElement('article');
                card.className = `story-card ${idx === state.storyIndex && !locked ? 'selected-story' : ''} ${locked ? 'locked-story' : ''}`;
                card.innerHTML = `
                    <div class="story-cover">
                        <span class="cover-level level-${story.level}">${story.level}</span>
                        ${locked ? `<span class="cover-lock-badge"><i data-lucide="lock"></i> مقفل </span>` : ''}
                        <span class="cover-emoji">${story.emoji}</span>
                    </div>
                    <div class="story-card-body">
                        <h3 class="story-title">${story.enTitle}</h3>
                        <p class="story-arabic-title">${story.arTitle}</p>
                        <p class="story-description">${story.desc}</p>
                        <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:12px; color:var(--ink-soft); font-weight:700;"></span>
                            ${locked
                                ? `<span class="story-status-locked"></i></span>`
                                : `<span style="color:var(--indigo); font-weight:800; font-size:13px;">ابدأ الموضوع ←</span>`
                            }
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => {
                    if (locked) {
                        openLockedTopicModal();
                        return;
                    }
                    state.storyIndex = 0;
                    state.sentenceIndex = 0;
                    resetTopicCumulativeStats();
                    storiesModal.hidden = true;
                    renderStoriesModal();
                    loadCurrentSentence();
                });
                grid.appendChild(card);
            });

            if (window.lucide) {
                lucide.createIcons();
            }
        }

        /**************************************************************
         * 8. VIRTUAL KEYBOARD (HIDDEN BY DEFAULT)
         **************************************************************/
        const KEYBOARD_LAYOUT = [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Shift'],
            ['Space']
        ];

        function buildVirtualKeyboard() {
            const container = document.getElementById('keyboard-rows');
            container.innerHTML = '';
            KEYBOARD_LAYOUT.forEach(row => {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'kb-row';
                row.forEach(label => {
                    const k = document.createElement('div');
                    let cls = '';
                    if (label === 'Shift') cls = 'kb-wide';
                    if (label === 'Space') cls = 'kb-space';
                    k.className = `kb-key ${cls}`;
                    k.dataset.key = label.toLowerCase();
                    k.textContent = label === 'Space' ? 'SPACE' : label.toUpperCase();
                    rowDiv.appendChild(k);
                });
                container.appendChild(rowDiv);
            });
        }

        function highlightTargetKey(expectedChar) {
            document.querySelectorAll('.kb-key').forEach(k => k.classList.remove('active-target'));
            if (!expectedChar || state.proMode) return;
            const isUpper = expectedChar !== expectedChar.toLowerCase() && expectedChar.toUpperCase() === expectedChar;
            const targetKey = expectedChar === ' ' ? 'space' : expectedChar.toLowerCase();
            document.querySelectorAll('.kb-key').forEach(k => {
                if (k.dataset.key === targetKey) k.classList.add('active-target');
                if (isUpper && k.dataset.key === 'shift') k.classList.add('active-target');
            });
        }

        /**************************************************************
         * 9. ULTRA-SIMPLE WORD TRANSLATION POPOVER (ARABIC WORD + X ONLY)
         **************************************************************/
        function openWordPopover(rawWord, anchorEl) {
            const clean = rawWord.replace(/[^a-zA-Z]/g, '').toLowerCase();
            if (!clean) return;

            // Immediately speak the clicked English word
            tts.speak(clean, 0.9);

            // Show ONLY the Arabic meaning and the X button
            popoverArWord.textContent = WORD_DICTIONARY[clean] || 'كلمة';
            wordPopover.hidden = false;

            const rect = anchorEl.getBoundingClientRect();
            const popRect = wordPopover.getBoundingClientRect();
            const popW = popRect.width || 130;

            let left = rect.left + (rect.width / 2) - (popW / 2);
            left = Math.max(12, Math.min(left, window.innerWidth - popW - 12));

            let top = rect.top - (popRect.height || 46) - 10;
            if (top < 14) {
                top = rect.bottom + 12;
            }

            wordPopover.style.left = `${left}px`;
            wordPopover.style.top = `${top}px`;
        }

        function hideWordPopover() {
            wordPopover.hidden = true;
        }

        /**************************************************************
         * 10. TYPING INPUT, SEAMLESS SENTENCE FLOW & END-OF-TOPIC FLOW
         **************************************************************/
        function updateLiveTelemetry() {
            if (state.isTopicCompleted) return;
            const currentSentenceElapsedMs = state.sentenceStartTime
                ? (performance.now() - state.sentenceStartTime)
                : 0;
            const totalElapsedMin = Math.max((state.topicActiveTimeMs + currentSentenceElapsedMs) / 60000, 0.008);
            const totalCharsTyped = state.topicTotalChars + state.charIndex;

            const wpm = Math.round((totalCharsTyped / 5) / totalElapsedMin);
            const acc = state.topicTotalKeystrokes > 0
                ? Math.round((state.topicCorrectKeystrokes / state.topicTotalKeystrokes) * 100)
                : 100;

            statWpm.textContent = wpm;
            statAcc.textContent = `${acc}%`;
        }

        function handleCharacterInput(typedChar) {
            if (state.isTopicCompleted || state.isTransitioning) return;

            if (!state.sentenceStartTime) {
                state.sentenceStartTime = performance.now();
                state.timerInterval = setInterval(updateLiveTelemetry, 150);
            }

            const expectedChar = state.targetText[state.charIndex];
            const currentSpan = enContainer.querySelector(`.char[data-index="${state.charIndex}"]`);
            if (!currentSpan) return;

            state.sentenceKeystrokes++;
            state.topicTotalKeystrokes++;

            if (typedChar.toLowerCase() === expectedChar.toLowerCase()) {
                state.sentenceCorrect++;
                state.topicCorrectKeystrokes++;
                state.combo++;
                if (state.combo > state.maxCombo) state.maxCombo = state.combo;

                sfx.playTick(state.combo);
                currentSpan.classList.remove('current', 'untyped', 'incorrect');
                currentSpan.classList.add('correct');

                state.charIndex++;
                statCombo.textContent = state.combo;

                const story = STORIES_DATA[state.storyIndex];
                const sentenceFraction = state.charIndex / state.targetText.length;
                const totalPct = ((state.sentenceIndex + sentenceFraction) / story.sentences.length) * 100;
                progressBar.style.width = `${totalPct}%`;

                if (state.charIndex >= state.targetText.length) {
                    handleSentenceFinished();
                } else {
                    const nextSpan = enContainer.querySelector(`.char[data-index="${state.charIndex}"]`);
                    if (nextSpan) {
                        nextSpan.classList.remove('untyped');
                        nextSpan.classList.add('current');
                    }
                    updateGlidingCaret();
                    highlightTargetKey(state.targetText[state.charIndex]);
                }
            } else {
                state.combo = 0;
                statCombo.textContent = '0';
                sfx.playError();
                currentSpan.classList.add('incorrect');

                typingBoxWrapper.classList.remove('shake');
                void typingBoxWrapper.offsetWidth;
                typingBoxWrapper.classList.add('shake');
            }

            updateLiveTelemetry();
        }

        function calculateFiveStars(wpm, acc) {
            let stars = 1;
            if (acc >= 75 && wpm >= 15) stars = 2;
            if (acc >= 85 && wpm >= 25) stars = 3;
            if (acc >= 92 && wpm >= 35) stars = 4;
            if (acc >= 96 && wpm >= 45) stars = 5;
            if (state.proMode && acc >= 90 && stars < 5) stars = Math.min(5, stars + 1);
            return stars;
        }

        function handleSentenceFinished() {
            clearInterval(state.timerInterval);

            // Accumulate sentence active time & characters into topic totals
            const elapsedMs = state.sentenceStartTime ? (performance.now() - state.sentenceStartTime) : 1200;
            state.topicActiveTimeMs += elapsedMs;
            state.topicTotalChars += state.targetText.length;
            state.sentenceStartTime = null;

            const story = STORIES_DATA[state.storyIndex];
            const isLastSentenceInTopic = state.sentenceIndex >= story.sentences.length - 1;

            if (!isLastSentenceInTopic) {
                // Sentences 1 through 9: Smooth automatic transition to next sentence without modal
                state.isTransitioning = true;
                sfx.playSentenceStep();
                typingBoxWrapper.classList.add('sentence-transition');

                setTimeout(() => {
                    state.sentenceIndex++;
                    typingBoxWrapper.classList.remove('sentence-transition');
                    loadCurrentSentence();
                }, 240);
            } else {
                // Sentence 10/10 completed: Immediately display the 20 topics list
                completeFullTopic();
            }
        }

        function completeFullTopic() {
            state.isTopicCompleted = true;
            sfx.playWin();

            const totalMinutes = Math.max(state.topicActiveTimeMs / 60000, 0.02);
            const totalSeconds = Math.max(Math.round(state.topicActiveTimeMs / 1000), 1);
            const finalWpm = Math.round((state.topicTotalChars / 5) / totalMinutes);
            const finalAcc = state.topicTotalKeystrokes > 0
                ? Math.round((state.topicCorrectKeystrokes / state.topicTotalKeystrokes) * 100)
                : 100;

            const stars = calculateFiveStars(finalWpm, finalAcc);
            const proBonus = state.proMode ? 1.5 : 1;
            const points = Math.round(((finalWpm * 25 * (finalAcc / 100)) + (state.maxCombo * 5)) * proBonus);

            state.totalScore += points;
            totalScoreEl.textContent = state.totalScore.toLocaleString();

            // Requirement 2: Immediately display the full list of 20 topics after completing Morning Routine
            summaryModal.hidden = true;
            renderStoriesModal();
            storiesModal.hidden = false;
        }

        function retryCurrentTopic() {
            state.storyIndex = 0;
            state.sentenceIndex = 0;
            resetTopicCumulativeStats();
            loadCurrentSentence();
        }

        function advanceToNextTopic() {
            // In Demo version, show the full 20 topics list instead of advancing to a locked topic
            summaryModal.hidden = true;
            renderStoriesModal();
            storiesModal.hidden = false;
        }

        /**************************************************************
         * 11. EVENT LISTENERS
         **************************************************************/
        window.addEventListener('keydown', (e) => {
            const capsWarn = document.getElementById('caps-lock-warning');
            if (e.getModifierState && e.getModifierState('CapsLock')) {
                capsWarn.hidden = false;
            } else {
                capsWarn.hidden = true;
            }

            if (!lockedModal.hidden) {
                if (e.key === 'Escape') closeLockedTopicModal();
                return;
            }

            if (!storiesModal.hidden) {
                if (e.key === 'Escape') {
                    storiesModal.hidden = true;
                    if (state.isTopicCompleted) {
                        retryCurrentTopic();
                    } else {
                        hiddenInput.focus();
                    }
                }
                return;
            }

            if (state.isTopicCompleted) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    advanceToNextTopic();
                }
                return;
            }

            if (e.key === 'Tab') {
                e.preventDefault();
                tts.speak(state.targetText);
                return;
            }

            if (e.key === 'Escape') {
                hideWordPopover();
                return;
            }

            if (e.ctrlKey || e.altKey || e.metaKey) return;

            if (e.key.length === 1) {
                e.preventDefault();
                hideWordPopover();
                handleCharacterInput(e.key);
            }
        });

        hiddenInput.addEventListener('input', () => {
            if (state.isTopicCompleted || state.isTransitioning) return;
            const val = hiddenInput.value;
            if (val.length > 0) {
                handleCharacterInput(val[val.length - 1]);
                hiddenInput.value = '';
            }
        });

        document.getElementById('zen-stage').addEventListener('click', (e) => {
            if (!e.target.closest('.story-word') && !e.target.closest('button')) {
                hideWordPopover();
                hiddenInput.focus();
            }
        });

        document.getElementById('popover-close-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            hideWordPopover();
            hiddenInput.focus();
        });

        // Topic Modal Triggers
        document.getElementById('open-stories-btn').addEventListener('click', () => {
            storiesModal.hidden = false;
        });
        document.getElementById('story-step-pill').addEventListener('click', () => {
            storiesModal.hidden = false;
        });
        document.getElementById('close-stories-btn').addEventListener('click', () => {
            storiesModal.hidden = true;
            if (state.isTopicCompleted) {
                retryCurrentTopic();
            } else {
                hiddenInput.focus();
            }
        });

        // Locked Topic Modal Close Triggers
        document.getElementById('close-locked-btn').addEventListener('click', closeLockedTopicModal);
        lockedModal.addEventListener('click', (e) => {
            if (e.target === lockedModal) {
                closeLockedTopicModal();
            }
        });

        // PRO MODE BUTTON (الوضع الاحترافي)
        const proModeBtn = document.getElementById('pro-mode-btn');
        const hintLetterBtn = document.getElementById('hint-letter-btn');
        proModeBtn.addEventListener('click', () => {
            state.proMode = !state.proMode;
            proModeBtn.setAttribute('aria-pressed', String(state.proMode));
            proModeBtn.classList.toggle('active-pro', state.proMode);
            enContainer.classList.toggle('pro-mode-active', state.proMode);
            hintLetterBtn.hidden = !state.proMode;
            if (state.proMode) tts.speak(state.targetText);
            highlightTargetKey(state.targetText[state.charIndex]);
            hiddenInput.focus();
        });

        hintLetterBtn.addEventListener('click', () => {
            if (state.isTopicCompleted || state.isTransitioning) return;
            const nextChar = state.targetText[state.charIndex];
            if (nextChar) handleCharacterInput(nextChar);
            hiddenInput.focus();
        });

        // Virtual Keyboard Toggle (Hidden by default)
        const toggleKbBtn = document.getElementById('toggle-kb-btn');
        const kbSection = document.getElementById('virtual-keyboard-section');
        toggleKbBtn.addEventListener('click', () => {
            state.keyboardVisible = !state.keyboardVisible;
            kbSection.hidden = !state.keyboardVisible;
            toggleKbBtn.classList.toggle('active-btn', state.keyboardVisible);
            requestAnimationFrame(updateGlidingCaret);
            hiddenInput.focus();
        });

        // Audio Controls
        document.getElementById('listen-sentence-btn').addEventListener('click', () => {
            tts.speak(state.targetText);
            hiddenInput.focus();
        });

        document.getElementById('speed-toggle-btn').addEventListener('click', () => {
            const rate = tts.toggleRate();
            document.getElementById('tts-speed-label').textContent = `${rate}x`;
            tts.speak(state.targetText);
            hiddenInput.focus();
        });

        document.getElementById('restart-sentence-btn').addEventListener('click', () => {
            // Restart only current sentence
            loadCurrentSentence();
        });

        document.getElementById('modal-replay-btn').addEventListener('click', retryCurrentTopic);
        document.getElementById('modal-next-btn').addEventListener('click', advanceToNextTopic);

        // SFX Toggle
        document.getElementById('toggle-sfx-btn').addEventListener('click', () => {
            sfx.enabled = !sfx.enabled;
            const icon = document.getElementById('sfx-icon');
            icon.setAttribute('data-lucide', sfx.enabled ? 'volume-2' : 'volume-x');
            lucide.createIcons();
            hiddenInput.focus();
        });

        // Theme Toggle
        document.getElementById('theme-toggle-btn').addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            const icon = document.getElementById('theme-icon');
            icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
            lucide.createIcons();
            hiddenInput.focus();
        });

        window.onload = function () {
            buildVirtualKeyboard();
            renderStoriesModal();
            loadCurrentSentence();
            lucide.createIcons();
        };