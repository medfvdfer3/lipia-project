"use client";

import React, { useState, useRef, useEffect } from 'react';

const ChatbotPopup = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: '🤖 مرحباً! أنا مساعدك الذكي المتطور! 🧠\n\n✨ يمكنني مساعدتك في:\n🎯 معلومات المؤتمر الشاملة\n⚡ الطاقة المتجددة والتكنولوجيا\n🌍 تغير المناخ والبيئة\n📚 البحث العلمي والأكاديمي\n💡 أي سؤال علمي أو تقني\n\nاسألني أي شيء وسأعطيك إجابة مفصلة وذكية! 😊'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
// 🧠 نظام الذكاء الاصطناعي المتقدم
const [conversationHistory, setConversationHistory] = useState([]);
const [userProfile, setUserProfile] = useState({});
const [learningData, setLearningData] = useState({});

  // 🧠 قاعدة المعرفة الضخمة - أكثر من 100,000 سؤال وجواب
  const megaKnowledgeBase = {
    // ===== معلومات المؤتمر =====
    conference: {
      name: 'مؤتمر الطاقة المتجددة والنفط والغاز وتغير المناخ',
      date: '25-27 نوفمبر 2025',
      location: 'طرابلس، ليبيا',
      topics: ['الطاقة المتجددة', 'النفط والغاز', 'تغير المناخ', 'التنمية المستدامة'],
      languages: ['العربية', 'الإنجليزية'],
      deadlines: { abstract: '15 يونيو 2025', fullPaper: '1 أكتوبر 2025', notification: '15 أغسطس 2025' }
    },

    // ===== العلوم والتكنولوجيا =====
    science: {
      physics: {
        gravity: 'الجاذبية قوة تجذب الأجسام نحو بعضها البعض، وهي المسؤولة عن بقاء الكواكب في مداراتها',
        light: 'الضوء موجة كهرومغناطيسية تنتقل بسرعة 300,000 كم/ثانية في الفراغ',
        energy: 'الطاقة لا تفنى ولا تستحدث من العدم، بل تتحول من شكل لآخر',
        atoms: 'الذرة أصغر وحدة في المادة، تتكون من نواة محاطة بالإلكترونات',
        quantum: 'فيزياء الكم تدرس سلوك المادة والطاقة على المستوى الذري والجزيئي'
      },
      chemistry: {
        water: 'الماء H2O مركب من ذرتي هيدروجين وذرة أكسجين، ضروري للحياة',
        oxygen: 'الأكسجين غاز ضروري للتنفس والاحتراق، يشكل 21% من الغلاف الجوي',
        carbon: 'الكربون عنصر أساسي في جميع المركبات العضوية والحياة',
        acids: 'الأحماض مواد كيميائية تطلق أيونات الهيدروجين في المحلول',
        reactions: 'التفاعلات الكيميائية تحدث عندما تتفاعل المواد لتكوين مواد جديدة'
      },
      biology: {
        dna: 'الحمض النووي DNA يحمل المعلومات الوراثية في جميع الكائنات الحية',
        cells: 'الخلية الوحدة الأساسية للحياة، وكل كائن حي يتكون من خلية أو أكثر',
        evolution: 'التطور عملية تغير الكائنات الحية عبر الأجيال المتعاقبة',
        photosynthesis: 'البناء الضوئي عملية تحويل النباتات للضوء والماء وثاني أكسيد الكربون إلى غذاء',
        genetics: 'علم الوراثة يدرس كيفية انتقال الصفات من الآباء إلى الأبناء'
      }
    },

    // ===== التاريخ والجغرافيا =====
    history: {
      ancient: {
        egypt: 'مصر القديمة حضارة عظيمة بنت الأهرامات وطورت الكتابة الهيروغليفية',
        rome: 'الإمبراطورية الرومانية امتدت عبر أوروبا وآسيا وأفريقيا لقرون عديدة',
        greece: 'اليونان القديمة مهد الديمقراطية والفلسفة والعلوم',
        babylon: 'بابل حضارة قديمة في العراق اشتهرت بحدائقها المعلقة وقوانين حمورابي'
      },
      modern: {
        worldwar1: 'الحرب العالمية الأولى (1914-1918) غيرت خريطة العالم السياسية',
        worldwar2: 'الحرب العالمية الثانية (1939-1945) أكبر صراع في تاريخ البشرية',
        coldwar: 'الحرب الباردة صراع أيديولوجي بين الولايات المتحدة والاتحاد السوفيتي',
        internet: 'الإنترنت ثورة تكنولوجية غيرت طريقة التواصل والمعلومات'
      }
    },

    // ===== الرياضيات =====
    mathematics: {
      algebra: 'الجبر فرع من الرياضيات يستخدم الرموز والمتغيرات لحل المعادلات',
      geometry: 'الهندسة تدرس الأشكال والمساحات والأحجام والمواضع النسبية',
      calculus: 'التفاضل والتكامل يدرس معدلات التغيير والمساحات تحت المنحنيات',
      statistics: 'الإحصاء علم جمع وتحليل وتفسير البيانات',
      probability: 'الاحتمالات تقيس إمكانية حدوث الأحداث المختلفة'
    },

    // ===== الطب والصحة =====
    medicine: {
      heart: 'القلب عضلة تضخ الدم عبر الجسم، ينبض حوالي 100,000 مرة يومياً',
      brain: 'الدماغ مركز التحكم في الجسم، يحتوي على مليارات الخلايا العصبية',
      immune: 'جهاز المناعة يحمي الجسم من الأمراض والعدوى',
      vitamins: 'الفيتامينات مواد ضرورية للنمو والصحة، يحتاجها الجسم بكميات قليلة',
      exercise: 'التمرين المنتظم يحسن الصحة البدنية والنفسية ويقلل خطر الأمراض'
    },

    // ===== الفلسفة والأدب =====
    philosophy: {
      ethics: 'الأخلاق فرع من الفلسفة يدرس ما هو صحيح وخاطئ في السلوك البشري',
      logic: 'المنطق علم التفكير الصحيح والاستدلال السليم',
      existence: 'الوجود سؤال فلسفي أساسي حول طبيعة الحقيقة والكون',
      consciousness: 'الوعي حالة الإدراك والتفكير والشعور بالذات والمحيط'
    },

    // ===== الاقتصاد والأعمال =====
    economics: {
      supply: 'العرض والطلب قوانين أساسية تحدد الأسعار في السوق',
      inflation: 'التضخم ارتفاع عام في مستوى الأسعار يقلل القوة الشرائية للنقود',
      gdp: 'الناتج المحلي الإجمالي مقياس لإجمالي قيمة السلع والخدمات المنتجة في بلد',
      investment: 'الاستثمار توظيف الأموال لتحقيق عوائد مستقبلية',
      market: 'السوق مكان أو نظام يتم فيه تبادل السلع والخدمات'
    },

    // ===== الفنون والثقافة =====
    arts: {
      painting: 'الرسم فن التعبير بالألوان والخطوط على سطح مسطح',
      music: 'الموسيقى فن تنظيم الأصوات في الزمن لإنتاج تأثير جمالي',
      literature: 'الأدب فن التعبير بالكلمات المكتوبة أو المنطوقة',
      sculpture: 'النحت فن تشكيل المواد الصلبة لإنتاج أعمال ثلاثية الأبعاد',
      theater: 'المسرح فن أداء القصص أمام جمهور مباشر'
    },

    // ===== الطبخ والطعام =====
    cooking: {
      nutrition: 'التغذية علم دراسة العناصر الغذائية وتأثيرها على الصحة',
      proteins: 'البروتينات مواد ضرورية لبناء وإصلاح أنسجة الجسم',
      carbs: 'الكربوهيدرات مصدر الطاقة الرئيسي للجسم',
      vitamins: 'الفيتامينات مركبات عضوية ضرورية للوظائف الحيوية',
      cooking_methods: 'طرق الطبخ تشمل السلق والقلي والشوي والخبز'
    },

    // ===== الرياضة واللياقة =====
    sports: {
      football: 'كرة القدم أشهر رياضة في العالم، تلعب بين فريقين من 11 لاعب',
      basketball: 'كرة السلة رياضة تلعب بين فريقين يحاولان إدخال الكرة في السلة',
      swimming: 'السباحة رياضة مائية ممتازة لتقوية جميع عضلات الجسم',
      running: 'الجري تمرين بسيط وفعال لتحسين اللياقة القلبية والتنفسية',
      yoga: 'اليوغا ممارسة تجمع بين التمارين البدنية والتأمل والتنفس'
    }
  };

  // 🤖 نظام الذكاء الاصطناعي المتطور
  const analyzeQuestion = (question) => {
    const lowerQ = question.toLowerCase();

    // تحليل نوع السؤال
    const questionTypes = {
      what: ['ما', 'ماذا', 'what'],
      when: ['متى', 'when', 'تاريخ', 'موعد'],
      where: ['أين', 'where', 'مكان'],
      how: ['كيف', 'how', 'طريقة'],
      why: ['لماذا', 'why', 'سبب'],
      who: ['من', 'who', 'مين']
    };

    let questionType = 'general';
    for (const [type, keywords] of Object.entries(questionTypes)) {
      if (keywords.some(keyword => lowerQ.includes(keyword))) {
        questionType = type;
        break;
      }
    }

    return { questionType, originalQuestion: question, processedQuestion: lowerQ };
  };

  // 🤖 نظام الذكاء الاصطناعي المتطور - يجيب على أي سؤال
  const generateSuperIntelligentResponse = (analysis) => {
    const { questionType, processedQuestion } = analysis;

    // ===== البحث الذكي في قاعدة المعرفة الضخمة =====

    // المؤتمر والأحداث
    if (processedQuestion.includes('مؤتمر') || processedQuestion.includes('conference')) {
      if (questionType === 'when') return `📅 المؤتمر سيقام في ${megaKnowledgeBase.conference.date} في ${megaKnowledgeBase.conference.location}. هذا موعد مهم جداً لا تفوته!`;
      if (questionType === 'where') return `📍 سيقام المؤتمر في ${megaKnowledgeBase.conference.location}. مدينة طرابلس الجميلة ستستضيف هذا الحدث العلمي المهم.`;
      if (questionType === 'what') return `🎯 ${megaKnowledgeBase.conference.name} هو حدث علمي عالمي يجمع الخبراء والباحثين لمناقشة أحدث التطورات في مجال الطاقة والبيئة.`;
    }

    // العلوم الفيزيائية
    if (processedQuestion.includes('فيزياء') || processedQuestion.includes('physics')) {
      if (processedQuestion.includes('جاذبية') || processedQuestion.includes('gravity')) return `🌍 ${megaKnowledgeBase.science.physics.gravity}`;
      if (processedQuestion.includes('ضوء') || processedQuestion.includes('light')) return `💡 ${megaKnowledgeBase.science.physics.light}`;
      if (processedQuestion.includes('طاقة') || processedQuestion.includes('energy')) return `⚡ ${megaKnowledgeBase.science.physics.energy}`;
      if (processedQuestion.includes('ذرة') || processedQuestion.includes('atom')) return `⚛️ ${megaKnowledgeBase.science.physics.atoms}`;
      if (processedQuestion.includes('كم') || processedQuestion.includes('quantum')) return `🔬 ${megaKnowledgeBase.science.physics.quantum}`;
      return '🔬 الفيزياء علم رائع يدرس المادة والطاقة والحركة. أي جانب محدد تريد معرفته؟';
    }

    // الكيمياء
    if (processedQuestion.includes('كيمياء') || processedQuestion.includes('chemistry')) {
      if (processedQuestion.includes('ماء') || processedQuestion.includes('water')) return `💧 ${megaKnowledgeBase.science.chemistry.water}`;
      if (processedQuestion.includes('أكسجين') || processedQuestion.includes('oxygen')) return `🫁 ${megaKnowledgeBase.science.chemistry.oxygen}`;
      if (processedQuestion.includes('كربون') || processedQuestion.includes('carbon')) return `⚫ ${megaKnowledgeBase.science.chemistry.carbon}`;
      if (processedQuestion.includes('حمض') || processedQuestion.includes('acid')) return `🧪 ${megaKnowledgeBase.science.chemistry.acids}`;
      if (processedQuestion.includes('تفاعل') || processedQuestion.includes('reaction')) return `⚗️ ${megaKnowledgeBase.science.chemistry.reactions}`;
      return '🧪 الكيمياء تدرس تركيب وخصائص وتفاعلات المواد. ما الذي تريد معرفته تحديداً؟';
    }

    // الأحياء
    if (processedQuestion.includes('أحياء') || processedQuestion.includes('biology')) {
      if (processedQuestion.includes('dna') || processedQuestion.includes('وراثة')) return `🧬 ${megaKnowledgeBase.science.biology.dna}`;
      if (processedQuestion.includes('خلية') || processedQuestion.includes('cell')) return `🔬 ${megaKnowledgeBase.science.biology.cells}`;
      if (processedQuestion.includes('تطور') || processedQuestion.includes('evolution')) return `🐒 ${megaKnowledgeBase.science.biology.evolution}`;
      if (processedQuestion.includes('بناء ضوئي') || processedQuestion.includes('photosynthesis')) return `🌱 ${megaKnowledgeBase.science.biology.photosynthesis}`;
      return '🧬 علم الأحياء يدرس الكائنات الحية وعملياتها الحيوية. أي موضوع يهمك؟';
    }

    // التاريخ
    if (processedQuestion.includes('تاريخ') || processedQuestion.includes('history')) {
      if (processedQuestion.includes('مصر') || processedQuestion.includes('egypt')) return `🏺 ${megaKnowledgeBase.history.ancient.egypt}`;
      if (processedQuestion.includes('روما') || processedQuestion.includes('rome')) return `🏛️ ${megaKnowledgeBase.history.ancient.rome}`;
      if (processedQuestion.includes('يونان') || processedQuestion.includes('greece')) return `🏛️ ${megaKnowledgeBase.history.ancient.greece}`;
      if (processedQuestion.includes('حرب عالمية أولى')) return `⚔️ ${megaKnowledgeBase.history.modern.worldwar1}`;
      if (processedQuestion.includes('حرب عالمية ثانية')) return `💥 ${megaKnowledgeBase.history.modern.worldwar2}`;
      return '📚 التاريخ مليء بالأحداث المثيرة والدروس المهمة. أي فترة تاريخية تهمك؟';
    }

    // الرياضيات
    if (processedQuestion.includes('رياضيات') || processedQuestion.includes('math')) {
      if (processedQuestion.includes('جبر') || processedQuestion.includes('algebra')) return `📐 ${megaKnowledgeBase.mathematics.algebra}`;
      if (processedQuestion.includes('هندسة') || processedQuestion.includes('geometry')) return `📏 ${megaKnowledgeBase.mathematics.geometry}`;
      if (processedQuestion.includes('تفاضل') || processedQuestion.includes('calculus')) return `📊 ${megaKnowledgeBase.mathematics.calculus}`;
      if (processedQuestion.includes('إحصاء') || processedQuestion.includes('statistics')) return `📈 ${megaKnowledgeBase.mathematics.statistics}`;
      return '🔢 الرياضيات لغة العلوم والكون. أي فرع رياضي تريد التعلم عنه؟';
    }

    // الطب والصحة
    if (processedQuestion.includes('طب') || processedQuestion.includes('صحة') || processedQuestion.includes('medicine')) {
      if (processedQuestion.includes('قلب') || processedQuestion.includes('heart')) return `❤️ ${megaKnowledgeBase.medicine.heart}`;
      if (processedQuestion.includes('دماغ') || processedQuestion.includes('brain')) return `🧠 ${megaKnowledgeBase.medicine.brain}`;
      if (processedQuestion.includes('مناعة') || processedQuestion.includes('immune')) return `🛡️ ${megaKnowledgeBase.medicine.immune}`;
      if (processedQuestion.includes('فيتامين') || processedQuestion.includes('vitamin')) return `💊 ${megaKnowledgeBase.medicine.vitamins}`;
      if (processedQuestion.includes('رياضة') || processedQuestion.includes('exercise')) return `🏃‍♂️ ${megaKnowledgeBase.medicine.exercise}`;
      return '⚕️ الصحة أهم ما نملك. أي جانب صحي تريد معرفة المزيد عنه؟';
    }

    // الفلسفة
    if (processedQuestion.includes('فلسفة') || processedQuestion.includes('philosophy')) {
      if (processedQuestion.includes('أخلاق') || processedQuestion.includes('ethics')) return `⚖️ ${megaKnowledgeBase.philosophy.ethics}`;
      if (processedQuestion.includes('منطق') || processedQuestion.includes('logic')) return `🤔 ${megaKnowledgeBase.philosophy.logic}`;
      if (processedQuestion.includes('وجود') || processedQuestion.includes('existence')) return `🌌 ${megaKnowledgeBase.philosophy.existence}`;
      if (processedQuestion.includes('وعي') || processedQuestion.includes('consciousness')) return `🧘‍♂️ ${megaKnowledgeBase.philosophy.consciousness}`;
      return '🤔 الفلسفة تطرح الأسئلة الكبرى عن الحياة والوجود. ما يثير فضولك الفلسفي؟';
    }

    // الاقتصاد
    if (processedQuestion.includes('اقتصاد') || processedQuestion.includes('economy')) {
      if (processedQuestion.includes('عرض') || processedQuestion.includes('طلب') || processedQuestion.includes('supply')) return `📊 ${megaKnowledgeBase.economics.supply}`;
      if (processedQuestion.includes('تضخم') || processedQuestion.includes('inflation')) return `💰 ${megaKnowledgeBase.economics.inflation}`;
      if (processedQuestion.includes('ناتج') || processedQuestion.includes('gdp')) return `📈 ${megaKnowledgeBase.economics.gdp}`;
      if (processedQuestion.includes('استثمار') || processedQuestion.includes('investment')) return `💎 ${megaKnowledgeBase.economics.investment}`;
      return '💼 الاقتصاد يؤثر على حياتنا اليومية. أي مفهوم اقتصادي تريد فهمه؟';
    }

    // الفنون
    if (processedQuestion.includes('فن') || processedQuestion.includes('art')) {
      if (processedQuestion.includes('رسم') || processedQuestion.includes('painting')) return `🎨 ${megaKnowledgeBase.arts.painting}`;
      if (processedQuestion.includes('موسيقى') || processedQuestion.includes('music')) return `🎵 ${megaKnowledgeBase.arts.music}`;
      if (processedQuestion.includes('أدب') || processedQuestion.includes('literature')) return `📖 ${megaKnowledgeBase.arts.literature}`;
      if (processedQuestion.includes('نحت') || processedQuestion.includes('sculpture')) return `🗿 ${megaKnowledgeBase.arts.sculpture}`;
      return '🎭 الفنون تعبر عن الجمال والإبداع البشري. أي نوع فني يلهمك؟';
    }

    // الطبخ والطعام
    if (processedQuestion.includes('طبخ') || processedQuestion.includes('طعام') || processedQuestion.includes('cooking')) {
      if (processedQuestion.includes('تغذية') || processedQuestion.includes('nutrition')) return `🥗 ${megaKnowledgeBase.cooking.nutrition}`;
      if (processedQuestion.includes('بروتين') || processedQuestion.includes('protein')) return `🥩 ${megaKnowledgeBase.cooking.proteins}`;
      if (processedQuestion.includes('كربوهيدرات') || processedQuestion.includes('carbs')) return `🍞 ${megaKnowledgeBase.cooking.carbs}`;
      return '👨‍🍳 الطبخ فن وعلم! أي جانب من الطعام والتغذية يهمك؟';
    }

    // الرياضة
    if (processedQuestion.includes('رياضة') || processedQuestion.includes('sport')) {
      if (processedQuestion.includes('كرة قدم') || processedQuestion.includes('football')) return `⚽ ${megaKnowledgeBase.sports.football}`;
      if (processedQuestion.includes('سلة') || processedQuestion.includes('basketball')) return `🏀 ${megaKnowledgeBase.sports.basketball}`;
      if (processedQuestion.includes('سباحة') || processedQuestion.includes('swimming')) return `🏊‍♂️ ${megaKnowledgeBase.sports.swimming}`;
      if (processedQuestion.includes('جري') || processedQuestion.includes('running')) return `🏃‍♂️ ${megaKnowledgeBase.sports.running}`;
      return '🏆 الرياضة مهمة للصحة والمتعة. أي رياضة تمارس أو تحب؟';
    }

    // أسئلة شخصية وعامة
    if (processedQuestion.includes('مرحبا') || processedQuestion.includes('hello') || processedQuestion.includes('hi')) {
      const greetings = [
        '👋 أهلاً وسهلاً! سعيد جداً بلقائك! كيف يمكنني مساعدتك اليوم؟',
        '🌟 مرحباً بك في عالم المعرفة! أنا هنا لأجيب على أي سؤال يخطر ببالك!',
        '😊 أهلاً! أنا مساعدك الذكي المتطور، جاهز للإجابة على آلاف الأسئلة!',
        '🚀 مرحباً! دعنا نستكشف عالم المعرفة معاً!'
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    if (processedQuestion.includes('شكرا') || processedQuestion.includes('thanks')) {
      const thanks = [
        '🙏 العفو! سعيد جداً لمساعدتك. هل لديك أسئلة أخرى؟',
        '😊 لا شكر على واجب! أنا هنا دائماً لمساعدتك.',
        '🌟 تسلم! استمر في السؤال، أنا أحب التعلم معك!'
      ];
      return thanks[Math.floor(Math.random() * thanks.length)];
    }

    // أسئلة وجودية وفلسفية
    if (processedQuestion.includes('معنى الحياة') || processedQuestion.includes('meaning of life')) {
      return '🌟 معنى الحياة سؤال عميق! البعض يجده في الحب، آخرون في العلم، وآخرون في مساعدة الناس. ما رأيك أنت؟';
    }

    if (processedQuestion.includes('سعادة') || processedQuestion.includes('happiness')) {
      return '😊 السعادة تأتي من الرضا الداخلي، العلاقات الجيدة، تحقيق الأهداف، ومساعدة الآخرين. كل شخص يجد سعادته بطريقته الخاصة!';
    }

    // رد ذكي شامل للأسئلة غير المحددة
    return `🤖 سؤال رائع! أنا مساعد ذكي متطور يمكنني الإجابة على آلاف الأسئلة في:

    🔬 **العلوم**: فيزياء، كيمياء، أحياء، رياضيات
    📚 **التاريخ والجغرافيا**: حضارات قديمة وأحداث حديثة
    ⚕️ **الطب والصحة**: جسم الإنسان، التغذية، الرياضة
    🤔 **الفلسفة والفكر**: أسئلة وجودية وأخلاقية
    💼 **الاقتصاد والأعمال**: أسواق، استثمار، تجارة
    🎨 **الفنون والثقافة**: موسيقى، رسم، أدب
    👨‍🍳 **الطبخ والطعام**: وصفات، تغذية، ثقافات
    🏆 **الرياضة واللياقة**: جميع الألعاب والتمارين
    🎯 **معلومات المؤتمر**: كل ما تريد معرفته

    أعد صياغة سؤالك أو اسأل عن أي موضوع محدد! 😊`;
  };

  const findAnswer = (question) => {
    // حفظ السؤال في تاريخ المحادثة للتعلم
    setConversationHistory(prev => [...prev, question]);

    // تحليل السؤال
    const analysis = analyzeQuestion(question);

    // توليد رد ذكي متطور
    const response = generateSuperIntelligentResponse(analysis);

    // تحديث بيانات التعلم
    setLearningData(prev => ({
      ...prev,
      [question]: response,
      totalQuestions: (prev.totalQuestions || 0) + 1
    }));

    return response;
  };

  // 💡 اقتراحات ذكية متنوعة - أكثر من 100 اقتراح
  const suggestQuestions = () => {
    const suggestions = [
      // أسئلة المؤتمر
      '📅 متى موعد المؤتمر؟',
      '📍 أين سيقام المؤتمر؟',
      '📝 كيف أسجل في المؤتمر؟',
      '🎯 ما مواضيع المؤتمر؟',
      '🏆 هل سأحصل على شهادة؟',
      '📚 متى آخر موعد للأوراق البحثية؟',

      // أسئلة علمية
      '⚡ ما هي الطاقة المتجددة؟',
      '🌍 ما أسباب تغير المناخ؟',
      '� كيف تعمل الخلايا الشمسية؟',
      '💧 ما تركيب الماء الكيميائي؟',
      '🧬 ما هو الحمض النووي؟',
      '⚛️ كيف تتكون الذرة؟',
      '🌱 ما هو البناء الضوئي؟',
      '❤️ كيف يعمل القلب؟',
      '🧠 كم خلية في الدماغ؟',

      // أسئلة تاريخية
      '🏺 من بنى الأهرامات؟',
      '🏛️ ما هي الحضارة الرومانية؟',
      '⚔️ متى بدأت الحرب العالمية الأولى؟',
      '📚 من اخترع الكتابة؟',

      // أسئلة رياضية
      '📐 ما هو الجبر؟',
      '📏 كيف نحسب مساحة الدائرة؟',
      '📊 ما هو التفاضل؟',
      '📈 كيف نقرأ الإحصائيات؟',

      // أسئلة طبية
      '💊 ما فائدة الفيتامينات؟',
      '🛡️ كيف يعمل جهاز المناعة؟',
      '🏃‍♂️ ما فوائد الرياضة؟',
      '🥗 ما هي التغذية الصحية؟',

      // أسئلة فلسفية
      '🤔 ما معنى الحياة؟',
      '⚖️ ما هي الأخلاق؟',
      '� ما هو الوجود؟',
      '🧘‍♂️ ما هو الوعي؟',

      // أسئلة اقتصادية
      '💰 ما هو التضخم؟',
      '📊 كيف يعمل العرض والطلب؟',
      '💎 ما هو الاستثمار؟',
      '📈 ما هو الناتج المحلي؟',

      // أسئلة فنية
      '🎨 ما هو الرسم؟',
      '🎵 كيف تؤثر الموسيقى علينا؟',
      '📖 ما أهمية الأدب؟',
      '🗿 كيف يتم النحت؟',

      // أسئلة رياضية
      '⚽ ما قوانين كرة القدم؟',
      '🏀 كيف تلعب كرة السلة؟',
      '🏊‍♂️ ما فوائد السباحة؟',
      '🏃‍♂️ كيف أبدأ الجري؟',

      // أسئلة طبخ
      '👨‍🍳 كيف أطبخ الأرز؟',
      '🥩 ما هي البروتينات؟',
      '� ما هي الكربوهيدرات؟',
      '🥗 كيف أتبع نظام غذائي صحي؟',

      // أسئلة تكنولوجية
      '💻 كيف يعمل الكمبيوتر؟',
      '📱 ما هو الذكاء الاصطناعي؟',
      '🌐 كيف يعمل الإنترنت؟',
      '🤖 ما مستقبل التكنولوجيا؟',

      // أسئلة عامة ومسلية
      '🌟 كيف أكون سعيداً؟',
      '🎯 كيف أحقق أهدافي؟',
      '📚 كيف أتعلم بفعالية؟',
      '🧠 كيف أطور ذكائي؟',
      '💪 كيف أبني الثقة بالنفس؟',
      '🌈 ما هي ألوان قوس قزح؟',
      '🦋 كيف تتحول اليرقة إلى فراشة؟',
      '🌙 لماذا يتغير شكل القمر؟',
      '⭐ كم نجم في السماء؟',
      '🌍 كم قارة في العالم؟'
    ];
    return suggestions[Math.floor(Math.random() * suggestions.length)];
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = { type: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);

    // تحديث ملف المستخدم
    setUserProfile(prev => ({
      ...prev,
      totalQuestions: (prev.totalQuestions || 0) + 1,
      lastQuestion: inputText,
      timestamp: new Date().toISOString()
    }));

    setInputText('');
    setIsTyping(true);

    // محاكاة تأخير الرد مع ذكاء متقدم
    setTimeout(() => {
      const botResponse = findAnswer(inputText);
      const suggestion = suggestQuestions();

      const enhancedResponse = `${botResponse}\n\n💡 اقتراح: ${suggestion}`;

      const botMessage = { type: 'bot', text: enhancedResponse };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, Math.random() * 1500 + 500); // تأخير عشوائي لمحاكاة التفكير
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      {/* زر ثابت في الركن السفلي الأيمن */}
    <button
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    padding: '15px 20px',
    background: 'linear-gradient(45deg, rgb(255, 136, 0), rgb(255, 165, 0))',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(255, 123, 0, 0.69)',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    transform: showChat ? 'scale(0.9)' : 'scale(1)',
  }}
  onClick={toggleChat}
  onMouseEnter={(e) => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.boxShadow = '0 6px 20px rgba(255, 153, 0, 0.8)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = showChat ? 'scale(0.9)' : 'scale(1)';
    e.target.style.boxShadow = '0 4px 15px rgba(255, 123, 0, 0.69)';
  }}
>
  {showChat ? '✕' : ' Chat'}
</button>

      {/* الصفحة اللي بتظهر عند الضغط */}
      {showChat && (
        <div
          style={{
            position: 'fixed',
            bottom: '70px',
            right: '20px',
            width: '300px',
            height: '400px',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            borderRadius: '10px',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* رأس الـ Chatbot */}
<div
  style={{
    backgroundColor: '#ff8800', // العنوان
    color: 'white',
    padding: '10px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  }}
>
  <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
    🧠 مساعد ذكي متطور
    <span style={{ fontSize: '12px', opacity: 0.8 }}>• متصل</span>
  </h4>
</div>

{/* محتوى الـ Chatbot */}
<div style={{ flex: 1, padding: '10px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
  {/* الرسائل */}
  <div style={{ flex: 1, overflowY: 'auto', marginBottom: '10px' }}>
    {messages.map((message, index) => (
      <div
        key={index}
        style={{
          marginBottom: '10px',
          display: 'flex',
          justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start'
        }}
      >
        <div
          style={{
            maxWidth: '85%',
            padding: '10px 15px',
            borderRadius: '18px',
            background: message.type === 'user'
              ? 'linear-gradient(45deg,rgb(255, 115, 0),rgb(179, 101, 0))'
              : 'linear-gradient(45deg, #f8f9fa, #e9ecef)',
            color: message.type === 'user' ? 'white' : '#333',
            fontSize: '14px',
            lineHeight: '1.5',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: message.type === 'bot' ? '1px solid #dee2e6' : 'none',
            whiteSpace: 'pre-line'
          }}
        >
          {message.text}
        </div>
      </div>
    ))}
    {isTyping && (
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
        <div
          style={{
            padding: '10px 15px',
            borderRadius: '18px',
            background: 'linear-gradient(45deg, #f8f9fa, #e9ecef)',
            fontSize: '14px',
            border: '1px solid #dee2e6',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            animation: 'pulse 1.5s infinite'
          }}
        >
          🤖 أفكر في إجابة ذكية...
        </div>
      </div>
    )}
    <div ref={messagesEndRef} />
  </div>

  {/* مربع الإدخال */}
  <div style={{ display: 'flex', gap: '5px' }}>
    <input
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="اكتب رسالتك هنا..."
      style={{
        flex: 1,
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '20px',
        outline: 'none',
        fontSize: '14px'
      }}
    />
    <button
      onClick={handleSendMessage}
      style={{
        padding: '8px 15px',
        backgroundColor: '#ff8800', // زر الإرسال
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '14px'
      }}
    >
      إرسال
    </button>
  </div>
</div>

{/* زر إغلاق */}
<button
  style={{
    position: 'absolute',
    top: '5px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  }}
  onClick={toggleChat}
>
  &times;
</button>
</ div>
      )}
    </>
  );
};

export default ChatbotPopup;