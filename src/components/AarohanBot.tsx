// import { useState, useEffect, useCallback } from 'react';
// import { TypewriterText } from './TypewriterText';
// import { MagicalParticles } from './MagicalParticles';
// import { useConversation } from '@11labs/react';
// import { Button } from './ui/button';
// import botImage from '@/assets/aarohan-bot.png';

// const introMessages = [
//   "Hi, I am Aarohan. A finance Bot...",
//   "I'm here to help you with your financial journey.",
//   "I can assist with budgeting, investments, and financial planning.",
//   "Let's make your money work smarter, not harder!",
//   "Ready to unlock your financial potential?"
// ];

// export const AarohanBot = () => {
//   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(false);
//   const [showMessage, setShowMessage] = useState(true);
//   const [hasStarted, setHasStarted] = useState(false);
//   const [apiKey, setApiKey] = useState('');
//   const [showApiInput, setShowApiInput] = useState(true);

//   const conversation = useConversation({
//     onConnect: () => console.log('Connected to ElevenLabs'),
//     onDisconnect: () => console.log('Disconnected from ElevenLabs'),
//     onError: (error) => console.error('ElevenLabs error:', error),
//   });

//   const speakText = useCallback(async (text: string) => {
//     if (!apiKey) return;
    
//     try {
//       // For demo purposes, we'll use browser's speech synthesis as fallback
//       if ('speechSynthesis' in window) {
//         const utterance = new SpeechSynthesisUtterance(text);
//         utterance.rate = 0.9;
//         utterance.pitch = 1.1;
//         utterance.volume = 0.8;
//         speechSynthesis.speak(utterance);
//       }
//     } catch (error) {
//       console.error('Speech synthesis error:', error);
//     }
//   }, [apiKey]);

//   const handleTypewriterComplete = useCallback(() => {
//     setIsTyping(false);
//     const currentMessage = introMessages[currentMessageIndex];
//     speakText(currentMessage);
    
//     setTimeout(() => {
//       if (currentMessageIndex < introMessages.length - 1) {
//         setShowMessage(false);
//         setTimeout(() => {
//           setCurrentMessageIndex(prev => prev + 1);
//           setShowMessage(true);
//           setIsTyping(true);
//         }, 500);
//       }
//     }, 2000);
//   }, [currentMessageIndex, speakText]);

//   const startBot = () => {
//     if (!apiKey.trim()) {
//       alert('Please enter your ElevenLabs API key to enable voice features!');
//       return;
//     }
//     setShowApiInput(false);
//     setHasStarted(true);
//     setIsTyping(true);
//   };

//   const skipToVoiceDemo = () => {
//     setShowApiInput(false);
//     setHasStarted(true);
//     setIsTyping(true);
//   };

//   if (showApiInput) {
//     return (
//       <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-6">
//         <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-magic-primary/20 shadow-magical max-w-md w-full">
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent mb-2">
//               Welcome to Aarohan Bot
//             </h2>
//             <p className="text-muted-foreground">
//               Enter your ElevenLabs API key for voice features, or continue without voice.
//             </p>
//           </div>
          
//           <div className="space-y-4">
//             <input
//               type="password"
//               placeholder="ElevenLabs API Key (optional)"
//               value={apiKey}
//               onChange={(e) => setApiKey(e.target.value)}
//               className="w-full px-4 py-3 bg-background/50 border border-magic-primary/30 rounded-lg focus:border-magic-primary focus:outline-none"
//             />
            
//             <div className="flex gap-3">
//               <Button 
//                 onClick={startBot}
//                 className="flex-1 bg-gradient-magical hover:shadow-magical transition-all duration-300"
//               >
//                 Start with Voice
//               </Button>
//               <Button 
//                 onClick={skipToVoiceDemo}
//                 variant="outline"
//                 className="flex-1 border-magic-primary/30 hover:bg-magic-primary/10"
//               >
//                 Continue Without Voice
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-6 relative overflow-hidden">
//       <MagicalParticles />
      
//       <div className="relative z-10 text-center max-w-4xl">
//         {/* Bot Character */}
//         <div className="relative mb-12">
//           <div className="inline-block animate-float">
//             <div className="relative">
//               <img 
//                 src={botImage} 
//                 alt="Aarohan Bot" 
//                 className="w-48 h-48 mx-auto animate-glow-pulse rounded-full"
//               />
//               <div className="absolute inset-0 bg-gradient-magical opacity-20 rounded-full animate-pulse" />
//             </div>
//           </div>
//         </div>

//         {/* Message Display */}
//         <div className="h-24 flex items-center justify-center">
//           {hasStarted && showMessage && (
//             <div className="animate-fade-in-up">
//               <TypewriterText
//                 text={introMessages[currentMessageIndex]}
//                 speed={80}
//                 onComplete={handleTypewriterComplete}
//                 className="text-3xl md:text-4xl font-bold"
//               />
//             </div>
//           )}
//         </div>

//         {/* Progress Indicator */}
//         {hasStarted && (
//           <div className="mt-8 flex justify-center space-x-2">
//             {introMessages.map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index <= currentMessageIndex 
//                     ? 'bg-magic-accent shadow-accent' 
//                     : 'bg-muted/30'
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };