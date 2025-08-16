import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Mic, MicOff, FileText, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
import { useApp } from '@/store/AppContext';

const FileUploadSection: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
  const { t } = useTranslation();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [textInput, setTextInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    isCorrect: boolean;
    message: string;
    suggestions?: string[];
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const startAudioRecording = () => SpeechRecognition.startListening({ continuous: true });
  const stopAudioRecording = () => SpeechRecognition.stopListening();

  const appContext = useApp();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files));
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      setSelectedFiles(Array.from(event.dataTransfer.files));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    setTextInput(transcript);
  }, [transcript]);

  const handleSubmit = async () => {
    if (selectedFiles.length === 0 && !textInput.trim()) {
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResult(null);

    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('files', file); // The key 'file' should match the multer field name
    });
    formData.append('title', appContext.selectedProduct.title);
    formData.append('description', appContext.selectedProduct.description);

    setTimeout(() => {

      axios.post(`${BASE_URL}/verify`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log('Analysis response:', response.data);
        let { isCorrect, message, suggestions } = response.data;

        setAnalysisResult({ isCorrect, message, suggestions });
        isCorrect = true;
        message = t('fileAnalysisCorrect')
        suggestions = [
          t('suggestion1'),
          t('suggestion2'),
          t('suggestion3')
        ]
      }).catch(error => {
        console.error('Error during analysis:', error);
        setAnalysisResult({
          isCorrect: false,
          message: t('fileAnalysisError'),
          suggestions: []
        });
      }).finally(() => {
        setIsAnalyzing(false);
      });
    }, 4000);
  };

  const clearAll = () => {
    setSelectedFiles([]);
    setTextInput('');
    setAnalysisResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    resetTranscript();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="file-upload-section">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          {t('fileVerificationTitle')}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          {t('fileVerificationDesc')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* File Upload Section */}
        <Card className="shadow-lg border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="h-5 w-5 text-green-600" />
              <span>{t('uploadFiles')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">{t('dragDropFiles')}</p>
              <p className="text-sm text-gray-500">{t('supportedFormats')}</p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>

            {selectedFiles.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium text-gray-700 mb-2">{t('selectedFiles')}:</h4>
                <ul className="space-y-2">
                  {selectedFiles.map((file, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span>{file.name}</span>
                      <span className="text-gray-400">({(file.size / 1024).toFixed(1)} KB)</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Text/Voice Input Section */}
        <Card className="shadow-lg border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mic className="h-5 w-5 text-blue-600" />
              <span>{t('textVoiceInput')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder={t('enterInstructions')}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              rows={6}
              className="resize-none"
            />

            <div className="flex space-x-2">
              <Button
                // onClick={isRecording ? stopRecording : startRecording}
                onClick={listening ? stopAudioRecording : startAudioRecording}
                variant={listening ? "destructive" : "outline"}
                className="flex-1"
              >
                {listening ? (
                  <>
                    <MicOff className="h-4 w-4 mr-2" />
                    {t('stopRecording')}
                  </>
                ) : (
                  <>
                    <Mic className="h-4 w-4 mr-2" />
                    {t('startRecording')}
                  </>
                )}
              </Button>

              <Button onClick={clearAll} variant="outline">
                {t('clear')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-8">
        <Button
          onClick={handleSubmit}
          disabled={isAnalyzing || (selectedFiles.length === 0 && !textInput.trim())}
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
        >
          {isAnalyzing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              {t('analyzing')}
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              {t('verifyFiles')}
            </>
          )}
        </Button>
      </div>

      {/* Analysis Result */}
      {analysisResult && (
        <Card className={`mt-8 shadow-lg ${analysisResult.isCorrect ? 'border-green-500' : 'border-red-500'}`}>
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              {analysisResult.isCorrect ? (
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              ) : (
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              )}
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-2 ${analysisResult.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {analysisResult.isCorrect ? t('analysisCorrect') : t('analysisIncorrect')}
                </h3>
                <p className="text-gray-700 mb-4">{analysisResult.message}</p>

                {analysisResult.suggestions && analysisResult.suggestions.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">{t('suggestions')}:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {analysisResult.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FileUploadSection;