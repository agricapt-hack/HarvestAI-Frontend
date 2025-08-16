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
      "heroTag2": "Guiding You to a Better Tomorrow",
      "heroDescription": "Explore financial solutions through interactive, AI-powered conversations. Receive personalized guidance and support tailored to your journey",
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
      "homeLoan": "Home Loan",
      "homeLoanDesc": "Explore a diverse array of home loan options tailored to meet your specific needs",
      "personalLoan": "Personal Loan",
      "personalLoanDesc": "Secure a personal loan for holidays, home renovations all at compelling interest rates",
      "businessLoan": "Business Loan",
      "businessLoanDesc": "Expand your business with minimal paperwork and rapid approval processes",
      "educationLoan": "Education Loan",
      "educationLoanDesc": "Access loans for various educational courses with straightforward loan disbursement",
      "goldLoan": "Gold Loan",
      "goldLoanDesc": "Get quick funds by pledging your gold at attractive interest rates",
      "fdLoan": "Loan Against Fixed Deposit",
      "fdLoanDesc": "Get loans against your fixed deposits with attractive interest rates",

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
      "lifeInsurance": "Life Insurance",
      "lifeInsuranceDesc": "Protect your family against the unknown and take care of their financial needs by buying life insurance",
      "pmjjby": "PMJJBY",
      "pmjjbyDesc": "A non linked non participating one year renewable group term insurance plan",
      "generalInsurance": "General Insurance",
      "generalInsuranceDesc": "Safeguard your prized possessions car, 2 wheeler, home business..",
      "healthInsurance": "Health Insurance",
      "healthInsuranceDesc": "Stay financially prepared for medical or accident emergencies",
      "pmsby": "PMSBY",
      "pmsbyDesc": "Invest and stay prepared for unforeseen eventualities",
      "msmeInsurance": "MSME Insurance",
      "msmeInsuranceDesc": "Protect your small business from unforeseen losses with tailored MSME insurance coverage",

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
      "joinThousands": "Join thousands of women who have already improved their financial situation",
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
      "nariShakti": "आरोहण",
      "financialCompanion": "आपका वित्तीय साथी",
      "loans": "ऋण",
      "accounts": "खाते",
      "recordings": "रिकॉर्डिंग्स",
      "getStarted": "शुरू करें",

      // Hero Section
      "heroTag1": "वित्तीय शिक्षा",
      "heroTag2": "आपके उज्जवल कल की दिशा में मार्गदर्शन",
      "heroDescription": "इंटरैक्टिव, एआई-संचालित बातचीत के माध्यम से वित्तीय समाधान खोजें। अपने सफर के अनुसार व्यक्तिगत मार्गदर्शन और समर्थन प्राप्त करें।",
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
      "homeLoan": "गृह ऋण",
      "homeLoanDesc": "आपकी ज़रूरतों के अनुसार गृह ऋण विकल्पों का व्यापक चयन खोजें।",
      "personalLoan": "व्यक्तिगत ऋण",
      "personalLoanDesc": "छुट्टियों या घर की मरम्मत के लिए आकर्षक ब्याज दरों पर व्यक्तिगत ऋण प्राप्त करें।",
      "businessLoan": "व्यवसाय ऋण",
      "businessLoanDesc": "कम कागज़ी कार्रवाई और तेज़ स्वीकृति के साथ अपने व्यवसाय का विस्तार करें।",
      "educationLoan": "शिक्षा ऋण",
      "educationLoanDesc": "शिक्षा के विभिन्न पाठ्यक्रमों के लिए सरल ऋण वितरण के साथ ऋण प्राप्त करें।",
      "goldLoan": "सोने पर ऋण",
      "goldLoanDesc": "अपने सोने को गिरवी रखकर आकर्षक ब्याज दरों पर तुरंत धन प्राप्त करें।",
      "fdLoan": "फिक्स्ड डिपॉज़िट पर ऋण",
      "fdLoanDesc": "अपने फिक्स्ड डिपॉज़िट पर आकर्षक ब्याज दरों पर ऋण प्राप्त करें।",

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

      "lifeInsurance": "जीवन बीमा",
      "lifeInsuranceDesc": "जीवन बीमा खरीदकर अपने परिवार की वित्तीय ज़रूरतों और अनहोनी से सुरक्षा करें",
      "pmjjby": "प्रधानमंत्री जीवन ज्योति बीमा योजना",
      "pmjjbyDesc": "एक साल के लिए नवीकरणीय समूह टर्म बीमा योजना",
      "generalInsurance": "सामान्य बीमा",
      "generalInsuranceDesc": "अपनी कार, दोपहिया, घर और व्यवसाय जैसी संपत्तियों को सुरक्षित रखें",
      "healthInsurance": "स्वास्थ्य बीमा",
      "healthInsuranceDesc": "चिकित्सा या दुर्घटना आपात स्थितियों के लिए आर्थिक रूप से तैयार रहें",
      "pmsby": "प्रधानमंत्री सुरक्षा बीमा योजना",
      "pmsbyDesc": "अनहोनी के लिए निवेश करके सुरक्षित रहें",
      "msmeInsurance": "एमएसएमई बीमा",
      "msmeInsuranceDesc": "आपके छोटे व्यवसाय को हानि से बचाने के लिए उपयुक्त बीमा सुरक्षा",

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
      "joinThousands": "उन हजारों महिलाओं से जुड़ें जिन्होंने अपनी वित्तीय स्थिति बेहतर की है।",
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
      "nariShakti": "আরোহন",
      "financialCompanion": "আপনার আর্থিক বন্ধু",
      "loans": "ঋণ",
      "accounts": "হিসাব",
      "recordings": "রেকর্ডিং",
      "getStarted": "শুরু করুন",

      // Hero Section
      "heroTag1": "আর্থিক শিক্ষায় শিক্ষিত হোন",
      "heroTag2": "একটি উন্নত আগামীর পথে আপনাকে পথপ্রদর্শন",
      "heroDescription": "ইন্টার‌্যাকটিভ, কৃত্রিম বুদ্ধিমত্তা-চালিত কথোপকথনের মাধ্যমে আর্থিক সমাধান অন্বেষণ করুন। আপনার যাত্রার জন্য উপযুক্ত ব্যক্তিগত পরামর্শ ও সহায়তা পান।",
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
      "homeLoan": "হোম লোন",
      "homeLoanDesc": "আপনার নির্দিষ্ট প্রয়োজনে উপযুক্ত বিভিন্ন ধরনের হোম লোন অন্বেষণ করুন",
      "personalLoan": "পার্সোনাল লোন",
      "personalLoanDesc": "ছুটি, বাড়ি সংস্কার ইত্যাদির জন্য আকর্ষণীয় সুদের হারে পার্সোনাল লোন নিন",
      "businessLoan": "ব্যবসায়িক ঋণ",
      "businessLoanDesc": "নূন্যতম কাগজপত্র এবং দ্রুত অনুমোদনের মাধ্যমে আপনার ব্যবসা বাড়ান",
      "educationLoan": "শিক্ষা ঋণ",
      "educationLoanDesc": "নানা শিক্ষাকোর্সের জন্য সহজ শর্তে ঋণ পান",
      "goldLoan": "সোনার উপর ঋণ",
      "goldLoanDesc": "আপনার সোনা জমা দিয়ে দ্রুত অর্থ পান আকর্ষণীয় সুদের হারে",
      "fdLoan": "স্থায়ী আমানতের বিপরীতে ঋণ",
      "fdLoanDesc": "আপনার স্থায়ী আমানতের বিপরীতে আকর্ষণীয় হারে ঋণ পান",

      "lifeInsurance": "জীবন বীমা",
      "lifeInsuranceDesc": "জীবন বীমা নিয়ে পরিবারের আর্থিক নিরাপত্তা নিশ্চিত করুন",
      "pmjjby": "প্রধানমন্ত্রী জীবন জ্যোতি বিমা যোজনা",
      "pmjjbyDesc": "এক বছরের জন্য পুনর্নবীকরণযোগ্য গ্রুপ টার্ম বিমা পরিকল্পনা",
      "generalInsurance": "সাধারণ বীমা",
      "generalInsuranceDesc": "আপনার গাড়ি, বাইক, বাড়ি ও ব্যবসার সুরক্ষার জন্য বীমা নিন",
      "healthInsurance": "স্বাস্থ্য বীমা",
      "healthInsuranceDesc": "চিকিৎসা বা দুর্ঘটনার সময় আর্থিক প্রস্তুতি নিন",
      "pmsby": "প্রধানমন্ত্রী সুরক্ষা বিমা যোজনা",
      "pmsbyDesc": "অপ্রত্যাশিত ঘটনার জন্য বিনিয়োগ করে নিরাপদ থাকুন",
      "msmeInsurance": "এমএসএমই বীমা",
      "msmeInsuranceDesc": "আপনার ছোট ব্যবসাকে ক্ষতি থেকে রক্ষা করতে উপযুক্ত বীমা কভারেজ",

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
      "joinThousands": "হাজার হাজার নারীর সাথে যোগ দিন যারা ইতিমধ্যেই তাদের আর্থিক অবস্থা উন্নত করেছেন",
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
      "nariShakti": "आरोहन",
      "financialCompanion": "तुमचा आर्थिक मित्र",
      "loans": "कर्जे",
      "accounts": "खाते",
      "recordings": "रेकॉर्डिंग",
      "getStarted": "सुरू करा",

      // Hero Section
      "heroTag1": "आर्थिक शिक्षण",
      "heroTag2": "उत्तम उद्याच्या दिशेने मार्गदर्शन",
      "heroDescription": "इंटरॅक्टिव्ह, एआय-सक्षम संवादांद्वारे आर्थिक उपाय शोधा. तुमच्या गरजेनुसार वैयक्तिक मार्गदर्शन व सहाय्य मिळवा.",
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
      "homeLoan": "गृहकर्ज",
      "homeLoanDesc": "तुमच्या गरजेनुसार विविध गृहकर्ज पर्याय पाहा",
      "personalLoan": "वैयक्तिक कर्ज",
      "personalLoanDesc": "सुट्टी, घराचे नूतनीकरण इत्यादीसाठी आकर्षक दरात वैयक्तिक कर्ज मिळवा",
      "businessLoan": "व्यवसाय कर्ज",
      "businessLoanDesc": "किमान कागदपत्रे आणि जलद मंजुरीसह तुमचा व्यवसाय वाढवा",
      "educationLoan": "शिक्षण कर्ज",
      "educationLoanDesc": "सोप्या अटींसह विविध अभ्यासक्रमांसाठी कर्ज मिळवा",
      "goldLoan": "सोनेतून कर्ज",
      "goldLoanDesc": "आकर्षक व्याजदरावर तुमचे सोने गहाण ठेवून त्वरित निधी मिळवा",
      "fdLoan": "ठेव विरुद्ध कर्ज",
      "fdLoanDesc": "तुमच्या निश्चित ठेवीवर कर्ज मिळवा आकर्षक व्याजदरासह",

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

      "lifeInsurance": "जीवन विमा",
      "lifeInsuranceDesc": "जीवन विमा घेऊन आपल्या कुटुंबाच्या आर्थिक गरजा सुरक्षित ठेवा",
      "pmjjby": "प्रधानमंत्री जीवन ज्योती विमा योजना",
      "pmjjbyDesc": "एक वर्षासाठी नूतनीकरण करता येणारी ग्रुप टर्म विमा योजना",
      "generalInsurance": "सामान्य विमा",
      "generalInsuranceDesc": "आपली कार, दुचाकी, घर आणि व्यवसाय सुरक्षित ठेवा",
      "healthInsurance": "आरोग्य विमा",
      "healthInsuranceDesc": "वैद्यकीय किंवा अपघाती आपत्कालीन परिस्थितींसाठी आर्थिकदृष्ट्या तयार राहा",
      "pmsby": "प्रधानमंत्री सुरक्षा विमा योजना",
      "pmsbyDesc": "अनपेक्षित प्रसंगांसाठी गुंतवणूक करून तयार राहा",
      "msmeInsurance": "एमएसएमई विमा",
      "msmeInsuranceDesc": "आपल्या लघु उद्योगाला नुकसानापासून वाचवण्यासाठी विशेष विमा संरक्षण",

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
      "joinThousands": "हजारो महिलांमध्ये सामील व्हा ज्यांनी त्यांच्या आर्थिक स्थितीत सुधारणा केली आहे",
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
      "nariShakti": "ಆರೋಹಣ",
      "financialCompanion": "ನಿಮ್ಮ ಆರ್ಥಿಕ ಸಂಗಾತಿ",
      "loans": "ಣಗಳು",
      "accounts": "ಖಾತೆಗಳು",
      "recordings": "ದಾಖಲೆಗಳು",
      "getStarted": "ಪ್ರಾರಂಭಿಸಿ",

      // Hero Section
      "heroTag1": "ಆರ್ಥಿಕ ಶಿಕ್ಷಣ",
      "heroTag2": "ಉತ್ತಮ ನಾಳೆಯ ಕಡೆ ನಿಮ್ಮನ್ನು ಮುನ್ನಡೆಸುವುದು",
      "heroDescription": "ಸಕ್ರಿಯ ಎಐ ಸಂಭಾಷಣೆಗಳ ಮೂಲಕ ಆರ್ಥಿಕ ಪರಿಹಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ನಿಮ್ಮ ಪ್ರಯಾಣಕ್ಕೆ ಅನುಗುಣವಾಗಿ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಬೆಂಬಲವನ್ನು ಪಡೆಯಿರಿ.",
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
      "homeLoan": "ಮನೆ ಸಾಲ",
      "homeLoanDesc": "ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ತಕ್ಕಂತೆ ವಿವಿಧ ಗೃಹ ಸಾಲ ಆಯ್ಕೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
      "personalLoan": "ವೈಯಕ್ತಿಕ ণ",
      "personalLoanDesc": "ಅವನತಿ, ರಜಾ, ಅಥವಾ ಇತರ ವೆಚ್ಚಗಳಿಗಾಗಿ ಆಕರ್ಷಕ ಬಡ್ಡಿದರದಲ್ಲಿ ವೈಯಕ್ತಿಕ ಣ ಪಡೆಯಿರಿ",
      "businessLoan": "ವ್ಯಾಪಾರ ণ",
      "businessLoanDesc": "ಕಡಿಮೆ ಕಾಗದ ಪತ್ರಗಳೊಂದಿಗೆ ಮತ್ತು ವೇಗದ ಅನುಮೋದನೆಯೊಂದಿಗೆ ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ವಿಸ್ತರಿಸಿ",
      "educationLoan": "ಶಿಕ್ಷಣ ণ",
      "educationLoanDesc": "ವಿಭಿನ್ನ ಕೋರ್ಸ್‌ಗಳಿಗಾಗಿ ಸರಳ ಶರತ್ತುಗಳೊಂದಿಗೆ ಣವನ್ನು ಪಡೆಯಿರಿ",
      "goldLoan": "ಚಿನ್ನದ ಣ",
      "goldLoanDesc": "ಆಕರ್ಷಕ ಬಡ್ಡಿದರದಲ್ಲಿ ನಿಮ್ಮ ಚಿನ್ನವನ್ನು ತಪಾಸಣೆಗೆ ಇಟ್ಟು ತ್ವರಿತ ಹಣವನ್ನು ಪಡೆಯಿರಿ",
      "fdLoan": "ಸ್ಥಿರ ಠೇವಣಿಯ ವಿರುದ್ಧ ಣ",
      "fdLoanDesc": "ನಿಮ್ಮ ಎಫ್‌ಡಿಗೆ ವಿರುದ್ಧವಾಗಿ ಆಕರ್ಷಕ ಬಡ್ಡಿದರದಲ್ಲಿ ಣ ಪಡೆಯಿರಿ",

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

      "lifeInsurance": "ಜೀವ ವಿಮೆ",
      "lifeInsuranceDesc": "ಜೀವ ವಿಮೆ ತೆಗೆದುಕೊಂಡು ನಿಮ್ಮ ಕುಟುಂಬದ ಆರ್ಥಿಕ ಭದ್ರತೆ ಕಾಪಾಡಿ",
      "pmjjby": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಜೀವನ್ ಜ್ಯೋತಿ ಬಿಮಾ ಯೋಜನೆ",
      "pmjjbyDesc": "ಒಂದು ವರ್ಷದ ನವೀಕರಿಸಬಹುದಾದ ಗುಂಪು ಟರ್ಮ್ ಇನ್ಸುರನ್ಸ್ ಯೋಜನೆ",
      "generalInsurance": "ಸಾಮಾನ್ಯ ವಿಮೆ",
      "generalInsuranceDesc": "ನಿಮ್ಮ ಕಾರು, ಬೈಕ್, ಮನೆ ಮತ್ತು ವ್ಯಾಪಾರವನ್ನು ಸುರಕ್ಷಿತವಾಗಿರಿಸಿ",
      "healthInsurance": "ಆರೋಗ್ಯ ವಿಮೆ",
      "healthInsuranceDesc": "ವೈದ್ಯಕೀಯ ಅಥವಾ ಅಪಘಾತದ ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಆರ್ಥಿಕವಾಗಿ ಸಿದ್ಧರಿರಿ",
      "pmsby": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಸುರಕ್ಷಾ ಬಿಮಾ ಯೋಜನೆ",
      "pmsbyDesc": "ಅನಪೇಕ್ಷಿತ ಸಂದರ್ಭಗಳಿಗೆ ಹೂಡಿಕೆಮಾಡಿ ಭದ್ರತೆ ಪಡೆಯಿರಿ",
      "msmeInsurance": "ಎಂಎಸ್‌ಎಂಇ ವಿಮೆ",
      "msmeInsuranceDesc": "ನಿಮ್ಮ ಸಣ್ಣ ಉದ್ಯಮವನ್ನು ಅಪ್ರತೀಕ್ಷಿತ ನಷ್ಟಗಳಿಂದ ರಕ್ಷಿಸಲು ಸೂಕ್ತ ವಿಮೆ ಕವರೆಜ್",

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
      "joinThousands": "ಆರ್ಥಿಕ ಸ್ಥಿತಿಯನ್ನು ಸುಧಾರಿಸಿಕೊಂಡ ಸಾವಿರಾರು ಮಹಿಳೆಯರೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ",
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
