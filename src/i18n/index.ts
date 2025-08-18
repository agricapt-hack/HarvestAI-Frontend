import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Header
      "nariShakti": "Harvest.AI",
      "financialCompanion": "Your Financial Friend",
      "loans": "Loans",
      "accounts": "Accounts",
      "recordings": "Recordings",
      "getStarted": "Get Started",

      // Hero Section
      "heroTag1": "Educate Finance",
      "heroTag2": "Smart Farming For Tomorrow",
      "heroDescription": "Learn and manage your farm finances with personalized, AI-powered advice. Receive guidance on loans, insurance, and crop planning to help your farm and income flourish.",
      "happyWomen": "Happy Women",
      "loansApproved": "Loans Approved",
      "aiSupport": "AI Support",

      "insurance": "Insurance",
      "activityPlanner": "MSME Planner",
      "recommendBankExperts": "Recommend Bank Experts",

      // Bank Contact
      "bankContactTitle": "Connect with Bank Experts",
      "bankContactDesc": "Take personalized recommendations from bank experts to get your queries resolved",

      // Dashboard Section
      "dashboardTitle": "Your Dashboard",
      "dashboardDescription": "Manage your financial journey with ease. Update your profile, set your ambition and track your progress.",

      // Products
      "exploreProducts": "Explore Financial Products",
      "productsDescription": "Click on any product to start an interactive conversation and discover how it works for your unique situation",

      // loan products
      "kisanCreditCardLoan": "Kisan Credit Card (KCC)",
      "kisanCreditCardLoanDesc": "Provides short-term credit for crop production, purchase of seeds, fertilizers, and other farm inputs with flexible repayment linked to crop harvesting.",
      "tractorMachineryLoan": "Tractor & Farm Machinery Loan",
      "tractorMachineryLoanDesc": "Helps farmers purchase tractors, harvesters, irrigation pumps, and modern equipment to improve productivity and reduce manual labor.",
      "cropLoan": "Crop Loan",
      "cropLoanDesc": "Offers quick finance for seasonal crop cultivation expenses such as seeds, fertilizers, pesticides, and labor costs, with repayment due after harvest.",
      "dairyLivestockLoan": "Dairy & Livestock Loan",
      "dairyLivestockLoanDesc": "Supports farmers in setting up or expanding dairy farms, poultry, goatery, or fisheries by providing funds for livestock purchase and maintenance.",
      "farmDevelopmentLoan": "Farm Development Loan",
      "farmDevelopmentLoanDesc": "Funds long-term agricultural investments like land leveling, fencing, irrigation system installation, greenhouse construction, and orchard plantations.",
      "agriGoldLoan": "Agri Gold Loan",
      "agriGoldLoanDesc": "Allows farmers to avail quick loans by pledging gold ornaments, providing immediate liquidity for farm operations with minimal documentation.",

      // account products
      "savingsAccount": "Savings Account",
      "savingsAccountDesc": "Choose from a wide variety of accounts to suit your banking needs",
      "salaryAccount": "Salary Account",
      "salaryAccountDesc": "Give employees hassle-free access to their salaries with plenty facilities",
      "currentAccount": "Current Account",
      "currentAccountDesc": "Carry out as many withdrawals and deposits as per your business requirement",
      "safeDepositLocker": "Safe Deposit Locker",
      "safeDepositLockerDesc": "Choose your desired locker size and keep your valuables secure",
      "safeCustody": "Safe Custody",
      "safeCustodyDesc": "Keep your documents & other valuable objects in safe custody",
      "sukanyaSamriddhi": "Sukanya Samriddhi",
      "sukanyaSamriddhiDesc": "Save to meet financial needs like education and marriage of girl child",

      // insurance products
      "pmfby": "PMFBY",
      "pmfbyDesc": "Insurance cover for crops damaged by natural calamities, pests, or diseases, ensuring farmers recover from financial losses after harvest failures.",
      "wbcis": "WBCIS",
      "wbcisDesc": "Protects farmers against weather-related risks such as drought, excess rainfall, frost, or heat waves through weather-index based claims.",
      "livestockInsurance": "Livestock Insurance",
      "livestockInsuranceDesc": "Covers cattle like cows, buffaloes, sheep, goats, and camels against death due to accidents, illness, or natural disasters.",
      "farmMachineryInsurance": "Farm Machinery Insurance",
      "farmMachineryInsuranceDesc": "Provides financial protection for tractors, harvesters, irrigation pumps, and other agricultural equipment against theft, fire, or accidental damage.",
      "personalAccidentInsurance": "Personal Accident Insurance",
      "personalAccidentInsuranceDesc": "Offers compensation in case of accidental death or disability of the farmer, ensuring financial support for the family.",
      "horticultureInsurance": "Horticulture & Plantation Insurance",
      "horticultureInsuranceDesc": "Covers high-value crops such as fruits, vegetables, tea, coffee, and rubber plantations against natural calamities and pest attacks.",

      // Features
      "whyChoose": "Why Choose NariShakti?",
      "simpleSignup": "Simple Sign Up",
      "simpleSignupDesc": "Just use your phone number to get started instantly. No complex paperwork required.",
      "interactiveLearning": "Interactive Learning",
      "interactiveLearningDesc": "Understand financial concepts through engaging conversations with AI avatars.",
      "personalizedGuidance": "Personalized Guidance",
      "personalizedGuidanceDesc": "Receive personalized, step-by-step instructions based on your needs.",

      // Call to Action
      "readyToTransform": "Ready to Transform Your Ambitions into Action?",
      "joinThousands": "Join thousands of farmers who have already improved their financial situation",
      "startJourney": "Start Your Journey Today",

      // Language Selector
      "selectLanguage": "Select Language",

      // File Upload Section
      "fileVerificationTitle": "Document Verification",
      "fileVerificationDesc": "Upload your documents and get AI-powered verification to ensure everything is correct.",
      "uploadFiles": "Upload Files",
      "dragDropFiles": "Drag & drop files here, or click to select",
      "supportedFormats": "Supports PDF, DOC, DOCX, JPG, PNG",
      "selectedFiles": "Selected Files",
      "textVoiceInput": "Text & Voice Input",
      "enterInstructions": "Enter instructions or questions about your documents...",
      "startRecording": "Start Recording",
      "stopRecording": "Stop Recording",
      "clear": "Clear",
      "analyzing": "Analyzing...",
      "verifyFiles": "Verify Files",
      "analysisCorrect": "Analysis Complete ✓",
      "analysisIncorrect": "Issues Found ⚠️",
      "fileAnalysisCorrect": "Your documents appear to be complete and correctly formatted. Everything looks good!",
      "fileAnalysisIncorrect": "We found some issues with your documents that need attention.",
      "fileAnalysisError": "An error occurred while analyzing your documents. Please try again.",
      "suggestions": "Suggestions for improvement",
      "suggestion1": "Ensure all pages are clearly visible and not blurred",
      "suggestion2": "Include all required signatures and dates",
      "suggestion3": "Double-check that all information matches your identity documents"
    }
  },
  hi: {
    translation: {
      // Header
      "nariShakti": "हार्वेस्ट.एआई",
      "financialCompanion": "आपका वित्तीय साथी",
      "loans": "ऋण",
      "accounts": "खाते",
      "recordings": "रिकॉर्डिंग्स",
      "getStarted": "शुरू करें",

      // Hero Section
      "heroTag1": "वित्त शिक्षा",
      "heroTag2": "भविष्य के लिए स्मार्ट खेती",
      "heroDescription": "व्यक्तिगत, एआई-सक्षम सलाह के साथ अपने कृषि वित्त का प्रबंधन और सीखें। अपने खेत और आय को बढ़ाने के लिए ऋण, बीमा और फसल योजना पर मार्गदर्शन प्राप्त करें।",
      "happyWomen": "खुश महिलाएं",
      "loansApproved": "स्वीकृत ऋण",
      "aiSupport": "एआई सहायता",

      "insurance": "बीमा",
      "activityPlanner": "एमएसएमई योजना नियोजक",
      "recommendBankExperts": "बैंक विशेषज्ञों की सिफारिश करें",

      // Bank Contact
      "bankContactTitle": "बैंक विशेषज्ञों से जुड़ें",
      "bankContactDesc": "बैंक विशेषज्ञों से व्यक्तिगत सुझाव प्राप्त करें",

      // Dashboard Section
      "dashboardTitle": "आपका डैशबोर्ड",
      "dashboardDescription": "अपने वित्तीय सफर को आसानी से प्रबंधित करें। अपनी प्रोफ़ाइल अपडेट करें, लक्ष्य निर्धारित करें और प्रगति ट्रैक करें।",

      // Products
      "exploreProducts": "वित्तीय उत्पादों का अन्वेषण करें",
      "productsDescription": "किसी भी उत्पाद पर क्लिक करके इंटरैक्टिव बातचीत शुरू करें और जानें कि यह आपकी परिस्थिति के लिए कैसे फायदेमंद है।",

      // loan products
      "kisanCreditCardLoan": "किसान क्रेडिट कार्ड (KCC)",
      "kisanCreditCardLoanDesc": "फसल उत्पादन, बीज, उर्वरक और अन्य कृषि इनपुट की खरीद के लिए अल्पकालिक ऋण प्रदान करता है, जिसकी अदायगी फसल कटाई से जुड़ी होती है।",
      "tractorMachineryLoan": "ट्रैक्टर और कृषि मशीनरी ऋण",
      "tractorMachineryLoanDesc": "किसानों को ट्रैक्टर, हार्वेस्टर, सिंचाई पंप और आधुनिक उपकरण खरीदने में मदद करता है ताकि उत्पादकता बढ़ाई जा सके और श्रम कम हो।",
      "cropLoan": "फसल ऋण",
      "cropLoanDesc": "मौसमी फसलों की बुवाई, बीज, उर्वरक, कीटनाशक और मजदूरी खर्चों के लिए त्वरित वित्त प्रदान करता है, जिसकी अदायगी कटाई के बाद होती है।",
      "dairyLivestockLoan": "डेयरी और पशुधन ऋण",
      "dairyLivestockLoanDesc": "डेयरी फार्म, पोल्ट्री, बकरी पालन या मत्स्य पालन की स्थापना या विस्तार में किसानों की मदद करता है, पशु खरीद और रखरखाव के लिए धन उपलब्ध कराता है।",
      "farmDevelopmentLoan": "फार्म विकास ऋण",
      "farmDevelopmentLoanDesc": "भूमि समतलीकरण, बाड़बंदी, सिंचाई प्रणाली, ग्रीनहाउस निर्माण और बागवानी जैसी दीर्घकालिक कृषि निवेशों के लिए धन उपलब्ध कराता है।",
      "agriGoldLoan": "कृषि स्वर्ण ऋण",
      "agriGoldLoanDesc": "किसान स्वर्ण आभूषण गिरवी रखकर तुरंत ऋण प्राप्त कर सकते हैं, जिससे कृषि कार्यों के लिए तुरंत नकदी मिलती है और न्यूनतम दस्तावेज़ की आवश्यकता होती है।",

      // account products
      "savingsAccount": "बचत खाता",
      "savingsAccountDesc": "अपने बैंकिंग ज़रूरतों के अनुसार खातों का व्यापक चयन करें।",
      "salaryAccount": "वेतन खाता",
      "salaryAccountDesc": "कर्मचारियों को वेतन की आसान पहुँच और कई सुविधाएं प्रदान करें।",
      "currentAccount": "चालू खाता",
      "currentAccountDesc": "अपने व्यवसायिक ज़रूरतों के अनुसार जितनी बार चाहें लेन-देन करें।",
      "safeDepositLocker": "सेफ डिपॉज़िट लॉकर",
      "safeDepositLockerDesc": "अपनी ज़रूरत के अनुसार लॉकर का आकार चुनें और अपनी वस्तुओं को सुरक्षित रखें।",
      "safeCustody": "सुरक्षित संरक्षण",
      "safeCustodyDesc": "अपने दस्तावेज़ों और अन्य मूल्यवान वस्तुओं को सुरक्षित संरक्षण में रखें।",
      "sukanyaSamriddhi": "सुकन्या समृद्धि",
      "sukanyaSamriddhiDesc": "बेटी की शिक्षा और विवाह जैसे उद्देश्यों के लिए बचत करें।",

      "pmfby": "PMFBY",
      "pmfbyDesc": "प्राकृतिक आपदाओं, कीटों या रोगों से प्रभावित फसलों के लिए बीमा कवरेज, जिससे किसान फसल खराब होने के बाद वित्तीय नुकसान से उबर सकें।",
      "wbcis": "WBCIS",
      "wbcisDesc": "सूखा, अधिक वर्षा, ओले या गर्मी जैसी मौसम संबंधी जोखिमों से किसानों को सुरक्षा प्रदान करता है, मौसम-सूचकांक आधारित दावों के माध्यम से।",
      "livestockInsurance": "पशुधन बीमा",
      "livestockInsuranceDesc": "गाय, भैंस, भेड़, बकरी और ऊँट जैसी पालतू पशुओं की दुर्घटना, बीमारी या प्राकृतिक आपदा से मृत्यु के खिलाफ सुरक्षा।",
      "farmMachineryInsurance": "कृषि मशीनरी बीमा",
      "farmMachineryInsuranceDesc": "ट्रैक्टर, हार्वेस्टर, सिंचाई पंप और अन्य कृषि उपकरणों को चोरी, आग या दुर्घटना से होने वाले नुकसान के खिलाफ वित्तीय सुरक्षा प्रदान करता है।",
      "personalAccidentInsurance": "व्यक्तिगत दुर्घटना बीमा",
      "personalAccidentInsuranceDesc": "किसान की आकस्मिक मृत्यु या विकलांगता की स्थिति में मुआवजा प्रदान करता है, जिससे परिवार को वित्तीय सुरक्षा मिलती है।",
      "horticultureInsurance": "बागवानी एवं प्लांटेशन बीमा",
      "horticultureInsuranceDesc": "फल, सब्ज़ियाँ, चाय, कॉफ़ी और रबर जैसी उच्च मूल्य वाली फसलों को प्राकृतिक आपदाओं और कीटों से होने वाले नुकसान के खिलाफ कवर करता है।",

      // Features
      "whyChoose": "आरोहण क्यों चुनें?",
      "simpleSignup": "सरल साइन अप",
      "simpleSignupDesc": "सिर्फ मोबाइल नंबर से तुरंत शुरुआत करें, बिना किसी जटिल कागज़ी कार्रवाई के।",
      "interactiveLearning": "इंटरैक्टिव लर्निंग",
      "interactiveLearningDesc": "एआई अवतार के माध्यम से रोचक बातचीत के साथ वित्तीय ज्ञान प्राप्त करें।",
      "personalizedGuidance": "व्यक्तिगत मार्गदर्शन",
      "personalizedGuidanceDesc": "आपकी ज़रूरतों के अनुसार चरण-दर-चरण व्यक्तिगत सलाह प्राप्त करें।",

      // Call to Action
      "readyToTransform": "क्या आप अपने सपनों को साकार करना चाहते हैं?",
      "joinThousands": "हजारों किसानों में शामिल हों जिन्होंने पहले ही अपनी वित्तीय स्थिति सुधारी है",
      "startJourney": "अपनी यात्रा आज ही शुरू करें",

      // Language Selector
      "selectLanguage": "भाषा चुनें",

      // File Upload Section
      "fileVerificationTitle": "दस्तावेज़ सत्यापन",
      "fileVerificationDesc": "अपने दस्तावेज़ अपलोड करें और एआई-संचालित सत्यापन प्राप्त करें।",
      "uploadFiles": "फाइल अपलोड करें",
      "dragDropFiles": "यहाँ ड्रैग और ड्रॉप करें, या चयन करने के लिए क्लिक करें",
      "supportedFormats": "समर्थित प्रारूप: PDF, DOC, DOCX, JPG, PNG",
      "selectedFiles": "चयनित फाइलें",
      "textVoiceInput": "टेक्स्ट और वॉयस इनपुट",
      "enterInstructions": "अपने दस्तावेज़ों से संबंधित निर्देश या प्रश्न दर्ज करें...",
      "startRecording": "रिकॉर्डिंग शुरू करें",
      "stopRecording": "रिकॉर्डिंग रोकें",
      "clear": "हटाएं",
      "analyzing": "विश्लेषण किया जा रहा है...",
      "verifyFiles": "फाइल सत्यापित करें",
      "analysisCorrect": "विश्लेषण पूर्ण ✓",
      "analysisIncorrect": "कुछ समस्याएं पाई गईं ⚠️",
      "fileAnalysisCorrect": "आपके दस्तावेज़ पूर्ण और सही प्रारूप में प्रतीत हो रहे हैं। सब कुछ ठीक है!",
      "fileAnalysisIncorrect": "हमने आपके दस्तावेज़ों में कुछ समस्याएं पाई हैं जिन्हें ठीक करने की आवश्यकता है।",
      "fileAnalysisError": "दस्तावेज़ों का विश्लेषण करते समय त्रुटि हुई। कृपया पुनः प्रयास करें।",
      "suggestions": "सुधार के सुझाव",
      "suggestion1": "सुनिश्चित करें कि सभी पृष्ठ स्पष्ट और धुंधले न हों।",
      "suggestion2": "सभी आवश्यक हस्ताक्षर और दिनांक शामिल करें।",
      "suggestion3": "सुनिश्चित करें कि सभी जानकारी आपकी पहचान दस्तावेज़ों से मेल खाती हो।"
    }
  },
  bn: {
    translation: {
      // Header
      "nariShakti": "হারভেস্ট.এআই",
      "financialCompanion": "আপনার আর্থিক বন্ধু",
      "loans": "ঋণ",
      "accounts": "হিসাব",
      "recordings": "রেকর্ডিং",
      "getStarted": "শুরু করুন",

      // Hero Section
      "heroTag1": "আর্থিক শিক্ষা",
      "heroTag2": "ভবিষ্যতের জন্য স্মার্ট চাষ",
      "heroDescription": "ব্যক্তিগত, এআই-সক্ষম পরামর্শের মাধ্যমে আপনার কৃষি অর্থ পরিচালনা এবং শিখুন। ঋণ, বীমা এবং ফসল পরিকল্পনা নিয়ে নির্দেশনা পান যাতে আপনার খামার এবং আয় বৃদ্ধি পায়।",
      "happyWomen": "সন্তুষ্ট নারী",
      "loansApproved": "অনুমোদিত ঋণ",
      "aiSupport": "এআই সহায়তা",

      "insurance": "বীমা",
      "activityPlanner": "এমএসএমই পরিকল্পনা প্রস্তুতকারী",
      "recommendBankExperts": "ব্যাংক বিশেষজ্ঞ সুপারিশ করুন",

      // Bank Contact
      "bankContactTitle": "ব্যাংক বিশেষজ্ঞদের সাথে যোগাযোগ করুন",
      "bankContactDesc": "ব্যাংক বিশেষজ্ঞদের কাছ থেকে ব্যক্তিগত পরামর্শ পান",

      // Dashboard Section
      "dashboardTitle": "আপনার ড্যাশবোর্ড",
      "dashboardDescription": "সহজেই আপনার আর্থিক যাত্রা পরিচালনা করুন। প্রোফাইল আপডেট করুন, আপনার লক্ষ্য নির্ধারণ করুন এবং আপনার অগ্রগতি ট্র্যাক করুন।",

      // Products
      "exploreProducts": "আর্থিক পণ্যগুলি অন্বেষণ করুন",
      "productsDescription": "কোনও একটি পণ্যে ক্লিক করুন এবং ইন্টার‌্যাকটিভ কথোপকথনের মাধ্যমে জানুন এটি আপনার পরিস্থিতিতে কিভাবে কার্যকর হতে পারে",

      // loan products
      "kisanCreditCardLoan": "কিষান ক্রেডিট কার্ড (KCC)",
      "kisanCreditCardLoanDesc": "ফসল উৎপাদন, বীজ, সার এবং অন্যান্য কৃষি উপকরণ কেনার জন্য স্বল্পমেয়াদী ঋণ প্রদান করে, যা ফসল কাটার সঙ্গে যুক্তভাবে শোধ করতে হয়।",
      "tractorMachineryLoan": "ট্রাক্টর ও কৃষি যন্ত্রপাতি ঋণ",
      "tractorMachineryLoanDesc": "কৃষকদের ট্রাক্টর, হারভেস্টার, সেচ পাম্প ও আধুনিক যন্ত্রপাতি কেনায় সহায়তা করে যাতে উৎপাদনশীলতা বাড়ে এবং শ্রম কমে।",
      "cropLoan": "ফসল ঋণ",
      "cropLoanDesc": "মৌসুমি ফসলের বীজ, সার, কীটনাশক ও শ্রম ব্যয়ের জন্য দ্রুত অর্থ প্রদান করে, যার পরিশোধ ফসল কাটার পরে করতে হয়।",
      "dairyLivestockLoan": "ডেইরি ও পশুপালন ঋণ",
      "dairyLivestockLoanDesc": "ডেইরি ফার্ম, পোল্ট্রি, ছাগল পালন বা মৎস্যচাষ শুরু বা সম্প্রসারণে সহায়তা করে, পশু কেনা ও রক্ষণাবেক্ষণের জন্য অর্থ প্রদান করে।",
      "farmDevelopmentLoan": "খামার উন্নয়ন ঋণ",
      "farmDevelopmentLoanDesc": "জমি সমতলকরণ, বেড়া দেওয়া, সেচ ব্যবস্থা, গ্রিনহাউস নির্মাণ ও ফলের বাগান তৈরির মতো দীর্ঘমেয়াদী কৃষি বিনিয়োগে অর্থ প্রদান করে।",
      "agriGoldLoan": "কৃষি স্বর্ণ ঋণ",
      "agriGoldLoanDesc": "কৃষকরা সোনার গয়না বন্ধক রেখে দ্রুত ঋণ পেতে পারেন, যা কৃষিকাজের জন্য তাৎক্ষণিক নগদ প্রদান করে এবং ন্যূনতম কাগজপত্রের প্রয়োজন হয়।",

      "pmfby": "PMFBY",
      "pmfbyDesc": "প্রাকৃতিক দুর্যোগ, কীট বা রোগে ক্ষতিগ্রস্ত ফসলের জন্য বীমা কভার, যা ফসল ব্যর্থতার পরে কৃষকদের আর্থিক ক্ষতি থেকে পুনরুদ্ধার নিশ্চিত করে।",
      "wbcis": "WBCIS",
      "wbcisDesc": "খরাপ, অতিরিক্ত বৃষ্টি, জমাট বরফ বা তাপপ্রবাহের মতো আবহাওয়া-সংক্রান্ত ঝুঁকির বিরুদ্ধে কৃষকদের সুরক্ষা প্রদান করে, আবহাওয়া-সূচক ভিত্তিক দাবি মাধ্যমে।",
      "livestockInsurance": "পশুপালন বীমা",
      "livestockInsuranceDesc": "গরু, ভেড়া, ছাগল এবং উটের মতো পশুপালনকে দুর্ঘটনা, অসুস্থতা বা প্রাকৃতিক দুর্যোগে মৃত্যুর বিরুদ্ধে আচ্ছাদন করে।",
      "farmMachineryInsurance": "কৃষি যন্ত্রপাতি বীমা",
      "farmMachineryInsuranceDesc": "ট্রাক্টর, হারভেস্টার, সেচ পাম্প এবং অন্যান্য কৃষি যন্ত্রপাতিকে চুরি, আগুন বা দুর্ঘটনার বিরুদ্ধে আর্থিক সুরক্ষা প্রদান করে।",
      "personalAccidentInsurance": "ব্যক্তিগত দুর্ঘটনা বীমা",
      "personalAccidentInsuranceDesc": "কৃষকের দুর্ঘটনাজনিত মৃত্যু বা অক্ষমতার ক্ষেত্রে ক্ষতিপূরণ প্রদান করে, যা পরিবারের আর্থিক সুরক্ষা নিশ্চিত করে।",
      "horticultureInsurance": "বাগান ও প্ল্যান্টেশন বীমা",
      "horticultureInsuranceDesc": "ফল, সবজি, চা, কফি এবং রাবারের মতো উচ্চ-মূল্য ফসলকে প্রাকৃতিক দুর্যোগ এবং কীট আক্রমণের বিরুদ্ধে কভার করে।",

      // account products
      "savingsAccount": "সঞ্চয় হিসাব",
      "savingsAccountDesc": "আপনার ব্যাঙ্কিং প্রয়োজন অনুযায়ী বিভিন্ন ধরনের হিসাব বেছে নিন",
      "salaryAccount": "বেতন হিসাব",
      "salaryAccountDesc": "কর্মীদের জন্য সহজ বেতনের ব্যবস্থাপনা সহ অনেক সুবিধা পান",
      "currentAccount": "চলতি হিসাব",
      "currentAccountDesc": "আপনার ব্যবসার প্রয়োজনে যতবার খুশি জমা এবং উত্তোলন করুন",
      "safeDepositLocker": "নিরাপদ লকার",
      "safeDepositLockerDesc": "আপনার পছন্দের লকারের আকার বেছে নিন এবং মূল্যবান জিনিসপত্র নিরাপদে রাখুন",
      "safeCustody": "নিরাপদ রক্ষণাবেক্ষণ",
      "safeCustodyDesc": "আপনার নথি ও মূল্যবান বস্তু নিরাপদে সংরক্ষণ করুন",
      "sukanyaSamriddhi": "সুকন্যা সমৃদ্ধি",
      "sukanyaSamriddhiDesc": "মেয়েশিশুর শিক্ষা ও বিবাহের জন্য সঞ্চয় করুন",

      // Features
      "whyChoose": "কেন বেছে নেবেন আরোহন?",
      "simpleSignup": "সহজ সাইন আপ",
      "simpleSignupDesc": "শুধু আপনার ফোন নম্বর ব্যবহার করে তৎক্ষণাৎ শুরু করুন। জটিল কাগজপত্র প্রয়োজন নেই।",
      "interactiveLearning": "ইন্টার‌্যাকটিভ শেখা",
      "interactiveLearningDesc": "এআই অ্যাভাটারদের সাথে আকর্ষণীয় কথোপকথনের মাধ্যমে আর্থিক ধারণাগুলি বুঝুন।",
      "personalizedGuidance": "ব্যক্তিগত পরামর্শ",
      "personalizedGuidanceDesc": "আপনার প্রয়োজন অনুযায়ী ধাপে ধাপে নির্দিষ্ট দিকনির্দেশনা পান।",

      // Call to Action
      "readyToTransform": "আপনার লক্ষ্যকে বাস্তবে রূপ দিতে প্রস্তুত?",
      "joinThousands": "হাজার হাজার কৃষকের সঙ্গে যোগ দিন যারা ইতিমধ্যে তাদের আর্থিক পরিস্থিতি উন্নত করেছেন",
      "startJourney": "আজই আপনার যাত্রা শুরু করুন",

      // Language Selector
      "selectLanguage": "ভাষা নির্বাচন করুন",

      // File Upload Section
      "fileVerificationTitle": "নথি যাচাই",
      "fileVerificationDesc": "আপনার নথি আপলোড করুন এবং সঠিকতা যাচাইয়ের জন্য এআই ভিত্তিক বিশ্লেষণ পান।",
      "uploadFiles": "ফাইল আপলোড করুন",
      "dragDropFiles": "ফাইলগুলি এখানে ড্র্যাগ ও ড্রপ করুন, অথবা ক্লিক করে নির্বাচন করুন",
      "supportedFormats": "সমর্থিত ফরম্যাট: PDF, DOC, DOCX, JPG, PNG",
      "selectedFiles": "নির্বাচিত ফাইল",
      "textVoiceInput": "টেক্সট ও ভয়েস ইনপুট",
      "enterInstructions": "আপনার নথি সম্পর্কে প্রশ্ন বা নির্দেশ লিখুন...",
      "startRecording": "রেকর্ডিং শুরু করুন",
      "stopRecording": "রেকর্ডিং বন্ধ করুন",
      "clear": "মুছে ফেলুন",
      "analyzing": "বিশ্লেষণ করা হচ্ছে...",
      "verifyFiles": "ফাইল যাচাই করুন",
      "analysisCorrect": "বিশ্লেষণ সম্পূর্ণ ✓",
      "analysisIncorrect": "সমস্যা পাওয়া গেছে ⚠️",
      "fileAnalysisCorrect": "আপনার নথিগুলি সম্পূর্ণ এবং সঠিকভাবে ফরম্যাট করা হয়েছে বলে মনে হচ্ছে। সবকিছু ঠিক আছে!",
      "fileAnalysisIncorrect": "আপনার নথিতে কিছু সমস্যা পাওয়া গেছে যা ঠিক করতে হবে।",
      "fileAnalysisError": "নথি বিশ্লেষণের সময় একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
      "suggestions": "উন্নতির জন্য পরামর্শ",
      "suggestion1": "নিশ্চিত করুন যে সব পৃষ্ঠাগুলি স্পষ্টভাবে দৃশ্যমান এবং ঝাপসা নয়",
      "suggestion2": "সকল প্রয়োজনীয় স্বাক্ষর ও তারিখ অন্তর্ভুক্ত করুন",
      "suggestion3": "সব তথ্য আপনার পরিচয়পত্রের সঙ্গে মিলে কিনা তা আবার যাচাই করুন"
    }
  },
  mr: {
    translation: {
      // Header
      "nariShakti": "हार्वेस्ट.एआय",
      "financialCompanion": "तुमचा आर्थिक मित्र",
      "loans": "कर्जे",
      "accounts": "खाते",
      "recordings": "रेकॉर्डिंग",
      "getStarted": "सुरू करा",

      // Hero Section
      "heroTag1": "आर्थिक शिक्षण",
      "heroTag2": "उद्याच्या शेतीसाठी स्मार्ट",
      "heroDescription": "वैयक्तिक, एआय-सक्षम मार्गदर्शनासह आपल्या शेतातील आर्थिक गोष्टी शिका आणि व्यवस्थापित करा. कर्ज, विमा आणि पीक नियोजनावर मार्गदर्शन मिळवा जेणेकरून आपले शेत आणि उत्पन्न वाढेल.",

      "happyWomen": "आनंदी महिला",
      "loansApproved": "मंजूर कर्जे",
      "aiSupport": "एआय सहाय्य",

      "insurance": "विमा",
      "activityPlanner": "एमएसएमई योजना नियोजक",
      "recommendBankExperts": "बँक तज्ञांची शिफारस करा",

      // Bank Contact
      "bankContactTitle": "बँक तज्ञांशी संपर्क साधा",
      "bankContactDesc": "बँक तज्ञांकडून वैयक्तिक शिफारसी मिळवा",

      // Dashboard Section
      "dashboardTitle": "तुमचा डॅशबोर्ड",
      "dashboardDescription": "तुमची आर्थिक वाटचाल सहजतेने व्यवस्थापित करा. तुमची प्रोफाइल अपडेट करा, तुमचे उद्दिष्ट सेट करा आणि प्रगती ट्रॅक करा.",

      // Products
      "exploreProducts": "आर्थिक उत्पादने एक्सप्लोर करा",
      "productsDescription": "कोणतेही उत्पादन निवडा आणि संवादात्मक चर्चेद्वारे ते तुमच्यासाठी कसे फायदेशीर आहे ते जाणून घ्या",

      // loan products
      "kisanCreditCardLoan": "शेतकरी क्रेडिट कार्ड (KCC)",
      "kisanCreditCardLoanDesc": "पिक उत्पादन, बियाणे, खते आणि इतर शेतीसाठी लागणारे साहित्य खरेदी करण्यासाठी अल्पकालीन कर्ज पुरवते, ज्याची परतफेड कापणीशी जोडलेली असते.",
      "tractorMachineryLoan": "ट्रॅक्टर व शेती यंत्रसामग्री कर्ज",
      "tractorMachineryLoanDesc": "शेतकऱ्यांना ट्रॅक्टर, हार्वेस्टर, सिंचन पंप व आधुनिक साधने खरेदी करण्यास मदत करते, ज्यामुळे उत्पादनक्षमता वाढते व श्रम कमी होतो.",
      "cropLoan": "पिक कर्ज",
      "cropLoanDesc": "हंगामी पिकांसाठी बी-बियाणे, खते, कीटकनाशके व मजुरी खर्च भागवण्यासाठी जलद वित्तपुरवठा करते, ज्याची परतफेड कापणीनंतर करावी लागते.",
      "dairyLivestockLoan": "दुग्ध व पशुधन कर्ज",
      "dairyLivestockLoanDesc": "दुग्ध व्यवसाय, पोल्ट्री, शेळीपालन किंवा मत्स्यपालन सुरू करण्यासाठी किंवा वाढवण्यासाठी शेतकऱ्यांना मदत करते, पशू खरेदी व देखभालीसाठी निधी पुरवते.",
      "farmDevelopmentLoan": "शेती विकास कर्ज",
      "farmDevelopmentLoanDesc": "जमीन समतल करणे, कुंपण घालणे, सिंचन व्यवस्था, ग्रीनहाऊस बांधकाम आणि फळबाग लागवड यांसारख्या दीर्घकालीन गुंतवणुकीसाठी निधी पुरवते.",
      "agriGoldLoan": "कृषी सोनं कर्ज",
      "agriGoldLoanDesc": "शेतकरी सोन्याचे दागिने गहाण ठेवून तत्काळ कर्ज मिळवू शकतात, ज्यामुळे शेतीसाठी तात्काळ निधी मिळतो आणि कमी कागदपत्रांची गरज भासते.",

      // account products
      "savingsAccount": "बचत खाते",
      "savingsAccountDesc": "तुमच्या गरजेनुसार विविध प्रकारची खाती निवडा",
      "salaryAccount": "पगार खाते",
      "salaryAccountDesc": "कर्मचाऱ्यांना पगाराचा सोपा प्रवेश आणि विविध सुविधा",
      "currentAccount": "चालू खाते",
      "currentAccountDesc": "तुमच्या व्यवसायानुसार अमर्याद व्यवहार करा",
      "safeDepositLocker": "सेफ डिपॉझिट लॉकर",
      "safeDepositLockerDesc": "हवे ते लॉकर साइज निवडा आणि तुमच्या मौल्यवान वस्तू सुरक्षित ठेवा",
      "safeCustody": "सुरक्षित जपणूक",
      "safeCustodyDesc": "तुमची कागदपत्रे व इतर मौल्यवान वस्तू सुरक्षित ठेवा",
      "sukanyaSamriddhi": "सुकन्या समृद्धी",
      "sukanyaSamriddhiDesc": "मुलीच्या शिक्षण व विवाहासाठी बचत करा",

      "pmfby": "PMFBY",
      "pmfbyDesc": "नैसर्गिक आपत्ती, कीटक किंवा रोगांमुळे होणाऱ्या पिकांच्या नुकसानीसाठी विमा संरक्षण, ज्यामुळे शेतकऱ्यांना पिकांचे नुकसान झाल्यानंतर आर्थिक मदत मिळते.",
      "wbcis": "WBCIS",
      "wbcisDesc": "दुष्काळ, जास्त पाऊस, गारपीट किंवा उष्णतेसारख्या हवामान संबंधी जोखमींपासून शेतकऱ्यांचे संरक्षण करते, हवामान निर्देशांक आधारित दावा प्रणालीद्वारे.",
      "livestockInsurance": "पशुधन विमा",
      "livestockInsuranceDesc": "गाय, म्हैस, मेंढी, बकरी व उंट यांसारख्या पशुंची अपघात, आजार किंवा नैसर्गिक आपत्तीमुळे मृत्यू झाल्यास संरक्षण प्रदान करते.",
      "farmMachineryInsurance": "शेती यंत्रसामग्री विमा",
      "farmMachineryInsuranceDesc": "ट्रॅक्टर, हार्वेस्टर, सिंचन पंप आणि इतर कृषी उपकरणांवर चोरी, आग किंवा अपघातामुळे होणाऱ्या नुकसानीसाठी आर्थिक सुरक्षा प्रदान करते.",
      "personalAccidentInsurance": "वैयक्तिक अपघात विमा",
      "personalAccidentInsuranceDesc": "शेतकऱ्याच्या आकस्मिक मृत्यू किंवा अपंगत्वाच्या परिस्थितीत नुकसान भरपाई देते, ज्यामुळे कुटुंबाला आर्थिक सुरक्षा मिळते.",
      "horticultureInsurance": "बागकाम व प्लांटेशन विमा",
      "horticultureInsuranceDesc": "फळ, भाजीपाला, चहा, कॉफी व रबर यांसारख्या उच्च मूल्याच्या पिकांना नैसर्गिक आपत्ती व कीटकांपासून संरक्षण देते.",

      // Features
      "whyChoose": "आरोहन का निवडावे?",
      "simpleSignup": "सोपे साइन अप",
      "simpleSignupDesc": "फक्त मोबाईल नंबर वापरून लगेच सुरू करा. कोणतीही जटिल कागदपत्रे नाहीत.",
      "interactiveLearning": "संवादात्मक शिक्षण",
      "interactiveLearningDesc": "एआय अवतारांसोबत संवाद साधून आर्थिक संकल्पना समजून घ्या.",
      "personalizedGuidance": "वैयक्तिक मार्गदर्शन",
      "personalizedGuidanceDesc": "तुमच्या गरजेनुसार टप्प्याटप्प्याने वैयक्तिक सूचना मिळवा.",

      // Call to Action
      "readyToTransform": "तुमची स्वप्ने कृतीत आणण्यासाठी तयार आहात का?",
      "joinThousands": "हजारो शेतकऱ्यांमध्ये सामील व्हा ज्यांनी आधीच आपली आर्थिक स्थिती सुधारली आहे",
      "startJourney": "आजच तुमची वाटचाल सुरू करा",

      // Language Selector
      "selectLanguage": "भाषा निवडा",

      // File Upload Section
      "fileVerificationTitle": "दस्तऐवज पडताळणी",
      "fileVerificationDesc": "तुमचे दस्तऐवज अपलोड करा आणि अचूकतेसाठी एआय द्वारे पडताळणी करा.",
      "uploadFiles": "फायली अपलोड करा",
      "dragDropFiles": "फायली येथे ड्रॅग करा किंवा क्लिक करून निवडा",
      "supportedFormats": "PDF, DOC, DOCX, JPG, PNG समर्थन",
      "selectedFiles": "निवडलेले फायली",
      "textVoiceInput": "मजकूर व आवाज इनपुट",
      "enterInstructions": "तुमच्या दस्तऐवजांसाठी सूचना किंवा प्रश्न लिहा...",
      "startRecording": "रेकॉर्डिंग सुरू करा",
      "stopRecording": "रेकॉर्डिंग थांबवा",
      "clear": "क्लिअर करा",
      "analyzing": "विश्लेषण सुरू आहे...",
      "verifyFiles": "फायली पडताळा",
      "analysisCorrect": "विश्लेषण पूर्ण ✓",
      "analysisIncorrect": "समस्या आढळल्या ⚠️",
      "fileAnalysisCorrect": "तुमचे दस्तऐवज पूर्ण व योग्य स्वरूपात असल्याचे दिसते. सर्व काही योग्य आहे!",
      "fileAnalysisIncorrect": "तुमच्या दस्तऐवजांमध्ये काही समस्या आहेत ज्यांकडे लक्ष देणे आवश्यक आहे.",
      "fileAnalysisError": "दस्तऐवज विश्लेषण करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.",
      "suggestions": "सुधारणेसाठी सूचना",
      "suggestion1": "सर्व पृष्ठे स्पष्ट व धूसर नसलेली असल्याची खात्री करा",
      "suggestion2": "सर्व आवश्यक सह्या व दिनांक जोडा",
      "suggestion3": "तुमची माहिती ओळखपत्रांशी जुळते याची खात्री करा"
    }
  },
  kn: {
    translation: {
      // Header
      "nariShakti": "ಹಾರ್ವೆಸ್ಟ್.ಎಐ",
      "financialCompanion": "ನಿಮ್ಮ ಆರ್ಥಿಕ ಸಂಗಾತಿ",
      "loans": "ಣಗಳು",
      "accounts": "ಖಾತೆಗಳು",
      "recordings": "ದಾಖಲೆಗಳು",
      "getStarted": "ಪ್ರಾರಂಭಿಸಿ",

      // Hero Section
      "heroTag1": "ಹಣಕಾಸು ಶಿಕ್ಷಣ",
      "heroTag2": "ಭವಿಷ್ಯದಕ್ಕಾಗಿ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ",
      "heroDescription": "ವೈಯಕ್ತಿಕ, ಎಐ-ಚಾಲಿತ ಸಲಹೆ ಮೂಲಕ ನಿಮ್ಮ ಕೃಷಿ ಹಣಕಾಸು ನಿರ್ವಹಣೆ ಮತ್ತು ಕಲಿಯಿರಿ. ಸಾಲ, ವಿಮೆ ಮತ್ತು ಬೆಳೆ ಯೋಜನೆಗಳ ಮೇಲೆ ಮಾರ್ಗದರ್ಶನವನ್ನು ಪಡೆಯಿರಿ ನಿಮ್ಮ ತೋಟ ಮತ್ತು ಆದಾಯವನ್ನು ಬೆಳಸಲು.",
      "happyWomen": "ಸಂತೋಷದ ಮಹಿಳೆಯರು",
      "loansApproved": "ಅನುಮೋದಿತ ণಗಳು",
      "aiSupport": "ಎಐ ಬೆಂಬಲ",

      "insurance": "ವಿಮೆ",
      "activityPlanner": "ಎಂಎಸ್‌ಎಂಇ ಯೋಜನಾ ಯೋಜಕ",
      "recommendBankExperts": "ಬ್ಯಾಂಕ್ ತಜ್ಞರನ್ನು ಶಿಫಾರಸು ಮಾಡಿ",

      // Bank Contact
      "bankContactTitle": "ಬ್ಯಾಂಕ್ ಪರಿಣಿತರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ",
      "bankContactDesc": "ಬ್ಯಾಂಕ್ ಪರಿಣಿತರಿಂದ ವೈಯಕ್ತಿಕ ಶಿಫಾರಸು ಪಡೆಯಿರಿ",

      // Dashboard Section
      "dashboardTitle": "ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      "dashboardDescription": "ನಿಮ್ಮ ಆರ್ಥಿಕ ಪ್ರಯಾಣವನ್ನು ಸುಲಭವಾಗಿ ನಿರ್ವಹಿಸಿ. ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಿ, ಗುರಿ ಸೆಟ್ ಮಾಡಿ ಮತ್ತು ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",

      // Products
      "exploreProducts": "ಆರ್ಥಿಕ ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
      "productsDescription": "ಯಾವುದೇ ಉತ್ಪನ್ನವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಸಂವಾದಾತ್ಮಕ ಸಂಭಾಷಣೆಯ ಮೂಲಕ ಅದು ನಿಮ್ಮ ಪರಿಸ್ಥಿತಿಗೆ ಹೇಗೆ ಸಹಾಯಕವಾಗಿದೆ ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ",

      // loan products
      "kisanCreditCardLoan": "ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC)",
      "kisanCreditCardLoanDesc": "ಬೆಳೆ ಉತ್ಪಾದನೆ, ಬೀಜ, ರಸಗೊಬ್ಬರ ಮತ್ತು ಇತರೆ ಕೃಷಿ ಒಳಿತಾಗಳ ಖರೀದಿಗಾಗಿ ಅಲ್ಪಾವಧಿ ಸಾಲವನ್ನು ಒದಗಿಸುತ್ತದೆ, ಇದನ್ನು ಬೆಳೆ ಕಟಾವಿನ ನಂತರ ಹಿಂತಿರುಗಿಸಬೇಕು.",
      "tractorMachineryLoan": "ಟ್ರಾಕ್ಟರ್ ಮತ್ತು ಕೃಷಿ ಯಂತ್ರೋಪಕರಣ ಸಾಲ",
      "tractorMachineryLoanDesc": "ಕೃಷಿಕರಿಗೆ ಟ್ರಾಕ್ಟರ್, ಹಾರ್ವೆಸ್ಟರ್, ನೀರಾವರಿ ಪಂಪುಗಳು ಮತ್ತು ಆಧುನಿಕ ಸಾಧನಗಳನ್ನು ಖರೀದಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಇದರಿಂದ ಉತ್ಪಾದಕತೆ ಹೆಚ್ಚುತ್ತದೆ ಮತ್ತು ಕಾರ್ಮಿಕ ಶ್ರಮ ಕಡಿಮೆಯಾಗುತ್ತದೆ.",
      "cropLoan": "ಬೆಳೆ ಸಾಲ",
      "cropLoanDesc": "ಋತುಚಲಿತ ಬೆಳೆಗಳ ಬೀಜ, ರಸಗೊಬ್ಬರ, ಕೀಟನಾಶಕ ಮತ್ತು ಕೂಲಿ ವೆಚ್ಚಗಳಿಗಾಗಿ ತ್ವರಿತ ಹಣಕಾಸು ಒದಗಿಸುತ್ತದೆ, ಹಿಂತಿರುಗುವಿಕೆ ಕಟಾವಿನ ನಂತರ ಮಾಡಬೇಕು.",
      "dairyLivestockLoan": "ಹಾಲು ಮತ್ತು ಪಶುಸಂಗೋಪನೆ ಸಾಲ",
      "dairyLivestockLoanDesc": "ಹಾಲು ಉತ್ಪಾದನೆ, ಕೋಳಿ ಸಾಕಣೆ, ಆಡು ಸಾಕಣೆ ಅಥವಾ ಮೀನುಗಾರಿಕೆ ಪ್ರಾರಂಭಿಸಲು ಅಥವಾ ವಿಸ್ತರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಪಶು ಖರೀದಿ ಮತ್ತು ನಿರ್ವಹಣೆಗೆ ನಿಧಿ ಒದಗಿಸುತ್ತದೆ.",
      "farmDevelopmentLoan": "ಕೃಷಿ ಅಭಿವೃದ್ಧಿ ಸಾಲ",
      "farmDevelopmentLoanDesc": "ಜಮೀನು ಸಮತಟ್ಟಾಗಿಸುವುದು, ಬೇಲಿ ಹಾಕುವುದು, ನೀರಾವರಿ ವ್ಯವಸ್ಥೆ, ಗ್ರೀನ್ಹೌಸ್ ನಿರ್ಮಾಣ ಮತ್ತು ತೋಟಗಾರಿಕೆ ಹೂಡಿಕೆಗಳಿಗೆ ದೀರ್ಘಾವಧಿ ನಿಧಿ ಒದಗಿಸುತ್ತದೆ.",
      "agriGoldLoan": "ಕೃಷಿ ಚಿನ್ನದ ಸಾಲ",
      "agriGoldLoanDesc": "ಕೃಷಿಕರು ತಮ್ಮ ಚಿನ್ನಾಭರಣವನ್ನು ತಾಂಬಾಳೆ ಇಟ್ಟು ಶೀಘ್ರ ಸಾಲ ಪಡೆಯಬಹುದು, ಇದರಿಂದ ಕೃಷಿ ಕೆಲಸಗಳಿಗೆ ತಕ್ಷಣದ ಹಣಕಾಸು ಲಭ್ಯವಾಗುತ್ತದೆ ಮತ್ತು ಕಡಿಮೆ ದಾಖಲೆಗಳನ್ನು ಬೇಕಾಗುತ್ತದೆ.",

      // account products
      "savingsAccount": "ಉಳಿತಾಯ ಖಾತೆ",
      "savingsAccountDesc": "ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ವಿವಿಧ ಖಾತೆ ಆಯ್ಕೆಗಳನ್ನು ಎಚ್ಚರದಿಂದ ಆಯ್ಕೆಮಾಡಿ",
      "salaryAccount": "ವೇತನ ಖಾತೆ",
      "salaryAccountDesc": "ಕೆಲಸದಾರರಿಗೆ ಸುಲಭವಾದ ವೇತನ ಪ್ರವೇಶ ಹಾಗೂ ಹೆಚ್ಚಿನ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ",
      "currentAccount": "ಪ್ರಚಲಿತ ಖಾತೆ",
      "currentAccountDesc": "ನಿಮ್ಮ ವ್ಯಾಪಾರದ ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಅನಿಯಮಿತ ಠೇವಣಿಗಳು ಮತ್ತು ವಿತ್‌ಡ್ರಾ ಮಾಡಬಹುದು",
      "safeDepositLocker": "ಸೇಫ್ ಡಿಪಾಜಿಟ್ ಲಾಕರ್",
      "safeDepositLockerDesc": "ನಿಮ್ಮ ಆಕರ্ষಣೆಯ ಲಾಕರ್ ಗಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ಮೌಲ್ಯಯುತ ವಸ್ತುಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಇಡಿ",
      "safeCustody": "ಸೇಫ್ ಕಸ್ಟಡೀ",
      "safeCustodyDesc": "ನಿಮ್ಮ ದಾಖಲೆಗಳು ಮತ್ತು ಇತರ ಮೌಲ್ಯಯುತ ವಸ್ತುಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಇಡಿ",
      "sukanyaSamriddhi": "ಸುಕನ್ಯಾ ಸಮೃದ್ಧಿ",
      "sukanyaSamriddhiDesc": "ಮಗಳ ಶಿಕ್ಷಣ ಮತ್ತು ವಿವಾಹದ ಖರ್ಚಿಗಾಗಿ ಉಳಿತಾಯ ಮಾಡಿ",

      "pmfby": "PMFBY",
      "pmfbyDesc": "ಪ್ರಾಕೃತಿಕ ವಿಪತ್ತು, ಕೀಟ ಅಥವಾ ರೋಗಗಳಿಂದ ಹಾನಿಯಾಗುವ ಬೆಳೆಗಳಿಗೆ ವಿಮೆ, ಬೆಳೆ ವಿಫಲವಾದ ನಂತರ ರೈತರು ಆರ್ಥಿಕ ನಷ್ಟದಿಂದ ಮರುಸ್ಥಾಪನೆ ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      "wbcis": "WBCIS",
      "wbcisDesc": "ಬಾಡಿ, ಹೆಚ್ಚು ಮಳೆ, ಹಿಮದ ಕಣ ಅಥವಾ ತಾಪಮಾನ ತೀವ್ರತೆ ಮುಂತಾದ ಹವಾಮಾನ ಸಂಬಂಧಿತ જોખಮಗಳಿಂದ ರೈತರಿಗೆ ರಕ್ಷಣೆ ನೀಡುತ್ತದೆ, ಹವಾಮಾನ ಸೂಚ್ಯಂಕ ಆಧಾರಿತ ದಾವೆ ಮೂಲಕ.",
      "livestockInsurance": "ಪಶುಸಂಗೋಪನೆ ವಿಮೆ",
      "livestockInsuranceDesc": "ಗೋವು, ಎಮ್ಮೆ, ಹಸು, ಕುರಿ, ಎಮ್ಮೆ ಮುಂತಾದ ಪಶುಗಳಿಗೆ ಅಪಘಾತ, ರೋಗ ಅಥವಾ ಪ್ರಾಕೃತಿಕ ವಿಪತ್ತುಗಳಿಂದ ಮರಣದ ವಿರುದ್ಧ ರಕ್ಷಣೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
      "farmMachineryInsurance": "ಕೃಷಿ ಯಂತ್ರೋಪಕರಣ ವಿಮೆ",
      "farmMachineryInsuranceDesc": "ಟ್ರಾಕ್ಟರ್, ಹಾರ್ವೆಸ್ಟರ್, ನೀರಾವರಿ ಪಂಪುಗಳು ಮತ್ತು ಇತರೆ ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳನ್ನು ಕಳ್ಳತನ, ಬೆಂಕಿ ಅಥವಾ ಅಪಘಾತದಿಂದ ಉಂಟಾಗುವ ನಷ್ಟದಿಂದ ಹಣಕಾಸು ರಕ್ಷಣೆ ಒದಗಿಸುತ್ತದೆ.",
      "personalAccidentInsurance": "ವೈಯಕ್ತಿಕ ಅಪಘಾತ ವಿಮೆ",
      "personalAccidentInsuranceDesc": "ರೈತನ ಅಪಘಾತಸ್ಫೂರ್ತಿಯಾದ ಮರಣ ಅಥವಾ ಅಂಗವಿಕಲತೆಯ ಸಂದರ್ಭದಲ್ಲಿ ಪರಿಹಾರ ನೀಡುತ್ತದೆ, ಕುಟುಂಬಕ್ಕೆ ಆರ್ಥಿಕ ಭದ್ರತೆ ಒದಗಿಸುತ್ತದೆ.",
      "horticultureInsurance": "ಮರಳು ಮತ್ತು ತೋಟಗಾರಿಕೆ ವಿಮೆ",
      "horticultureInsuranceDesc": "ಹಣ್ಣು, ತರಕಾರಿ, ಚಹಾ, ಕಾಫಿ ಮತ್ತು ರಬ್ಬರ್ ಮುಂತಾದ ಹೈ-ವ್ಯಾಲ್ಯೂ ಬೆಳೆಗಳನ್ನು ಪ್ರಾಕೃತಿಕ ವಿಪತ್ತುಗಳು ಮತ್ತು ಕೀಟದ ಹಾನಿಯಿಂದ ಕವರ್ ಮಾಡುತ್ತದೆ.",

      // Features
      "whyChoose": "ಏಕೆ ಆರೋಹಣ ಆಯ್ಕೆಮಾಡಬೇಕು?",
      "simpleSignup": "ಸರಳ ಸೈನ್ ಅಪ್",
      "simpleSignupDesc": "ನಿಮ್ಮ ಫೋನ್ ನಂಬರ್ ಬಳಸಿ ತಕ್ಷಣ ಆರಂಭಿಸಿ. ಯಾವುದೇ ಸಂಕೀರ್ಣ ದಾಖಲೆಗಳು ಅಗತ್ಯವಿಲ್ಲ.",
      "interactiveLearning": "ಸಂವಾದಾತ್ಮಕ ಕಲಿಕೆ",
      "interactiveLearningDesc": "ಎಐ ಅವತಾರಗಳೊಂದಿಗೆ ಆರ್ಥಿಕ ಸಿದ್ಧಾಂತಗಳನ್ನು ರಮಣೀಯ ಸಂಭಾಷಣೆಯಿಂದ ತಿಳಿಯಿರಿ.",
      "personalizedGuidance": "ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ",
      "personalizedGuidanceDesc": "ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಹಂತ ಹಂತವಾಗಿ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.",

      // Call to Action
      "readyToTransform": "ನಿಮ್ಮ ಉದ್ದೇಶಗಳನ್ನು ಕಾರ್ಯರೂಪಕ್ಕೆ ತರಲು ಸಿದ್ಧರಾಗಿದ್ದೀರಾ?",
      "joinThousands": "ಸಾವಿರಾರು ರೈತರು ಈಗಾಗಲೇ ತಮ್ಮ ಹಣಕಾಸಿನ ಸ್ಥಿತಿಯನ್ನು ಸುಧಾರಿಸಿಕೊಂಡಿದ್ದಾರೆ; ಅವರಿಗೆ ಸೇರಿ",
      "startJourney": "ಇಂದೇ ನಿಮ್ಮ ಪ್ರಯಾಣ ಆರಂಭಿಸಿ",

      // Language Selector
      "selectLanguage": "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",

      // File Upload Section
      "fileVerificationTitle": "ಡಾಕ್ಯುಮೆಂಟ್ ಪರಿಶೀಲನೆ",
      "fileVerificationDesc": "ನಿಮ್ಮ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಎಐ ಸಹಾಯದಿಂದ ಸರಿಯಾದ ಪರಿಶೀಲನೆ ಪಡೆಯಿರಿ.",
      "uploadFiles": "ಫೈಲ್‌ಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      "dragDropFiles": "ಫೈಲ್‌ಗಳನ್ನು ಇಲ್ಲಿ ಎಳೆಯಿರಿ ಅಥವಾ ಕ್ಲಿಕ್ ಮಾಡಿ ಆಯ್ಕೆಮಾಡಿ",
      "supportedFormats": "ಪಿಡಿಎಫ್, ಡಾಕ್, ಡಾಕ್‌ಎಕ್ಸ್, ಜೆಪಿಜಿ, ಪಿಎನ್‌ಜಿ ಫಾರ್ಮಾಟ್‌ಗಳಿಗೆ ಬೆಂಬಲ",
      "selectedFiles": "ಆಯ್ಕೆಯಾದ ಫೈಲ್‌ಗಳು",
      "textVoiceInput": "ಪಠ್ಯ ಮತ್ತು ಧ್ವನಿ ಇನ್ಪುಟ್",
      "enterInstructions": "ನಿಮ್ಮ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳ ಬಗ್ಗೆ ಸೂಚನೆಗಳು ಅಥವಾ ಪ್ರಶ್ನೆಗಳನ್ನು ನಮೂದಿಸಿ...",
      "startRecording": "ರೆಕಾರ್ಡಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ",
      "stopRecording": "ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲಿಸಿ",
      "clear": "ತಿಳಿಸಿ",
      "analyzing": "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
      "verifyFiles": "ಫೈಲ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
      "analysisCorrect": "ವಿಶ್ಲೇಷಣೆ ಪೂರ್ಣವಾಗಿದೆ ✓",
      "analysisIncorrect": "ಕೆಲವು ಸಮಸ್ಯೆಗಳು ಕಂಡುಬಂದಿವೆ ⚠️",
      "fileAnalysisCorrect": "ನಿಮ್ಮ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳು ಪೂರ್ಣವಾಗಿವೆ ಮತ್ತು ಸರಿಯಾಗಿ ಫಾರ್ಮಾಟ್ ಮಾಡಲಾಗಿದೆ. ಎಲ್ಲವೂ ಚೆನ್ನಾಗಿದೆ!",
      "fileAnalysisIncorrect": "ನಿಮ್ಮ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳಲ್ಲಿ ಕೆಲವು ಸಮಸ್ಯೆಗಳಿವೆ, ದಯವಿಟ್ಟು ಗಮನ ನೀಡಿ.",
      "fileAnalysisError": "ವಿಶ್ಲೇಷಣೆಯ ವೇಳೆ ದೋಷ ಉಂಟಾಯಿತು. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      "suggestions": "ಸುಧಾರಣೆಗೆ ಸಲಹೆಗಳು",
      "suggestion1": "ಎಲ್ಲಾ ಪುಟಗಳು ಸ್ಪಷ್ಟವಾಗಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿ",
      "suggestion2": "ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ಸಹಿ ಮತ್ತು ದಿನಾಂಕಗಳನ್ನು ಸೇರಿಸಿ",
      "suggestion3": "ಎಲ್ಲಾ ಮಾಹಿತಿಗಳು ನಿಮ್ಮ ಗುರುತಿನ ದಾಖಲೆಗಳೊಂದಿಗೆ ತಾಳೆಯಾಗಿದೆಯೆಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('nari-shakti-language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
